# CMAC Resource Center - Documentation

## Project Overview

This is a **CMAC Resource Center** - a React-based web application built with Vite, TypeScript, and shadcn-ui that serves as an internal resource hub for CMAC Roofing company employees. The application provides centralized access to company resources, processes, and team information.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn-ui components
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives with shadcn-ui

## Application Structure

### Pages
1. **Index** (`/`) - Main resource center homepage with navigation cards
2. **CMAC Processes** (`/cmac-processes`) - Step-by-step guides for company processes
3. **CMAC Safety** (`/cmac-safety`) - Safety manuals, protocols, and regulations
4. **Team Directory** (`/team-directory`) - Employee contact information and departments
5. **CMAC Forms** (`/cmac-forms`) - Custom forms for streamlined work
6. **Company Calendar** (`/company-calendar`) - Important dates and events

### Key Features
- Responsive design with mobile-first approach
- Search functionality across resources
- Real-time ticker for announcements
- Slack rollout information
- Employee directory with contact details

## Recent Changes - Team Directory Enhancement

### Date: [Current Date]

#### Changes Made
1. **Added Department Field**: Enhanced the Team Directory to display department information for each employee
2. **Department Mapping**: Created a mapping system based on `jenns-updates.txt` to assign departments to specific employees
3. **UI Enhancement**: Added a Building icon from Lucide React to represent the department field
4. **Conditional Display**: Department field only shows for employees who have been assigned to a department

#### Technical Implementation

**Department Mapping Object**:
```typescript
const departmentMapping: { [key: string]: string } = {
  // Tile Division
  "Lazaro Castillo": "Tile Division",
  "Evencio Gaona": "Tile Division",
  // ... additional mappings
};
```

**Helper Function**:
```typescript
const getDepartment = (firstName: string, lastName: string) => {
  const fullName = `${firstName} ${lastName}`;
  return departmentMapping[fullName] || "";
};
```

**UI Component**:
```typescript
{department && (
  <div className="flex items-center text-sm text-muted-foreground">
    <Building className="mr-2 h-4 w-4" />
    <span>{department}</span>
  </div>
)}
```

#### Departments Defined
Based on `jenns-updates.txt`, the following departments were identified:
- **Tile Division**: 10 employees
- **Accounting, Purchasing, and Finance**: 6 employees  
- **Restoration**: 6 employees
- **Sheetmetal**: 6 employees
- **CMAC Services**: 4 employees
- **Austin Division**: 4 employees
- **Doors**: 2 employees
- **Framing**: 2 employees
- **Houston**: 1 employee

#### Design Decisions
1. **Icon Choice**: Used Building icon to represent department/organizational structure
2. **Conditional Rendering**: Only show department field when data exists to avoid empty fields
3. **Consistent Styling**: Maintained the same visual pattern as email and phone fields
4. **Positioning**: Placed department field directly under the name for logical hierarchy

#### Future Considerations
- Employees not in the department mapping will have blank department fields
- Manual review and assignment needed for remaining employees
- Consider adding department-based filtering functionality
- Potential for department-specific color coding or badges

## File Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   ├── QuickLinks.tsx
│   ├── ResourceCard.tsx
│   ├── SearchBar.tsx
│   ├── SlackRollout.tsx
│   └── Ticker.tsx
├── pages/              # Main application pages
│   ├── Index.tsx
│   ├── TeamDirectory.tsx
│   ├── CmacProcesses.tsx
│   ├── CmacSafety.tsx
│   ├── CmacForms.tsx
│   └── CompanyCalendar.tsx
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── ticker/             # Ticker content
```

## Development Notes

- The application uses HashRouter for routing to support static hosting
- All components are built with accessibility in mind using Radix UI primitives
- The design system follows a consistent color scheme and spacing
- Search functionality is implemented across multiple pages
- The application is optimized for both desktop and mobile usage 