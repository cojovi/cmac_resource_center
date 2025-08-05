import { useState } from "react";
import { Mail, Phone, ChevronLeft, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

// Department mapping from jenns-updates.txt
const departmentMapping: { [key: string]: string } = {
  // Tile Division
  "Lazaro Castillo": "Tile Division",
  "Renee Cremean": "Accounting, Purchasing, and Finance",
  "Evencio Gaona": "Tile Division",
  "Jonathan Haigwood": "Tile Division",
  "Pedro Marquez": "Tile Division",
  "Hugo Sandia": "Tile Division",
  "Miguel Sandia": "Tile Division",
  "Christian Sommer": "Tile Division",
  "Chris Singleton": "Tile Division",
  
  // Accounting, Purchasing, and Finance
  "Robin Garner": "Accounting, Purchasing, and Finance",
  "Jeninne Glass": "Accounting, Purchasing, and Finance",
  "Chasity Jones": "Accounting, Purchasing, and Finance",
  "Dulce Munoz": "Accounting, Purchasing, and Finance",
  "Faith Mahan": "Accounting, Purchasing, and Finance",
  "Jeanette Pena": "Accounting, Purchasing, and Finance",
  
  // Restoration
  "Michael August": "Restoration",
  "Jason Gamez": "Restoration",
  "Charles Marlow": "Restoration",
  "Brett Russell": "Restoration",
  "Michael Serenil": "Restoration",
  "David Tresemer": "Restoration",
  
  // Sheetmetal
  "Clayton Bradfield": "Sheetmetal",
  "Jay Narke": "Sheetmetal",
  "Silvano Rojo": "Sheetmetal",
  "Ivan Guadiana": "Sheetmetal",
  "Omar Guadiana": "Sheetmetal",
  "Abel Salazar": "Sheetmetal",
  
  // CMAC Services
  "Amy Havenor": "CMAC Services",
  "David Havenor": "CMAC Services",
  "Billy Nicholson": "CMAC Services",
  "Scott Reichardt": "CMAC Services",
  
  // Austin Division
  "Jared Hobbs": "Austin Division",
  "Daniela Rivera": "Austin Division",
  "Jonni Torres": "Austin Division",
  "Vivian Torres": "Austin Division",
  
  // Doors
  "Victor Garcia": "Doors",
  "Mike Porter": "Doors",
  
  // Framing
  "Shane Gresham": "Framing",
  "Rob Davis": "Framing",
  
  // Houston
  "Spencer Fesmire": "Houston",
};

const teamResources = [
  { firstName: "Aaron", lastName: "Garcia", email: "aarong@cmacroofing.com", phone: "817-896-65612" },
  { firstName: "Abel", lastName: "Salazar", email: "abels@cmacroofing.com", phone: "214-533-3078" },
  { firstName: "Albert", lastName: "Pecina", email: "albertp@cmacroofing.com", phone: "+18177512041" },
  { firstName: "Alfredo", lastName: "Sandoval", email: "alfredos@cmacroofing.com", phone: "" },
  { firstName: "Allan", lastName: "Aviles", email: "allan@cmacroofing.com", phone: "" },
  { firstName: "Alondra", lastName: "Flores", email: "alondraf@cmacroofing.com", phone: "+18172102493" },
  { firstName: "Amy", lastName: "Havenor", email: "amyh@cmacroofing.com", phone: "214-734-2717" },
  { firstName: "Anna", lastName: "Skwierinski", email: "annas@cmacroofing.com", phone: "" },
  { firstName: "Arnold", lastName: "Guevara", email: "arnoldg@cmacroofing.com", phone: "713-446-8223" },
  { firstName: "Ashlee", lastName: "Eaton", email: "ashlee@cmacroofing.com", phone: "2146364118" },
  { firstName: "Avery", lastName: "West", email: "averyw@cmacroofing.com", phone: "" },
  { firstName: "Bailey", lastName: "Poe", email: "baileyp@cmacroofing.com", phone: "(806) 576-9710" },
  { firstName: "Billy", lastName: "Nicholson", email: "billyn@cmacroofing.com", phone: "+16788990095" },
  { firstName: "Brett", lastName: "Russell", email: "brettr@cmacroofing.com", phone: "+12145297537" },
  { firstName: "Brock", lastName: "Johnston", email: "brock@cmacroofing.com", phone: "" },
  { firstName: "Cassidy", lastName: "Hortman", email: "cassidyh@cmacroofing.com", phone: "" },
  { firstName: "Charles", lastName: "Marlow", email: "charlesm@cmacroofing.com", phone: "" },
  { firstName: "Chasity", lastName: "Jones", email: "chasityj@cmacroofing.com", phone: "940-393-9157" },
  { firstName: "Chris", lastName: "Reynolds", email: "chrisr@cmacroofing.com", phone: "+12817708926" },
  { firstName: "Chris", lastName: "Harrison", email: "chrish@cmacroofing.com", phone: "" },
  { firstName: "Chris", lastName: "Singleton", email: "chriss@cmacroofing.com", phone: "+12148768630" },
  { firstName: "Christian", lastName: "Sommer", email: "csommer@cmacroofing.com", phone: "+12818508678" },
  { firstName: "Christian", lastName: "Viveiros", departmentName: "CEO", email: "christian@cmacroofing.com", phone: "8174717854" },
  { firstName: "Clayton", lastName: "Bradfield", email: "claytonb@cmacroofing.com", phone: "214-545-2279" },
  { firstName: "Cody", lastName: "Viveiros", email: "codyv@cmacroofing.com", phone: "8177512041" },
  { firstName: "Craig", lastName: "Hamilton", email: "acquisition@cmacroofing.com", phone: "928-671-1126" },
  { firstName: "Daniel", lastName: "Lara", email: "daniell@cmacroofing.com", phone: "+18179406899" },
  { firstName: "Daniel", lastName: "Arreola", email: "daniela@cmacroofing.com", phone: "" },
  { firstName: "Daniela", lastName: "Rivera", email: "danielar@cmacroofing.com", phone: "817 925 6177" },
  { firstName: "David", lastName: "Havenor", email: "davidh@cmacroofing.com", phone: "+12148834670" },
  { firstName: "David", lastName: "Tresemer", email: "Davidt@cmacroofing.com", phone: "(417) 483-8706" },
  { firstName: "Dulce", lastName: "Munoz", email: "candym@cmacroofing.com", phone: "" },
  { firstName: "Edwin", lastName: "Escobar", email: "edwine@cmacroofing.com", phone: "(682) 521-7722" },
  { firstName: "Eric", lastName: "Francis", email: "ericf@cmacroofing.com", phone: "" },
  { firstName: "Evencio", lastName: "Gaona", email: "evenciog@cmacroofing.com", phone: "+18175250294" },
  { firstName: "Faith", lastName: "Mahan", email: "faith@cmacroofing.com", phone: "+18179629018" },
  { firstName: "Grant", lastName: "Gamez", email: "grantg@cmacroofing.com", phone: "" },
  { firstName: "Hugo", lastName: "Sandia", email: "hugos@cmacroofing.com", phone: "" },
  { firstName: "Hunter", lastName: "Powers", email: "hunterp@cmacroofing.com", phone: "" },
  { firstName: "Ingrid", lastName: "Blancarte", email: "ingridb@cmacroofing.com", phone: "+19722617493" },
  { firstName: "Italia", lastName: "Mireles", email: "italiam@cmacroofing.com", phone: "817-818-8396" },
  { firstName: "Ivan", lastName: "Guadiana", email: "ivang@cmacroofing.com", phone: "" },
  { firstName: "Ivette", lastName: "Sanchez", email: "ivettes@cmacroofing.com", phone: "(682)336-3848" },
  { firstName: "Ivis", lastName: "Aviles", departmentName: "President", email: "ivis@cmacroofing.com", phone: "" },
  { firstName: "Jace", lastName: "Hobbs", email: "jace@cmacroofing.com", phone: "+16825517020" },
  { firstName: "Jared", lastName: "Hobbs", email: "jared@cmacroofing.com", phone: "" },
  { firstName: "Jason", lastName: "Carson", email: "jasonc@cmacroofing.com", phone: "" },
  { firstName: "Jason", lastName: "Boehm", email: "jasonb@cmacroofing.com", phone: "" },
  { firstName: "Jason", lastName: "Gamez", email: "jason@cmacroofing.com", phone: "" },
  { firstName: "Javier", lastName: "Sosa", email: "javiers@cmacroofing.com", phone: "+14698068207" },
  { firstName: "Jay", lastName: "Narke", email: "jayn@cmacroofing.com", phone: "+12146427739" },
  { firstName: "Jeanette", lastName: "Pena", email: "jeanettep@cmacroofing.com", phone: "940-465-9354" },
  { firstName: "Jeninne", lastName: "Glass", email: "jeninneg@cmacroofing.com", phone: "" },
  { firstName: "Jenn", lastName: "Ridgeway", departmentName: "Director of Business Operations and HR", email: "jennr@cmacroofing.com", phone: "+14692309547" },
  { firstName: "Jeremy", lastName: "Smith", email: "jeremys@cmacroofing.com", phone: "817-614-2199" },
  { firstName: "Jesus", lastName: "Salazar", email: "jesuss@cmacroofing.com", phone: "214-418-7109" },
  { firstName: "Joe", lastName: "Coker", email: "joec@cmacroofing.com", phone: "+18172286924" },
  { firstName: "John", lastName: "Rogers", email: "johnr@cmacroofing.com", phone: "" },
  { firstName: "Johnny", lastName: "Thacker", email: "johnnyt@cmacroofing.com", phone: "" },
  { firstName: "Jonathan", lastName: "Guerra", email: "jonathang@cmacroofing.com", phone: "903-474-1073" },
  { firstName: "Jonathan", lastName: "Haigwood", email: "jonathanh@cmacroofing.com", phone: "+1 (817) 751-3389" },
  { firstName: "Jonni", lastName: "Torres", email: "jonni@cmacroofing.com", phone: "+1 (817) 729-1605" },
  { firstName: "Jordan", lastName: "West", email: "jordanw@cmacroofing.com", phone: "" },
  { firstName: "Jorge", lastName: "Marquez", email: "jorgem@cmacroofing.com", phone: "" },
  { firstName: "Jose Luis", lastName: "Moreno", email: "josem@cmacroofing.com", phone: "+14692628405" },
  { firstName: "Joseph", lastName: "Bandy", email: "josephb@cmacroofing.com", phone: "+18173015332" },
  { firstName: "Josh", lastName: "Lawrence", email: "joshl@cmacroofing.com", phone: "580-439-4668" },
  { firstName: "Josh", lastName: "Johnson", email: "joshj@cmacroofing.com", phone: "512-762-0640" },
  { firstName: "JR", lastName: "Aviles", email: "jr@cmacroofing.com", phone: "" },
  { firstName: "Juan", lastName: "Mata", email: "juanm@cmacroofing.com", phone: "" },
  { firstName: "Kambry", lastName: "Russell", email: "kambryr@cmacroofing.com", phone: "972-849-1524" },
  { firstName: "Kyle", lastName: "Voss", email: "kylev@cmacroofing.com", phone: "5129058494" },
  { firstName: "Larry", lastName: "Cremean", email: "larryc@cmacroofing.com", phone: "" },
  { firstName: "Lazaro", lastName: "Castillo", email: "lazaroc@cmacroofing.com", phone: "" },
  { firstName: "Leo", lastName: "Don", email: "leo@cmacroofing.com", phone: "" },
  { firstName: "lily", lastName: "Castillo", email: "lilyc@cmacroofing.com", phone: "972-832-3677" },
  { firstName: "Lucio", lastName: "Medrano", email: "luciom@cmacroofing.com", phone: "972-921-2253" },
  { firstName: "Luis", lastName: "Gutierrez", email: "luisg@cmacroofing.com", phone: "+19452466775" },
  { firstName: "Mac", lastName: "Brink", email: "macb@cmacroofing.com", phone: "" },
  { firstName: "Mario", lastName: "Dixon", email: "mariod@cmacroofing.com", phone: "" },
  { firstName: "Martin", lastName: "M", email: "martinm@cmacroofing.com", phone: "+18326907898" },
  { firstName: "Martin", lastName: "L", email: "martinl@cmacroofing.com", phone: "+14696262412" },
  { firstName: "Marvin", lastName: "Bonilla", email: "marvinb@cmacroofing.com", phone: "(817) 705-5065" },
  { firstName: "Michael", lastName: "Bennett", email: "michaelb@cmacroofing.com", phone: "+18178291392" },
  { firstName: "Michael", lastName: "Serenil", email: "michaels@cmacroofing.com", phone: "817-825-0441" },
  { firstName: "Michael", lastName: "Schumann", email: "michaelsc@cmacroofing.com", phone: "(817) 964-1421" },
  { firstName: "Miguel", lastName: "Sandia", email: "miguels@cmacroofing.com", phone: "" },
  { firstName: "Mike", lastName: "Porter", email: "mikep@cmacroofing.com", phone: "" },
  { firstName: "Mike", lastName: "Holley", email: "mikeh@cmacroofing.com", phone: "+14693692069" },
  { firstName: "Mike", lastName: "Roque", email: "miker@cmacroofing.com", phone: "512-808-8193" },
  { firstName: "Mike", lastName: "August", email: "mikea@cmacroofing.com", phone: "8179075380" },
  { firstName: "Monica", lastName: "Lopez", email: "monical@cmacroofing.com", phone: "" },
  { firstName: "Nakoa", lastName: "Taggart", email: "nakoat@cmacroofing.com", phone: "737-710-0445" },
  { firstName: "Omar", lastName: "Guadiana", email: "omarg@cmacroofing.com", phone: "" },
  { firstName: "Oscar", lastName: "Salazar", email: "oscar@cmacroofing.com", phone: "512-965-7256" },
  { firstName: "Osiris", lastName: "Hernandez", email: "osirish@cmacroofing.com", phone: "+19035193830" },
  { firstName: "Pedro", lastName: "Marquez", email: "pedrom@cmacroofing.com", phone: "" },
  { firstName: "Perla", lastName: "De La Cruz", email: "perlad@cmacroofing.com", phone: "2149076610" },
  { firstName: "Renee", lastName: "Cremean", email: "renee@cmacroofing.com", phone: "817-296-3139" },
  { firstName: "Rob", lastName: "Davis", email: "rob@cmacroofing.com", phone: "+18178884757" },
  { firstName: "Robin", lastName: "Garner", email: "robin@cmacroofing.com", phone: "+18177974979" },
  { firstName: "Sam", lastName: "Acosta", email: "sama@cmacroofing.com", phone: "501-514-7366" },
  { firstName: "Sartha", lastName: "vongvivitpatana", email: "sartha@cmacroofing.com", phone: "" },
  { firstName: "Scott", lastName: "Reichardt", email: "scottr@cmacroofing.com", phone: "580-483-6781" },
  { firstName: "Sergio", lastName: "Salcido", email: "sergios@cmacroofing.com", phone: "9729216648" },
  { firstName: "Shane", lastName: "Gresham", email: "shane@cmacroofing.com", phone: "" },
  { firstName: "Silvano", lastName: "Rojo", email: "silvanor@cmacroofing.com", phone: "" },
  { firstName: "Simon", lastName: "Luna", email: "simonl@cmacroofing.com", phone: "512-492-5768" },
  { firstName: "Spencer", lastName: "Fesmire", email: "houstonroofer@cmacroofing.com", phone: "346-667-7376" },
  { firstName: "Stephanie", lastName: "Smith", email: "stephanies@cmacroofing.com", phone: "" },
  { firstName: "Stephanie", lastName: "Ramos", email: "stephanier@cmacroofing.com", phone: "" },
  { firstName: "Steven", lastName: "Ott", email: "steveno@cmacroofing.com", phone: "5129344806" },
  { firstName: "Tavo", lastName: "at CMAC Roofing", email: "tavo@cmacroofing.com", phone: "" },
  { firstName: "Valeria", lastName: "Duron", email: "valeriad@cmacroofing.com", phone: "682-583-7349" },
  { firstName: "Victor", lastName: "at CMAC Roofing", email: "victor@cmacroofing.com", phone: "" },
  { firstName: "Victor Jr", lastName: "Garcia", email: "victorjr@cmacroofing.com", phone: "" },
  { firstName: "Vivian", lastName: "Torres", email: "vivian@cmacroofing.com", phone: "+18177052676" },
  { firstName: "Wes", lastName: "Shierry", email: "wes@cmacroofing.com", phone: "+1 (817) 501-9807" },
  { firstName: "Yessenia", lastName: "Leiva", email: "yessenial@cmacroofing.com", phone: "9403903855" },
];

export default function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = teamResources.filter(member => 
    `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getDepartment = (member: any) => {
    // First check if member has a direct departmentName field (one-off)
    if (member.departmentName) {
      return member.departmentName;
    }
    
    // Otherwise, use the mapping system
    const fullName = `${member.firstName} ${member.lastName}`;
    return departmentMapping[fullName] || "";
  };

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
          {filteredMembers.map((member, index) => {
            const department = getDepartment(member);
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{member.firstName[0]}{member.lastName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h2 className="text-xl font-semibold">{member.firstName} {member.lastName}</h2>
                      {department && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="mr-2 h-4 w-4" />
                          <span>{department}</span>
                        </div>
                      )}
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
            );
          })}
        </div>
      </ScrollArea>
    </main>
  )
}