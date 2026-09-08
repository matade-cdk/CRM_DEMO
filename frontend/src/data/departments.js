// ============================================
// Mock Data — Departments (Exact Figma colors)
// ============================================

// ============================================
// Mock Data — Departments (Exact layout from reference)
// ============================================

export const departmentStats = [
  { 
    id: 1, 
    count: 28, 
    countLabel: 'Total Departments',
    amount: '₹29,00,0129',
    amountLabel: 'Total Sales'
  },
  { 
    id: 2, 
    count: 18, 
    countLabel: 'Online Departments',
    amount: '269',
    amountLabel: 'Total Orders'
  },
  { 
    id: 3, 
    count: 10, 
    countLabel: 'Offline Departments',
    amount: '₹12,000',
    amountLabel: 'Avg Sales'
  },
  { 
    id: 4, 
    count: 0, 
    countLabel: 'Closed Departments',
    amount: '+2,00,000',
    amountLabel: 'P/L'
  },
  { 
    id: 5,
    count: 28,
    countLabel: 'New Departments',
    amount: 'Sales',
    amountLabel: 'Top Department'
  },
];

// Exact Figma color mapping:
// 'navy'           → #000550 (001 SERVER ADMIN, 004 INVESTORS, 008 MARKETTING)
// 'primary'        → #0735D9 (002 ACCOUNTS, 005 HR, 009 SEO) - WRONG IN FIGMA, actual is #5A60FE for 002
// 'secondary'      → #5870B6 (003 LOAN & FINANCE)
// 'light-bg'       → #D4DDFF (006 SALES)
// 'light-selected' → #B9BAFF (007 DEVELOPMENT)
// 'selected-hover' → #5A60FE (002 ACCOUNTS)
// 'selected'       → #0724FD (005 HR)
export const departments = [
  { id: '001', name: 'SERVER ADMIN',                     color: 'navy',           budget: '₹4,00,000', memberCount: 28 },
  { id: '002', name: 'ACCOUNTS\nDEPARTMENT',             color: 'selected-hover', budget: '₹4,00,000', memberCount: 28 },
  { id: '003', name: 'LOAN & FINANCE\nDEPARTMENT',       color: 'secondary',      budget: '₹4,00,000', memberCount: 28 },
  { id: '004', name: 'INVESTORS &\nFUNDING',             color: 'primary',        budget: '₹4,00,000', memberCount: 28 },
  { id: '005', name: 'HR\nDEPARTMENT',                   color: 'selected',       budget: '₹4,00,000', memberCount: 28 },
  { id: '006', name: 'SALES\nDEPARTMENT',                color: 'light-bg',       budget: '₹4,00,000', memberCount: 28 },
  { id: '007', name: 'DEVELOPMENT\nDEPARTMENT',          color: 'light-selected', budget: '₹4,00,000', memberCount: 28 },
  { id: '008', name: 'MARKETTING\nDEPARTMENT',           color: 'primary',        budget: '₹4,00,000', memberCount: 28 },
  { id: '009', name: 'SEO\nDEPARTMENT',                  color: 'primary',        budget: '₹4,00,000', memberCount: 28 },
];
