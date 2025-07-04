export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  isExternal?: boolean;
}

export const searchableResources: SearchableItem[] = [
  // Main Homepage Resources
  {
    id: "employee-handbook",
    title: "Employee Handbook",
    description: "Essential guidelines and policies",
    link: "https://texastrustedroofing.com/Employee-handbook.pdf",
    category: "Main Resources",
    isExternal: true,
  },
  {
    id: "cmac-processes",
    title: "CMAC Processes",
    description: "Step-by-step guides for company processes",
    link: "/cmac-processes",
    category: "Main Resources",
  },
  {
    id: "team-directory",
    title: "Team Directory",
    description: "Connect with your colleagues",
    link: "/team-directory",
    category: "Main Resources",
  },
  {
    id: "cmac-forms",
    title: "CMAC Forms",
    description: "Custom forms created to streamline your work",
    link: "/cmac-forms",
    category: "Main Resources",
  },
  {
    id: "company-calendar",
    title: "Company Calendar",
    description: "Stay updated with important dates and events",
    link: "/company-calendar",
    category: "Main Resources",
  },
  {
    id: "meet-the-builders",
    title: "Meet The Builders",
    description: "Get help with technical issues",
    link: "https://docs.google.com/document/d/1o3rb9Dp-HmQR1Gd02pLrxXksRSv0P85EZeUwqfM0pg8/edit?usp=sharing",
    category: "Main Resources",
    isExternal: true,
  },
  {
    id: "cmac-safety",
    title: "CMAC Safety",
    description: "Safety manuals, protocols, and regulations",
    link: "/cmac-safety",
    category: "Main Resources",
  },

  // CMAC Processes Sub-items
  {
    id: "estimating-checklist",
    title: "CMAC Estimating Checklist/Cheat Sheet",
    description: "This should be very helpful",
    link: "https://docs.google.com/document/d/1DIBiwBEAn0LXqc42N85jo8nVtAQ0JHlp/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "restoration-handbook",
    title: "CMAC Restoration Services Employee Handbook",
    description: "The handbook for the Restoration Division",
    link: "https://docs.google.com/document/d/1rsysTBDbWxsveYvSLqULKXHkqmwKMjEd/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "payroll-timeline",
    title: "CMAC DFW Payroll Timeline",
    description: "The timeline for pay periods, etc",
    link: "https://docs.google.com/document/d/1Lj1SgAF4oCBiOwMRG1WXgmF7zTccuUUk/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "estimating-process",
    title: "Estimating Process",
    description: "Learn about our estimating process",
    link: "https://docs.google.com/document/d/1-6mmnItjVgKm-AnVJK8tC_zGFdKdH2oe/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "shorts-process",
    title: "Shorts Process",
    description: "If we do the takeoff",
    link: "https://docs.google.com/document/d/1WVduPXxVMrACYCB6Kw5bvhd6B6WO2knh/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "aging-process",
    title: "Aging Process",
    description: "Understanding the aging process",
    link: "https://docs.google.com/document/d/147YzjNtAPSpny_pAU0k5tyLq8K42SPnY/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "quickbooks-po",
    title: "How-To Purchase Order in Quick Books",
    description: "Step-by-step guide for PO creation in QuickBooks",
    link: "https://docs.google.com/document/d/1sO3oXjkuRrVot7KGThpMxEdssCIjfK06/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "pto-request",
    title: "Paid Time Off Leave Request",
    description: "Process for requesting PTO",
    link: "https://docs.google.com/document/d/1icypVEQZFsbnRvsc3TXKN3R6XXjmQerS/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "po-creation",
    title: "PO Creation",
    description: "Guide for creating Purchase Orders",
    link: "https://docs.google.com/document/d/1zV-_oL_utBdZXkfKnn-y6hZqHi-ynxwc/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "termination-checklist",
    title: "Employee Termination Checklist",
    description: "Checklist for employee termination process",
    link: "https://docs.google.com/document/d/1FQtJrnQBvmlEAVNSBCItZJtoryHy4MJL/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "onboarding-checklist",
    title: "Checklist for Onboarding New Hire's",
    description: "Complete guide for onboarding new employees",
    link: "https://docs.google.com/document/d/1Xm9Ly7aSTsUx5KhFlk1UN_GCkjZkNZv8/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "hire-paperwork",
    title: "Checklist for New Hire Paperwork",
    description: "Required paperwork for new hires",
    link: "https://docs.google.com/document/d/1rY1FR3aicLXacBF01CRApWZIXvpi2dij/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },
  {
    id: "writeup-form",
    title: "Write Up Form",
    description: "Employee write up documentation",
    link: "https://docs.google.com/document/d/1qNQ8BCjOZNtFgU4g1MaCQWnrDkmaKzAu/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Processes",
    isExternal: true,
  },

  // CMAC Forms Sub-items
  {
    id: "material-shorts-form",
    title: "Material Shorts Form",
    description: "Request material shorts for your project",
    link: "https://forms.gle/QuXcJPL1ggWnEpas8",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "backcharge-form",
    title: "Backcharge Request Form",
    description: "Submit a backcharge request for project costs",
    link: "https://forms.gle/LPGqtdh5pCkNm1JM8",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "it-request-form",
    title: "IT Request Form",
    description: "Submit your IT support or equipment requests",
    link: "https://forms.gle/v5AibafwoRW4ftTT8",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "builder-detail-form",
    title: "Builder Detail Form",
    description: "Provide details for builder-related information",
    link: "https://forms.gle/7UcKHLzmHvRaKMAR9",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "austin-field-update",
    title: "Austin Field Update Form",
    description: "Update field status and progress in Austin projects",
    link: "https://forms.gle/1EmxpE1xC1xdytNp8",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "austin-community-outlook",
    title: "Austin Community Outlook Form",
    description: "Share insights and outlook for Austin community projects",
    link: "https://forms.gle/euZycmUFH9HgwEeK6",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "new-email-request",
    title: "New Email Request Form",
    description: "Request a new company email account",
    link: "https://forms.gle/48X1YiQBSiEoj4MF6",
    category: "CMAC Forms",
    isExternal: true,
  },
  {
    id: "timeoff-request-form",
    title: "Time Off Request",
    description: "Submit your time off requests",
    link: "https://forms.google.com/timeoff",
    category: "CMAC Forms",
    isExternal: true,
  },

  // CMAC Safety Sub-items
  {
    id: "commercial-safety-manual",
    title: "CMAC Commercial Safety Manual",
    description: "Comprehensive safety guidelines for commercial operations",
    link: "https://docs.google.com/document/d/1pJMUqzJzMxzYg5glx_R8FALlYG0FCg1W/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Safety",
    isExternal: true,
  },
  {
    id: "ocha-rules",
    title: "OCHA Rules and Regs",
    description: "Official OCHA safety regulations and requirements",
    link: "https://drive.google.com/file/d/1BzSi1iV_YfJ-UUnvZQIzwoLcAh9ZAv0_/view?usp=sharing",
    category: "CMAC Safety",
    isExternal: true,
  },
  {
    id: "osha-site-visit",
    title: "CMAC Procedure for OSHA Site Visit",
    description: "Step-by-step procedures for handling OSHA site visits",
    link: "https://docs.google.com/document/d/1N3DjjlR0bU3dIeOdLdlFHxVIfoAS3gGF/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Safety",
    isExternal: true,
  },
  {
    id: "osha-inspections",
    title: "Workflow for OSHA Inspections",
    description: "Complete workflow guide for OSHA inspection processes",
    link: "https://docs.google.com/document/d/1ASkYvyQOzhrLzxs8y4syVQZGLAcnM6_t/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
    category: "CMAC Safety",
    isExternal: true,
  },

  // Company Calendar Sub-items
  {
    id: "company-calendar-main",
    title: "CMAC Company Calendar",
    description: "View company events, meetings, and important dates",
    link: "https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com&ctz=America%2FChicago",
    category: "Company Calendar",
    isExternal: true,
  },
  {
    id: "christian-calendar",
    title: "Christian's Calendar Requests",
    description: "Schedule meetings and requests with Christian",
    link: "https://calendar.app.google/CZH7Yjj4TjYBKTYR9",
    category: "Company Calendar",
    isExternal: true,
  },
  {
    id: "jenn-calendar",
    title: "Jenn's Calendar Requests",
    description: "Schedule meetings and requests with Jenn",
    link: "https://calendar.app.google/SUTFcmXMg7pEjENb7",
    category: "Company Calendar",
    isExternal: true,
  },
  {
    id: "cody-calendar",
    title: "Cody's Calendar Requests",
    description: "Schedule meetings and requests with Cody",
    link: "https://calendar.app.google/jnLDn5bFuUrFF7oy5",
    category: "Company Calendar",
    isExternal: true,
  },
];