import { useMemo, useState } from "react";
import { Mail, Phone, ChevronLeft, Building, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import { teamDirectoryEmployeeRows } from "@/data/teamDirectoryEmployees";

type Employee = {
  id: string;
  division: string;
  name: string;
  jobTitle?: string;
  phoneDisplay?: string;
  phoneTel?: string;
  email?: string;
};

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripParentheticals(value: string) {
  // e.g. "Ivis Aviles (Junior)" -> "Ivis Aviles"
  return value.replace(/\([^)]*\)/g, " ");
}

function generateCmacEmailFromName(fullName: string) {
  const cleaned = normalizeWhitespace(stripParentheticals(fullName))
    // Keep letters/numbers/spaces/hyphens/dots for tokenization, remove other punctuation.
    .replace(/[^\p{L}\p{N}\s.\-]/gu, " ");

  const rawParts = cleaned.split(/\s+/).filter(Boolean);
  if (rawParts.length < 2) return "";

  const suffixes = new Set(["jr", "jr.", "sr", "sr.", "ii", "iii", "iv", "v", "junior"]);
  const parts = rawParts.filter((p) => !suffixes.has(p.toLowerCase()));
  if (parts.length < 2) return "";

  const firstName = parts[0].replace(/[^a-z0-9]/gi, "").toLowerCase();
  const lastToken = parts[parts.length - 1];
  const lastInitial = (lastToken.match(/[a-z]/i)?.[0] ?? "").toLowerCase();

  if (!firstName || !lastInitial) return "";
  return `${firstName}${lastInitial}@cmacroofing.com`;
}

function normalizePhoneDigits(value: string) {
  // Remove weird bidi marks and non-digit characters.
  const digits = value.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(/\D/g, "");
  return digits;
}

function toTelHref(digitsOrRaw: string) {
  const digits = normalizePhoneDigits(digitsOrRaw);
  if (!digits) return "";
  // If it's a 10-digit US number, normalize to +1XXXXXXXXXX for best compatibility.
  if (digits.length === 10) return `+1${digits}`;
  // If it already includes a leading country code (commonly 11+ digits), keep as-is.
  return digits.startsWith("1") && digits.length === 11 ? `+${digits}` : `+${digits}`;
}

function getInitials(fullName: string) {
  const cleaned = normalizeWhitespace(fullName);
  if (!cleaned) return "?";
  const parts = cleaned.split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase() || "?";
}

function splitName(fullName: string) {
  const cleaned = normalizeWhitespace(fullName);
  const parts = cleaned.split(" ").filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";
  return { firstName, lastName };
}

function buildEmployeesFromRows(): Employee[] {
  return teamDirectoryEmployeeRows.flatMap((row, rowIndex) => {
    const normalizedName = normalizeWhitespace(row.name || "");
    const normalizedDivision = normalizeWhitespace(row.division || "");
    const normalizedJobTitle = normalizeWhitespace(row.jobTitle || "");
    const normalizedPhoneDisplay = normalizeWhitespace(row.phoneDisplay || "");
    const normalizedPhoneDigits = normalizeWhitespace(row.phoneDigits || "");
    const normalizedEmail = normalizeWhitespace(row.email || "");

    if (!normalizedName) return [];

    const telSource = normalizedPhoneDigits || normalizedPhoneDisplay;
    const phoneTel = telSource ? toTelHref(telSource) : "";
    const email = normalizedEmail || generateCmacEmailFromName(normalizedName);

    return [
      {
        id: `${normalizedDivision || "unknown"}:${normalizedName}:${rowIndex}`,
        division: normalizedDivision,
        name: normalizedName,
        jobTitle: normalizedJobTitle,
        phoneDisplay: normalizedPhoneDisplay,
        phoneTel,
        email,
      },
    ];
  });
}

function getCalendarEmbedLink(email: string) {
  const trimmed = normalizeWhitespace(email);
  if (!trimmed) return "";
  return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(trimmed)}`;
}

export default function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = useMemo(() => buildEmployeesFromRows(), []);
  const query = normalizeWhitespace(searchTerm).toLowerCase();

  const filteredMembers = useMemo(() => {
    const filtered = employees.filter((e) => {
      if (!query) return true;
      return (
        e.name.toLowerCase().includes(query) ||
        (e.division || "").toLowerCase().includes(query) ||
        (e.jobTitle || "").toLowerCase().includes(query) ||
        (e.email || "").toLowerCase().includes(query) ||
        (e.phoneDisplay || "").toLowerCase().includes(query)
      );
    });

    const collator = new Intl.Collator(undefined, { sensitivity: "base", numeric: true });

    return filtered.slice().sort((a, b) => {
      const aName = splitName(a.name);
      const bName = splitName(b.name);

      const firstCmp = collator.compare(aName.firstName, bName.firstName);
      if (firstCmp !== 0) return firstCmp;

      return collator.compare(aName.lastName, bName.lastName);
    });
  }, [employees, query]);

  return (
    <main className="min-h-screen bg-background p-6">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Resource Center
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">Team Directory</h1>
      <Input
        type="search"
        placeholder="Search by name, division, title, or phone..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers.map((member) => {
            const { firstName, lastName } = splitName(member.name);
            const initials = getInitials(member.name);
            const calendarLink = member.email ? getCalendarEmbedLink(member.email) : "";
            return (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">
                        {firstName} {lastName}
                      </h2>
                      {member.jobTitle && (
                        <div className="text-sm text-muted-foreground font-medium">
                          {member.jobTitle}
                        </div>
                      )}
                      {member.division && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="mr-2 h-4 w-4" />
                          <span>{member.division}</span>
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="mr-2 h-4 w-4" />
                          <a href={`mailto:${member.email}`} className="hover:underline">
                            {member.email}
                          </a>
                        </div>
                      )}
                      {member.phoneDisplay && member.phoneTel && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="mr-2 h-4 w-4" />
                          <a href={`tel:${member.phoneTel}`} className="hover:underline">
                            {member.phoneDisplay}
                          </a>
                        </div>
                      )}
                      {calendarLink && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <a
                            href={calendarLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            View Calendar
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </main>
  );
}
