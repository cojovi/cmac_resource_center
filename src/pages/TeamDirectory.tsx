import { useState } from "react";
import { Mail, Phone, ChevronLeft, Building, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

// Calendar mapping from google_cal.csv
const calendarMapping: { [key: string]: string } = {
  "aarong@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=aarong%40cmacroofing.com",
  "abels@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=abels%40cmacroofing.com",
  "acquisition@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=acquisition%40cmacroofing.com",
  "admin@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com",
  "albertp@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=albertp%40cmacroofing.com",
  "alfredos@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=alfredos%40cmacroofing.com",
  "allan@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=allan%40cmacroofing.com",
  "allisong@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=allisong%40cmacroofing.com",
  "alondraf@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=alondraf%40cmacroofing.com",
  "amyh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=amyh%40cmacroofing.com",
  "annas@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=annas%40cmacroofing.com",
  "arnoldg@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=arnoldg%40cmacroofing.com",
  "ashlee@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ashlee%40cmacroofing.com",
  "averyw@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=averyw%40cmacroofing.com",
  "baileyp@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=baileyp%40cmacroofing.com",
  "brettr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=brettr%40cmacroofing.com",
  "brock@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=brock%40cmacroofing.com",
  "candym@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=candym%40cmacroofing.com",
  "charlesm@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=charlesm%40cmacroofing.com",
  "chasityj@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=chasityj%40cmacroofing.com",
  "chrish@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=chrish%40cmacroofing.com",
  "chrisr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=chrisr%40cmacroofing.com",
  "chriss@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=chriss%40cmacroofing.com",
  "christian@cmacroofing.com": "https://calendar.google.com",
  "claytonb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=claytonb%40cmacroofing.com",
  "codyv@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=codyv%40cmacroofing.com",
  "csommer@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=csommer%40cmacroofing.com",
  "danielar@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=danielar%40cmacroofing.com",
  "daniell@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=daniell%40cmacroofing.com",
  "darens@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=darens%40cmacroofing.com",
  "davidh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=davidh%40cmacroofing.com",
  "Davidt@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=Davidt%40cmacroofing.com",
  "edwine@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=edwine%40cmacroofing.com",
  "ericf@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ericf%40cmacroofing.com",
  "evenciog@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=evenciog%40cmacroofing.com",
  "faith@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=faith%40cmacroofing.com",
  "garretd@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=garretd%40cmacroofing.com",
  "grantg@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=grantg%40cmacroofing.com",
  "homerv@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=homerv%40cmacroofing.com",
  "houstonroofer@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=houstonroofer%40cmacroofing.com",
  "hugos@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=hugos%40cmacroofing.com",
  "huntera@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=huntera%40cmacroofing.com",
  "hunterp@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=hunterp%40cmacroofing.com",
  "ingridb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ingridb%40cmacroofing.com",
  "italiam@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=italiam%40cmacroofing.com",
  "ivang@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ivang%40cmacroofing.com",
  "ivettes@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ivettes%40cmacroofing.com",
  "ivis@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=ivis%40cmacroofing.com",
  "jace@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jace%40cmacroofing.com",
  "jared@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jared%40cmacroofing.com",
  "jason@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jason%40cmacroofing.com",
  "jasonb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jasonb%40cmacroofing.com",
  "jasonc@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jasonc%40cmacroofing.com",
  "javiers@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=javiers%40cmacroofing.com",
  "jeanettep@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jeanettep%40cmacroofing.com",
  "jeninneg@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jeninneg%40cmacroofing.com",
  "jennr@cmacroofing.com": "https://calendar.google.com/",
  "jeremys@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jeremys%40cmacroofing.com",
  "jesuss@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jesuss%40cmacroofing.com",
  "joec@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=joec%40cmacroofing.com",
  "johnnyt@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=johnnyt%40cmacroofing.com",
  "johnr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=johnr%40cmacroofing.com",
  "jonathang@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jonathang%40cmacroofing.com",
  "jonathanh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jonathanh%40cmacroofing.com",
  "jonni@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jonni%40cmacroofing.com",
  "jordanw@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jordanw%40cmacroofing.com",
  "jorgem@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jorgem%40cmacroofing.com",
  "josem@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=josem%40cmacroofing.com",
  "josephb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=josephb%40cmacroofing.com",
  "joshj@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=joshj%40cmacroofing.com",
  "joshl@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=joshl%40cmacroofing.com",
  "joshs@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=joshs%40cmacroofing.com",
  "jr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=jr%40cmacroofing.com",
  "juanm@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=juanm%40cmacroofing.com",
  "kambryr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=kambryr%40cmacroofing.com",
  "kristenh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=kristenh%40cmacroofing.com",
  "kristyt@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=kristyt%40cmacroofing.com",
  "kylev@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=kylev%40cmacroofing.com",
  "larryc@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=larryc%40cmacroofing.com",
  "lazaroc@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=lazaroc%40cmacroofing.com",
  "leo@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=leo%40cmacroofing.com",
  "lilyc@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=lilyc%40cmacroofing.com",
  "luciom@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=luciom%40cmacroofing.com",
  "luisg@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=luisg%40cmacroofing.com",
  "macb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=macb%40cmacroofing.com",
  "mariod@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=mariod%40cmacroofing.com",
  "martinl@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=martinl%40cmacroofing.com",
  "martinm@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=martinm%40cmacroofing.com",
  "marvinb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=marvinb%40cmacroofing.com",
  "michaelb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=michaelb%40cmacroofing.com",
  "michaelh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=michaelh%40cmacroofing.com",
  "michaels@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=michaels%40cmacroofing.com",
  "michaelsc@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=michaelsc%40cmacroofing.com",
  "miguels@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=miguels%40cmacroofing.com",
  "mikea@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=mikea%40cmacroofing.com",
  "mikeh@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=mikeh%40cmacroofing.com",
  "mikep@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=mikep%40cmacroofing.com",
  "monical@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=monical%40cmacroofing.com",
  "nakoat@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=nakoat%40cmacroofing.com",
  "omarg@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=omarg%40cmacroofing.com",
  "oscar@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=oscar%40cmacroofing.com",
  "osirish@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=osirish%40cmacroofing.com",
  "pedrom@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=pedrom%40cmacroofing.com",
  "perlad@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=perlad%40cmacroofing.com",
  "renee@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=renee%40cmacroofing.com",
  "rob@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=rob%40cmacroofing.com",
  "robin@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=robin%40cmacroofing.com",
  "sama@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=sama%40cmacroofing.com",
  "sartha@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=sartha%40cmacroofing.com",
  "scottr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=scottr%40cmacroofing.com",
  "sergios@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=sergios%40cmacroofing.com",
  "shane@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=shane%40cmacroofing.com",
  "silvanor@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=silvanor%40cmacroofing.com",
  "simonl@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=simonl%40cmacroofing.com",
  "stephanier@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=stephanier%40cmacroofing.com",
  "stephanies@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=stephanies%40cmacroofing.com",
  "steveno@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=steveno%40cmacroofing.com",
  "tavo@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=tavo%40cmacroofing.com",
  "valeriad@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=valeriad%40cmacroofing.com",
  "valerieb@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=valerieb%40cmacroofing.com",
  "victor@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=victor%40cmacroofing.com",
  "victorjr@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=victorjr%40cmacroofing.com",
  "vivian@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=vivian%40cmacroofing.com",
  "wes@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=wes%40cmacroofing.com",
  "yessenial@cmacroofing.com": "https://calendar.google.com/calendar/embed?src=yessenial%40cmacroofing.com",
};

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

  { firstName: "Admin", lastName: "", email: "admin@cmacroofing.com", phone: "" },
  { firstName: "Allisong", lastName: "", email: "allisong@cmacroofing.com", phone: "" },
  { firstName: "Codym", lastName: "", email: "codym@cmacroofing.com", phone: "" },
  { firstName: "Darens", lastName: "", email: "darens@cmacroofing.com", phone: "" },
  { firstName: "Garretd", lastName: "", email: "garretd@cmacroofing.com", phone: "" },
  { firstName: "Homerv", lastName: "", email: "homerv@cmacroofing.com", phone: "" },
  { firstName: "Huntera", lastName: "", email: "huntera@cmacroofing.com", phone: "" },
  { firstName: "Jinl", lastName: "", email: "jinl@cmacroofing.com", phone: "" },
  { firstName: "Joshs", lastName: "", email: "joshs@cmacroofing.com", phone: "" },
  { firstName: "Kristenh", lastName: "", email: "kristenh@cmacroofing.com", phone: "" },
  { firstName: "Kristyt", lastName: "", email: "kristyt@cmacroofing.com", phone: "" },
  { firstName: "Michaelh", lastName: "", email: "michaelh@cmacroofing.com", phone: "" },
  { firstName: "Valerieb", lastName: "", email: "valerieb@cmacroofing.com", phone: "" },
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

  const getCalendarLink = (email: string) => {
    return calendarMapping[email] || "";
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
            const calendarLink = getCalendarLink(member.email);
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
                      {calendarLink && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="hover:underline">View Calendar</a>
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
