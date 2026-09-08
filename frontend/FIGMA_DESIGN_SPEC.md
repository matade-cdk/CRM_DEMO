# Figma Design Specification - Departments Page

## 📐 Overall Structure

The design is a **CRM Dashboard - Departments Page** with the following layout:
- **Left Sidebar** (225px wide) - Navigation menu
- **Main Content Area** - Header, Stats Bar, and Department Cards Grid
- **Top Bar** (62px height) - Search, notifications, and user actions

---

## 🎨 Color Palette

### Primary Colors
- **Selected Blue**: `#0724FD` - Active navigation items
- **Selected Hover**: `#5A60FE` - Hover state for selected items
- **Primary Blue**: `#0735D9` - Primary buttons, text accents
- **Secondary Blue**: `#5870B6` - Used in department cards
- **Accent Blue**: `#5A87FE` - Accent elements

### Background Colors
- **App Background**: `#F0F3FF` - Main page background (light blue)
- **Sidebar Background**: `#D4DDFF` - Sidebar light blue background
- **White**: `#FFFFFF` - Cards, topbar, content areas
- **Light Background**: `#D4DDFF` - Hover states, secondary backgrounds
- **Light Selected**: `#B9BAFF` - Department card variant

### Text Colors
- **Dark**: `#0F172A` - Primary text (not heavily used)
- **Black**: `#000000` - Primary text on white backgrounds
- **Navy**: `#000550` - Dark blue text on colored backgrounds
- **Gray Dark**: `#4C4C4C` - Section headers, secondary text
- **Gray**: `#858585` - Border color for buttons
- **Gray Light**: `#8B8B8B` - Placeholder text, light labels

### Accent Colors
- **Error/Notification**: `#FF0303` - Red notification dot

---

## 🔤 Typography

### Font Family
- **Primary Font**: Helvetica (system font)

### Text Styles

#### Sidebar Navigation
- **Section Headers** (Menu, HR, Accounts, Support):
  - Font: Helvetica Bold
  - Size: 10.4px
  - Weight: 700
  - Color: #4C4C4C
  - Line Height: 12.38px

- **Navigation Items** (Dashboard, Departments, etc.):
  - Font: Helvetica Regular
  - Size: 10.4px
  - Weight: 400
  - Color: #4C4C4C (normal), #FFFFFF (active)
  - Line Height: 12.38px

- **Logout Button**:
  - Font: Helvetica Regular
  - Size: 17.01px
  - Weight: 400
  - Color: #000000

#### Top Bar
- **Search Placeholder**:
  - Font: Helvetica Light
  - Size: 11.77px
  - Weight: 300
  - Color: #8B8B8B

#### Main Content
- **Page Title** ("Departments"):
  - Font: Helvetica Regular
  - Size: 24.64px
  - Weight: 400
  - Color: #000000
  - Line Height: 23px

#### Stats Bar
- **Large Numbers** (28, 18, 10, 0):
  - Font: Helvetica Bold
  - Size: 18px
  - Weight: 700
  - Color: #000000
  - Line Height: 23px

- **Labels** (Total Departments, New Departments, etc.):
  - Font: Helvetica Regular
  - Size: 8px
  - Weight: 400
  - Color: #8B8B8B
  - Line Height: 23px

- **Values** (₹29,00,0129, 269, etc.):
  - Font: Helvetica Regular
  - Size: 14px
  - Weight: 400
  - Color: #000000
  - Line Height: 23px

#### Department Cards
- **Department Name** (SERVER ADMIN, etc.):
  - Font: Helvetica Regular
  - Size: 14px
  - Weight: 400
  - Color: #FFFFFF
  - Line Height: 16.1px

- **Department ID** (001, 002, etc.):
  - Font: Helvetica Light
  - Size: 14px
  - Weight: 300
  - Color: #FFFFFF
  - Line Height: 16.1px

- **Revenue Amount** (₹4,00,000):
  - Font: Helvetica Bold
  - Size: 20px
  - Weight: 700
  - Color: #FFFFFF or #000550 (depending on card background)
  - Line Height: 16.1px

- **Team Count** (+26):
  - Font: Helvetica Bold
  - Size: 6.9px
  - Weight: 700
  - Color: #000000

#### Add Department Button
- **Button Text**:
  - Font: Helvetica Regular
  - Size: 9.04px
  - Weight: 400
  - Color: #FFFFFF
  - Line Height: 9.59px

---

## 📏 Spacing & Layout

### Sidebar (225px total width)
- **Content Width**: 173.09px
- **Left Padding**: 34px from screen edge
- **Top Padding**: 16px
- **Logo to First Section**: 93px from top
- **Section Title Padding**: 10px top, 14px horizontal
- **Navigation Item Padding**: 7px vertical, 14px horizontal
- **Icon to Text Gap**: 9px
- **Active Item Margins**: 1px vertical, 8px horizontal
- **Active Item Border Radius**: ~10px
- **Logout Section**: Bottom border, 10px padding top, 14px horizontal, 16px bottom

### Navigation Sections Vertical Spacing
- **Menu** starts at: 93px
- **HR** starts at: 241.49px
- **Accounts** starts at: 359.72px
- **Support** starts at: 577.26px
- **Logout** starts at: 783px

### Top Bar (Height: ~62px)
- **Search Field**:
  - Position: x=251, y=41
  - Size: 291px × 38px
  - Border Radius: 40px (fully rounded)
  - Icon Padding: 15px from left
  - Text Padding: ~23.54px from icon

- **User Actions Section**:
  - Position: x=1086, y=45
  - Size: 160px × 35px
  - **Action Buttons**: 34px × 34px circles
  - Button Spacing: 8px gap between buttons
  - Border Radius: 30px
  - Border: 1px solid #858585

- **Notification Dot**:
  - Size: 10px × 10px
  - Position: Top-right of first button (x=22, y=0 relative)

- **User Avatar**:
  - Size: 34px × 34px
  - Position: Rightmost in action group
  - Border: 1px solid #FFFFFF

### Main Content Area

#### Page Title
- Position: x=251, y=107
- Margin Bottom: 37px to header

#### Stats Header Bar
- Position: x=251, y=144
- Size: 995px × 123px
- Background: #FFFFFF
- Border Radius: 10px
- Padding: 15px horizontal, 12px vertical

#### Stats Row
- Position within header: x=266, y=156
- Size: 961px × 54px
- Background: #F0F3FF
- Border Radius: 10px
- Grid Layout: 6 columns equally spaced
- Column Text Alignment: Left-aligned within each cell
- Vertical spacing between rows: ~16px

#### Department Cards Grid
- Position: x=251, y=290
- Container Size: 995px × 555px
- Background: #FFFFFF
- Border Radius: 10px
- **Card Container Padding**: 25px all sides

#### Individual Department Card
- **Size**: 308px × 164px
- **Border Radius**: 30px
- **Grid**: 3 columns × 3 rows
- **Gap**: 8px horizontal, 8px vertical

#### Card Internal Layout
- **ID Badge** (top-left):
  - Position: x=20, y=20
  - Size: 24px × 17px
  
- **Department Name**:
  - Position: x=20, y=47
  - Max Width: 96-121px (varies by content)
  - Height: 33px (allows 2 lines)

- **Revenue Amount**:
  - Position: x=20, y=125
  - Size: 90px × 17px

- **Team Avatars** (bottom-right area):
  - Position: x=251, y=130
  - Avatar Size: 20.13px × 20.13px circles
  - Overlap: ~2px between avatars
  - Total Width: ~46px for 3 avatars + badge

- **Arrow Icon** (top-right):
  - Position: x=267, y=14
  - Container: 27.91px × 27.91px circle
  - Background: #D4DDFF
  - Icon Size: 27.44px × 27.44px

### Add Department Button
- Position: x=1144, y=104
- Size: 102px × 26px
- Background: #000550
- Border Radius: 5.96px
- Text Centered

---

## 🧩 Component Breakdown

### 1. **Sidebar Component**
- **Logo Section**
  - Image: Rectangle 373.svg
  - Width: 142.8px, Height: 51px
  
- **Navigation Sections** (4 sections)
  - Section Header (title + hamburger/chevron icon)
  - Navigation Items List
  - Icons: Vector-1 through Vector-10, Group, Group-1, Group-2
  - Active State: Blue background (#0724FD), white text
  - Hover State: Light blue background (#D4DDFF)

- **Logout Button**
  - Icon + Text layout
  - Hover: Red text (#FF0303)

### 2. **Top Bar Component**
- **Search Field**
  - Icon (Union.svg)
  - Input with placeholder "Search"
  - Rounded pill shape

- **User Actions**
  - 4 circular buttons in a row
  - Icons: notification (with red dot), settings, star/favorite, user avatar
  - White background, gray border

### 3. **Stats Bar Component**
- **Grid Layout**: 6 stat cards horizontally
- **Two Rows per Card**:
  - Row 1: Large number + small label above
  - Row 2: Value/text + small label above
  
- **Stat Items**:
  1. Total Departments: 28 / New Departments: 28
  2. Online Departments: 18 / Total Sales: ₹29,00,0129
  3. Offline Departments: 10 / Total Orders: 269
  4. Closed Departments: 0 / Avg Sales: ₹12,000
  5. (Empty) / P/L: +2,00,000
  6. (Empty) / Top Department: Sales

### 4. **Department Card Component**
- **Background Color Variants**:
  - #000550 (Navy) - SERVER ADMIN, MARKETTING
  - #0735D9 (Primary Blue) - INVESTORS, SEO
  - #5A60FE (Selected Hover) - ACCOUNTS
  - #0724FD (Selected) - HR
  - #5870B6 (Secondary) - LOAN & FINANCE
  - #D4DDFF (Light Background) - SALES
  - #B9BAFF (Light Selected) - DEVELOPMENT

- **Card Elements**:
  1. Department ID badge (top-left)
  2. Department name (multi-line support)
  3. Revenue amount (bottom-left)
  4. Team member avatars (bottom-right, 3 visible + count)
  5. Arrow navigation icon (top-right circle)

- **Team Avatars**:
  - 3 overlapping circular avatars
  - "+26" count badge on light blue circle

---

## 🎯 Key Design Patterns

### Border Radius Strategy
- **Small elements**: 5-10px (buttons, small cards)
- **Medium elements**: 30px (department cards, action buttons)
- **Large elements**: 40px (search field - full pill)

### Color Application
- **Backgrounds**: White for content areas, light blue (#F0F3FF) for page
- **Cards**: Various blues to differentiate departments
- **Text**: Black/Navy on light, White on dark
- **Accents**: Primary blue (#0724FD) for active states

### Spacing System
- **Micro spacing**: 7-10px (padding inside small elements)
- **Small spacing**: 14-20px (padding inside cards, between sections)
- **Medium spacing**: 25-37px (margins between major sections)
- **Large spacing**: 42-93px (major layout sections)

### Typography Hierarchy
1. **Page Title**: 24.64px
2. **Large Stats**: 18-20px Bold
3. **Card Content**: 14px Regular
4. **Small Labels**: 8-10.4px Regular
5. **Micro Text**: 6.9px Bold

---

## 📱 Component Specifications

### Sidebar Navigation Icon Sizes
- Icon container: 16px × 16px
- Actual icon sizes vary: ~9-13px (vector SVGs)
- Chevron icons: 10.31px × 5.73px
- Hamburger icon: 13px × 10px (3 lines)

### Department Card States
- **Default**: Colored background, white text
- **Hover**: (Not specified, likely slight opacity change)
- **Interactive Element**: Arrow icon button in circle

### User Avatar
- **Size**: 34px circle
- **Border**: 1px white
- **Image Type**: Cropped photograph with specific transform

---

## 🔍 Notable Details

1. **Sidebar uses actual SVG assets** loaded from assets folder (Vector-1.svg through Vector-10.svg, Group.svg, Group-1.svg, Group-2.svg)

2. **Active navigation has unique styling**: Blue pill shape with white text, indented with margins

3. **Stats bar uses a nested layout**: Outer white card contains inner light blue (#F0F3FF) row

4. **Department cards form a CSS Grid**: 3 columns × 3 rows with consistent gaps

5. **Text truncation**: Department names support multi-line (up to 2 lines, 33px height)

6. **Team avatars overlap**: Positioned with ~2px overlap for compact display

7. **Component reuse**: Same department card template used 9 times with different colors and content

8. **Icon consistency**: All navigation icons are black strokes, colored via CSS filters

9. **Notification indicator**: Small 10px red dot positioned absolutely on button

10. **Button hierarchy**: Primary action (Add Department) uses navy background, distinct from navigation blue

---

## ✅ Implementation Checklist

- [x] Sidebar with exact spacing (225px wide, 173px content)
- [x] Navigation sections with correct vertical positions
- [x] Top bar with search and user actions
- [x] Stats bar grid (6 columns, 2 rows each)
- [x] Department cards grid (3×3)
- [x] Correct color palette matching Figma
- [x] Typography hierarchy with Helvetica at specified sizes
- [x] Border radius values (5px, 10px, 30px, 40px)
- [x] Icon integration from SVG assets
- [x] Team avatar overlap styling
- [x] Active/hover states for navigation
- [ ] Notification dot positioning
- [ ] Arrow icon component
- [ ] Add Department button
- [ ] Responsive behavior (not specified in design)

---

*Design extracted from Figma file: lX6kmmBiDX4aafb8bZm082, Node: 395-5030*
