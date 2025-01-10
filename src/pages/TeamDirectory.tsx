import { useState } from "react";
import { Mail, Phone, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const teamResources = [
  { firstName: "Aaron", lastName: "Garcia", email: "aarong@cmacroofing.com", phone: "817-896-65612" },
  { firstName: "Abel", lastName: "Salazar", email: "abels@cmacroofing.com", phone: "214-533-3078" },
  { firstName: "Albert", lastName: "Pecina", email: "albertp@cmacroofing.com", phone: "" },
  { firstName: "Alex", lastName: "Miles", email: "alexm@cmacroofing.com", phone: "" },
  { firstName: "Alfredo", lastName: "Sandoval", email: "alfredos@cmacroofing.com", phone: "" },
  { firstName: "Allan", lastName: "Aviles", email: "allan@cmacroofing.com", phone: "" },
  { firstName: "Alondra", lastName: "Flores", email: "alondraf@cmacroofing.com", phone: "" },
  { firstName: "Amy", lastName: "Havenor", email: "amyh@cmacroofing.com", phone: "214-734-2717" },
  { firstName: "Andrea", lastName: "Lund", email: "andreal@cmacroofing.com", phone: "+16822611092" },
  { firstName: "Angel", lastName: "Reyes", email: "angelr@cmacroofing.com", phone: "14696001177" },
  { firstName: "Anna", lastName: "Skwierinski", email: "annas@cmacroofing.com", phone: "" },
  { firstName: "Ashlee", lastName: "Eaton", email: "ashlee@cmacroofing.com", phone: "2146364118" },
  { firstName: "Avery", lastName: "West", email: "averyw@cmacroofing.com", phone: "" },
  { firstName: "Billy", lastName: "Collazo", email: "billyc@cmacroofing.com", phone: "+19729899976" },
  { firstName: "Birthday", lastName: "Buddy", email: "birthdaybuddy@cmacroofing.com", phone: "" },
  { firstName: "Brian", lastName: "Luciano", email: "brianl@cmacroofing.com", phone: "" },
  { firstName: "Brock", lastName: "Johnston", email: "brock@cmacroofing.com", phone: "" },
  { firstName: "Chasity", lastName: "Jones", email: "chasityj@cmacroofing.com", phone: "940-393-9157" },
  { firstName: "Chris", lastName: "Reynolds", email: "chrisr@cmacroofing.com", phone: "+12817708926" },
  { firstName: "Chris", lastName: "Harrison", email: "chrish@cmacroofing.com", phone: "" },
  { firstName: "Chris", lastName: "Singleton", email: "chriss@cmacroofing.com", phone: "+12148768630" },
  { firstName: "Christian", lastName: "Sommer", email: "csommer@cmacroofing.com", phone: "+12818508678" },
  { firstName: "Christian", lastName: "Viveiros", email: "christian@cmacroofing.com", phone: "+18174717854" },
  { firstName: "CMAC", lastName: "Forge", email: "cmacforge@cmacroofing.com", phone: "" },
  { firstName: "CMAC-Atx", lastName: "Info", email: "atxinfo@cmacroofing.com", phone: "" },
  { firstName: "Cody", lastName: "Viveiros", email: "codyv@cmacroofing.com", phone: "+18177512041" },
  { firstName: "Daniel", lastName: "Lara", email: "daniell@cmacroofing.com", phone: "+18179406899" },
  { firstName: "Daniel", lastName: "Arreola", email: "daniela@cmacroofing.com", phone: "" },
  { firstName: "David", lastName: "Havenor", email: "davidh@cmacroofing.com", phone: "+12148834670" },
  { firstName: "David", lastName: "Tresemer", email: "Davidt@cmacroofing.com", phone: "417-483-8706" },
  { firstName: "Dulce", lastName: "Munoz", email: "candym@cmacroofing.com", phone: "" } 
];

export default function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = teamResources.filter(member => 
    `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
        placeholder="Search by name or email..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{member.firstName[0]}{member.lastName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">{member.firstName} {member.lastName}</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                    </div>
                    {member.phone && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="mr-2 h-4 w-4" />
                        <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </main>
  )
}