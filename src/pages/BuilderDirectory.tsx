import { useState } from "react";
import { Mail, Phone, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const builderResources = [
  { firstName: "Dan", lastName: "Bowen", email: "Dan.Bowen@lennar.com", phone: "(832) 731-3273", title: "VP of Purchasing", company: "Lennar" },
  { firstName: "David", lastName: "Feuerbacher", email: "David.Feuerbacher@lennar.com", phone: "(817) 822-2392", title: "Senior Purchasing Manager", company: "Lennar" },
  { firstName: "Ray", lastName: "Kirby", email: "Ray.Kirby@lennar.com", phone: "(214) 457-6189", title: "Senior Purchasing Manager", company: "Lennar" },
  { firstName: "Ilse", lastName: "Chavez", email: "Ilse.Chavez@lennar.com", phone: "(214) 208-9027", title: "Purchasing Manager", company: "Lennar" },
  { firstName: "Jared", lastName: "Jackson", email: "Jared.Jackson@lennar.com", phone: "(469) 426-9871", title: "Purchasing Manager", company: "Lennar" },
  { firstName: "Lisa", lastName: "Pesch", email: "Lisa.Pesch@lennar.com", phone: "(469) 994-1022", title: "Senior Purchasing Agent", company: "Lennar" },
  { firstName: "Brenda", lastName: "Jordan", email: "Brenda.Jordan@lennar.com", phone: "(469) 394-5063", title: "Purchasing Coordinator", company: "Lennar" },
  { firstName: "Lucas", lastName: "Llamas", email: "Lucas.Llamas@lennar.com", phone: "(469) 785-4653", title: "Purchasing Coordinator", company: "Lennar" },
  { firstName: "Grace", lastName: "Kelley", email: "Grace.Kelley@lennar.com", phone: "(469) 435-3883", title: "Purchasing Coordinator", company: "Lennar" },
  { firstName: "Cedric", lastName: "Muoneke", email: "Cedric.Muoneke@lennar.com", phone: "(469) 212-5178", title: "Purchasing Agent", company: "Lennar" },
  { firstName: "Henry", lastName: "Rivas", email: "Henry.Rivas@lennar.com", phone: "(945) 230-5451", title: "Purchasing Agent", company: "Lennar" },
  { firstName: "Jesse", lastName: "Grimes", email: "Jesse.Grimes@lennar.com", phone: "(469) 870-864", title: "Purchasing Agent", company: "Lennar" }
];

export default function BuilderDirectory() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = builderResources.filter(member => 
    `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-background p-6">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Resource Center
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">Builder Directory</h1>
      <Input
        type="search"
        placeholder="Search by name, email, title, or company..."
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
                    <p className="text-sm text-muted-foreground font-medium">{member.title}</p>
                    <p className="text-xs text-muted-foreground">{member.company}</p>
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