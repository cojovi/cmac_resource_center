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
  { firstName: "Dulce", lastName: "Munoz", email: "candym@cmacroofing.com", phone: "" },
  { firstName: "Edwin", lastName: "Escobar", email: "edwine@cmacroofing.com", phone: "682-521-7722" },
  { firstName: "Eric", lastName: "Francis", email: "ericf@cmacroofing.com", phone: "" },
  { firstName: "Erica", lastName: "at CMAC", email: "erica@cmacroofing.com", phone: "+18176802008" },
  { firstName: "Evencio", lastName: "Gaona", email: "evenciog@cmacroofing.com", phone: "+18175250294" },
  { firstName: "Faith", lastName: "Mahan", email: "faith@cmacroofing.com", phone: "+18179629018" },
  { firstName: "Grant", lastName: "Gamez", email: "grantg@cmacroofing.com", phone: "" },
  { firstName: "Hugo", lastName: "Sandia", email: "hugos@cmacroofing.com", phone: "" },
  { firstName: "Hunter", lastName: "Powers", email: "hunterp@cmacroofing.com", phone: "" },
  { firstName: "Ivan", lastName: "Guadiana", email: "ivang@cmacroofing.com", phone: "" },
  { firstName: "Ivis", lastName: "Aviles", email: "ivis@cmacroofing.com", phone: "" },
  { firstName: "Jace", lastName: "Hobbs", email: "jace@cmacroofing.com", phone: "+16825517020" },
  { firstName: "Jared", lastName: "Hobbs", email: "jared@cmacroofing.com", phone: "" },
  { firstName: "Jason", lastName: "Carson", email: "jasonc@cmacroofing.com", phone: "" },
  { firstName: "Jason", lastName: "Gamez", email: "jason@cmacroofing.com", phone: "" },
  { firstName: "Javier", lastName: "Sosa", email: "javiers@cmacroofing.com", phone: "+14698068207" },
  { firstName: "Jay", lastName: "Narke", email: "jayn@cmacroofing.com", phone: "+12146427739" },
  { firstName: "Jeninne", lastName: "Glass", email: "jeninneg@cmacroofing.com", phone: "" },
  { firstName: "Jeremy", lastName: "Smith", email: "jeremys@cmacroofing.com", phone: "817-614-2199" },
  { firstName: "Joe", lastName: "Coker", email: "joec@cmacroofing.com", phone: "+18172286924" },
  { firstName: "John", lastName: "Rogers", email: "johnr@cmacroofing.com", phone: "" },
  { firstName: "Johnny", lastName: "Thacker", email: "johnnyt@cmacroofing.com", phone: "" },
  { firstName: "Jonathan", lastName: "Haigwood", email: "jonathanh@cmacroofing.com", phone: "" },
  { firstName: "Jonni", lastName: "Torres", email: "jonni@cmacroofing.com", phone: "" },
  { firstName: "Jordan", lastName: "West", email: "jordanw@cmacroofing.com", phone: "" },
  { firstName: "Jorge", lastName: "Marquez", email: "jorgem@cmacroofing.com", phone: "" },
  { firstName: "Joseph", lastName: "Bandy", email: "josephb@cmacroofing.com", phone: "" },
  { firstName: "Joshua", lastName: "Johnson", email: "JoshJ@cmacroofing.com", phone: "512-762-0640" },
  { firstName: "JR", lastName: "Aviles", email: "jr@cmacroofing.com", phone: "" },
  { firstName: "Juan", lastName: "Mata", email: "juanm@cmacroofing.com", phone: "" },
  { firstName: "Larry", lastName: "Cremean", email: "larryc@cmacroofing.com", phone: "" },
  { firstName: "Lazaro", lastName: "Castillo", email: "lazaroc@cmacroofing.com", phone: "" },
  { firstName: "Leo", lastName: "Don", email: "leo@cmacroofing.com", phone: "" },
  { firstName: "Leticia", lastName: "Escamilla", email: "leticiae@cmacroofing.com", phone: "+18176894391" },
  { firstName: "Lily", lastName: "Castillo", email: "lilyc@cmacroofing.com", phone: "972-832-3677" },
  { firstName: "Luis", lastName: "Gutierrez", email: "luisg@cmacroofing.com", phone: "+19452466775" },
  { firstName: "Mac", lastName: "Brink", email: "macb@cmacroofing.com", phone: "" },
  { firstName: "Mario", lastName: "Dixon", email: "mariod@cmacroofing.com", phone: "" },
  { firstName: "Martin", lastName: "M", email: "martinm@cmacroofing.com", phone: "+18326907898" },
  { firstName: "Martin", lastName: "L", email: "martinl@cmacroofing.com", phone: "+14696262412" },
  { firstName: "Marvin", lastName: "Bonilla", email: "marvinb@cmacroofing.com", phone: "817-705-5065" },
  { firstName: "Michael", lastName: "Bennett", email: "michaelb@cmacroofing.com", phone: "+18178291392" },
  { firstName: "Micheal", lastName: "Sirenel", email: "micheals@cmacroofing.com", phone: "" },
  { firstName: "Miguel", lastName: "Sandia", email: "miguels@cmacroofing.com", phone: "" },
  { firstName: "Mike", lastName: "Porter", email: "mikep@cmacroofing.com", phone: "" },
  { firstName: "Mike", lastName: "August", email: "mikea@cmacroofing.com", phone: "8179075380" },
  { firstName: "Monica", lastName: "Lopez", email: "monical@cmacroofing.com", phone: "" },
  { firstName: "Omar", lastName: "Guadiana", email: "omarg@cmacroofing.com", phone: "" },
  { firstName: "Oscar", lastName: "Salazar", email: "oscar@cmacroofing.com", phone: "512-965-7256" },
  { firstName: "Pedro", lastName: "Marquez", email: "pedrom@cmacroofing.com", phone: "" },
  { firstName: "Renee", lastName: "Cremean", email: "renee@cmacroofing.com", phone: "817-296-3139" },
  { firstName: "Richard", lastName: "Rogers", email: "richr@cmacroofing.com", phone: "" },
  { firstName: "Rob", lastName: "Davis", email: "rob@cmacroofing.com", phone: "+18178884757" },
  { firstName: "Robin", lastName: "Garner", email: "robin@cmacroofing.com", phone: "+18177974979" },
  { firstName: "Sartha", lastName: "vongvivitpatana", email: "sartha@cmacroofing.com", phone: "" },
  { firstName: "Shane", lastName: "Gresham", email: "shane@cmacroofing.com", phone: "" },
  { firstName: "Silvano", lastName: "Rojo", email: "silvanor@cmacroofing.com", phone: "" },
  { firstName: "Stephanie", lastName: "Smith", email: "stephanies@cmacroofing.com", phone: "" },
  { firstName: "Stephanie", lastName: "Ramos", email: "stephanier@cmacroofing.com", phone: "" },
  { firstName: "Tavo", lastName: "at CMAC Roofing", email: "tavo@cmacroofing.com", phone: "" },
  { firstName: "Timothy", lastName: "Toshiba", email: "timothytoshiba@cmacroofing.com", phone: "" },
  { firstName: "Valeria", lastName: "Duron", email: "valeriad@cmacroofing.com", phone: "682-583-7349" },
  { firstName: "Veronica", lastName: "Paredes", email: "veronicag@cmacroofing.com", phone: "+16823958721" },
  { firstName: "Victor", lastName: "at CMAC Roofing", email: "victor@cmacroofing.com", phone: "" },
  { firstName: "Victor Jr", lastName: "Garcia", email: "victorjr@cmacroofing.com", phone: "" },
  { firstName: "Virginia", lastName: "Martinez", email: "virginiam@cmacroofing.com", phone: "" },
  { firstName: "Vivian", lastName: "Torres", email: "vivian@cmacroofing.com", phone: "+18177052676" },
  { firstName: "Wes", lastName: "Shierry", email: "wes@cmacroofing.com", phone: "" },
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