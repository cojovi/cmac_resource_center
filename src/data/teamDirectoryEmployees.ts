export type TeamDirectoryEmployeeRow = {
  division: string;
  name: string;
  jobTitle?: string;
  /**
   * Optional explicit email override (for known exceptions to the generation rule).
   * Example: "wes@cmacroofing.com"
   */
  email?: string;
  /**
   * Human-friendly phone formatting (kept as-is from the source list).
   * Example: "(817) 896-2649"
   */
  phoneDisplay?: string;
  /**
   * Digits-only phone (optional). Prefer this for `tel:` when present.
   * Example: "18177512041"
   */
  phoneDigits?: string;
};

/**
 * Source of truth for the Team Directory.
 *
 * This is the code-native replacement for the old `new_list.csv`.
 * Keep the fields aligned with what the Team Directory UI displays:
 * - Division (shown under the name)
 * - Name
 * - Job title (optional)
 * - Phone number (optional)
 */
export const teamDirectoryEmployeeRows: TeamDirectoryEmployeeRow[] = [
  { division: "Austin", name: "Jared Hobbs", jobTitle: "Sales", email: "jared@cmacroofing.com", phoneDisplay: "(817) 896-2649" },
  { division: "Austin", name: "Garret Denney", jobTitle: "Sales", phoneDisplay: "(817) 791-5648" },
  { division: "Doors", name: "Victor Garcia", phoneDisplay: "(972) 865-5196" },
  { division: "Doors", name: "Mike Porter", phoneDisplay: "(682) 583-3119" },
  { division: "Framing", name: "Shane Gresham", phoneDisplay: "(817) 881-5039" },
  { division: "Framing", name: "Robert Davis II", phoneDisplay: "(817) 888-4757" },
  { division: "Houston", name: "Spencer Fesmire", phoneDisplay: "(346) 667-7376", phoneDigits: "13466677376" },
  { division: "Houston", name: "Martin Mejia", phoneDisplay: "(832) 690-7898" },
  { division: "Houston", name: "Homer Tello", jobTitle: "Superintendant", phoneDisplay: "(832) 557-0537" },
  { division: "Houston", name: "Chris Reynolds", phoneDisplay: "(281) 770-8926", phoneDigits: "12817708926" },
  {
    division: "Customs",
    name: "Renee Cremean-Mattox",
    jobTitle: "Administrative Assistant - Customs and Doors Divisions",
    phoneDisplay: "(817) 296-3139",
    phoneDigits: "18172963139",
  },
  { division: "Customs", name: "Kenneth Cremean", phoneDisplay: "(817) 925-1577" },
  { division: "Customs", name: "Evencio Gaona", phoneDisplay: "(817) 525-0294", phoneDigits: "18175250294" },
  { division: "Customs", name: "Pedro Marquez", phoneDisplay: "(214) 208-8474" },
  { division: "Customs", name: "Hugo Sandia", phoneDisplay: "(469) 386-3426" },
  { division: "Customs", name: "Miguel Sandia", phoneDisplay: "(214) 418-2645" },
  { division: "Customs", name: "Lazaro Castillo", jobTitle: "Repairs Estimator", phoneDisplay: "(817) 925-8236" },
  { division: "Customs", name: "Chris Singleton", jobTitle: "Sales", phoneDisplay: "(214) 876-8630", phoneDigits: "12148768630" },
  { division: "CMAC DFW", name: "Ivis Aviles", email: "ivis@cmacroofing.com", phoneDisplay: "(214) 640-0214" },
  { division: "CMAC DFW", name: "Ivis Aviles (Junior)", jobTitle: "Purchasing and Account Services Supervisor", phoneDisplay: "(469) 685-9274" },
  { division: "CMAC DFW", name: "Joseph Bandy", jobTitle: "Account Manager", phoneDisplay: "(682) 978-0437", phoneDigits: "18173015332" },
  { division: "CMAC DFW", name: "Lily Castillo", jobTitle: "Scheduling Manager", phoneDisplay: "(972) 832-3677", phoneDigits: "19728323677" },
  { division: "CMAC DFW", name: "Valeria Duron", jobTitle: "Account Services Representative", phoneDisplay: "(682) 583-7349", phoneDigits: "16825837349" },
  { division: "CMAC DFW", name: "Leonard Don Jr", jobTitle: "Gutter Division", phoneDisplay: "(832) 265-7920" },
  {
    division: "CMAC DFW",
    name: "Alondra Flores",
    jobTitle: "Administrative Assistant - ATX and HOU Divisions",
    phoneDisplay: "(817) 210-2493",
    phoneDigits: "18172102493",
  },
  { division: "CMAC DFW", name: "Eric Francis", jobTitle: "Estimator", phoneDisplay: "(682) 365-9915" },
  { division: "CMAC DFW", name: "Victor Garcia Sr.", jobTitle: "Field Superintendent - DFW", phoneDisplay: "(469) 258-8935" },
  { division: "CMAC DFW", name: "Christopher Harrison", jobTitle: "Estimator", phoneDisplay: "(214) 554-2638" },
  { division: "CMAC DFW", name: "Josh Johnson", jobTitle: "Estimating Manager", phoneDisplay: "(682) 299-3063", phoneDigits: "15127620640" },
  {
    division: "CMAC DFW",
    name: "Daniel Lara",
    jobTitle: "Account and Safety Manager",
    phoneDisplay: "(817) 940-6899",
    phoneDigits: "18179406899",
  },
  { division: "CMAC DFW", name: "Monica Lopez", jobTitle: "Account Services Representative - Lead", phoneDisplay: "(830) 282-5366" },
  { division: "CMAC DFW", name: "Italia Mireles", jobTitle: "Account Services Representative", phoneDisplay: "(817) 818-8396", phoneDigits: "18178188396" },
  { division: "CMAC DFW", name: "Ivette Sanchez Lopez", jobTitle: "Account Services Representative", phoneDisplay: "(682) 336-3848" },
  { division: "CMAC DFW", name: "Wes Shierry", jobTitle: "Mini Homes Division", email: "wes@cmacroofing.com", phoneDisplay: "(817) 501-9807", phoneDigits: "18175019807" },
  { division: "CMAC DFW", name: "Teresa Calvillo", jobTitle: "Account Services Representative", phoneDisplay: "(714) 349-2056", phoneDigits: "17143492056" },
  { division: "CMAC DFW", name: "Josh Sprayberry", jobTitle: "Estimator", phoneDisplay: "(214) 425-0711" },
  { division: "CMAC DFW", name: "Valerie Balderrama", jobTitle: "Account Services Representative", phoneDisplay: "(682) 220-3949" },
  { division: "CMAC DFW", name: "Alfredo Sandoval", jobTitle: "Metal Fabricator - DFW", phoneDisplay: "(456) 803-6217" },
  { division: "CMAC DFW", name: "Richard Denney", jobTitle: "Sales", phoneDisplay: "(214) 738-3760" },
  { division: "CMAC DFW", name: "Christian Viveiros", jobTitle: "President and CEO", phoneDisplay: "(817) 471-7854", phoneDigits: "18174717854" },
  { division: "CMAC DFW", name: "Jeanette Pena", jobTitle: "Purchasing Agent", phoneDisplay: "(940) 465-9354", phoneDigits: "19404659354" },
  { division: "CMAC DFW", name: "Anna Wilson", jobTitle: "Purchasing Agent", phoneDisplay: "(214) 584-8837" },
  { division: "Reroof", name: "Michael August", phoneDisplay: "(817) 470-0454" },
  { division: "Reroof", name: "Charles Marlow", jobTitle: "Multi-Family Business Development", phoneDisplay: "(817) 412-8086" },
  { division: "Admin and Operations", name: "Robin Garner", jobTitle: "Finance Manager", email: "robin@cmacroofing.com", phoneDisplay: "(817) 797-4979", phoneDigits: "18177974979" },
  { division: "Admin and Operations", name: "Jeninne Glass", jobTitle: "Accounting Specialist - AP", phoneDisplay: "(817) 709-9919" },
  { division: "Admin and Operations", name: "Cody Viveiros", jobTitle: "IT Manager", phoneDisplay: "(817) 751-2041", phoneDigits: "18177512041" },
  { division: "Admin and Operations", name: "Dulce Munoz", jobTitle: "Accounting Specialist - Contrator Pay", phoneDisplay: "(214) 930-2429" },
  { division: "Admin and Operations", name: "Jenn Ridgeway", jobTitle: "Director of Business Operations and HR", phoneDisplay: "(972) 626-0417", phoneDigits: "14692309547" },
  {
    division: "Admin and Operations",
    name: "Chasity Jones",
    jobTitle: "Executive Assistant to Jenn Ridgeway",
    phoneDisplay: "(940) 393-9157",
    phoneDigits: "19403939157",
  },
  {
    division: "General Manager Tennessee",
    name: "Nick Holder",
    jobTitle: "General Manager",
    email: "nickh@cmacroofing.com",
    phoneDisplay: "(615) 801-3480",
    phoneDigits: "16158013480",
  },
  {
    division: "Accounting Specialist",
    name: "Tracy Jackson",
    jobTitle: "Accounting Specialist",
    email: "tracyj@cmacroofing.com",
    phoneDisplay: "(817) 988-2440",
    phoneDigits: "18179882440",
  },
  { division: "Commercial DFW", name: "Thomas D.", jobTitle: "Sales", phoneDisplay: "(281) 513-7125" },
  { division: "Commercial DFW", name: "Ivan Guadiana", phoneDisplay: "(817) 404-2020" },
  { division: "Commercial DFW", name: "Omar Guadiana", phoneDisplay: "(817) 875-5154" },
  { division: "Commercial DFW", name: "Jesus Salazar", phoneDisplay: "(214) 418-7109", phoneDigits: "12144187109" },
  { division: "Commercial DFW", name: "Brett Kuykendall", jobTitle: "Sales", phoneDisplay: "(817) 903-5249" },
  { division: "Commercial HOU", name: "Oscar Chavez", jobTitle: "Metal Fabricator", phoneDisplay: "(832) 608-9097" },
  { division: "Commercial HOU", name: "Adrian Flores", jobTitle: "Metal Fabricator", phoneDisplay: "(281) 906-6351" },
  { division: "Commercial HOU", name: "Victor Flores", jobTitle: "Metal Fabricator", phoneDisplay: "(281) 703-8404" },
  { division: "Commercial HOU", name: "Eric Hernandez", jobTitle: "Metal Fabricator", phoneDisplay: "(281) 705-0370" },
  { division: "Services", name: "Amy Havenor", jobTitle: "Administrative Assistant", phoneDisplay: "(214) 734-2717", phoneDigits: "12147342717" },
  { division: "Services", name: "David Havenor", phoneDisplay: "(214) 883-4670", phoneDigits: "12148834670" },
  { division: "Services", name: "Jason Selvidge", jobTitle: "Sales", phoneDisplay: "(405) 409-0563" },
  { division: "Services", name: "Daren Shepherd", phoneDisplay: "(479) 856-3694" },
  { division: "Mitigation", name: "Jason Gamez", phoneDisplay: "(903) 229-2624" },
  { division: "Mitigation", name: "Jeff Stoval", phoneDisplay: "(972) 880-7280" },
];

