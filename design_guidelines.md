# AuditMate MFG Revision Manager - Knowledge Base Design Guidelines

## Design Approach
**System-Based with Modern Documentation Patterns**
This is a utility-focused documentation platform requiring excellent readability, clear navigation hierarchy, and efficient information access. Drawing inspiration from modern knowledge base platforms (Whatfix, Notion, GitBook) with emphasis on clean, professional aesthetics.

**Core Design Principles:**
- Clarity over decoration
- Information hierarchy through spacing and typography
- Clean, rounded aesthetic for approachability
- Professional, trustworthy presentation

---

## Typography System

**Font Families:**
- Primary: Inter or Open Sans (Google Fonts CDN)
- Monospace: JetBrains Mono or Fira Code for code blocks

**Type Scale:**
- Page Titles (h1): text-4xl font-bold
- Section Headers (h2): text-2xl font-semibold
- Subsections (h3): text-xl font-semibold
- Body Text: text-base leading-relaxed
- Small Text/Metadata: text-sm
- Code Inline: text-sm font-mono

**Hierarchy Implementation:**
- Use font-weight variations (normal, medium, semibold, bold)
- Generous line-height for body content (leading-7 to leading-8)
- Restrict h1 to one per page for clear document structure

---

## Layout System

**Spacing Primitives:**
Core spacing units: `2, 4, 6, 8, 12, 16` (as in p-2, m-4, gap-6, etc.)
- Micro spacing: 2, 4 (within components)
- Standard spacing: 6, 8 (between elements)
- Section spacing: 12, 16 (major layout divisions)

**Grid Structure:**
```
Three-column layout:
- Sidebar Navigation: fixed w-64 (desktop), collapsible drawer (mobile)
- Main Content Area: flex-1 max-w-4xl mx-auto px-8
- Optional TOC/Metadata: w-56 (desktop only, hidden on smaller screens)
```

**Container Strategy:**
- Global wrapper: max-w-7xl mx-auto
- Content zones: max-w-3xl for optimal reading width
- Full-width elements: Cards, code blocks extend to container edges

---

## Component Library

### Navigation Components

**Top Navigation Bar:**
- Fixed position, backdrop-blur effect
- Height: h-16
- Contains: Logo, Search bar (prominent), User/Settings icons
- Layout: justify-between items-center px-6
- Border: Bottom border (border-b)

**Sidebar Navigation:**
- Nested structure with expandable sections
- Active state: Subtle background with rounded corners (rounded-lg)
- Hover: Light background change
- Padding: py-2 px-3 for links
- Icons: Small icons (w-5 h-5) preceding text
- Spacing: space-y-1 between items, space-y-4 between categories

**Breadcrumbs:**
- Position: Top of content area, mb-6
- Style: text-sm with separator icons
- Interactive: Links underline on hover
- Current page: font-semibold, non-interactive

### Content Components

**Documentation Cards:**
- Background: Subtle background with border
- Corners: rounded-xl for soft, approachable feel
- Padding: p-6
- Shadow: Minimal (shadow-sm), elevates on hover (shadow-md transition)
- Use for: Feature highlights, related articles, call-to-action sections

**Article/Doc Layout:**
- Title area: mb-8 with title, metadata (date, category)
- Content: Markdown-rendered with proper spacing
- Paragraph spacing: mb-6
- List spacing: space-y-2

**Code Blocks:**
- Background: Distinct from page background
- Corners: rounded-lg
- Padding: p-4
- Font: Monospace with syntax highlighting
- Scrollable: overflow-x-auto for long lines
- Copy button: Absolute positioned top-right

**Search Component:**
- Prominent placement in top nav
- Width: w-96 on desktop, full-width on mobile
- Style: Rounded-full with icon prefix
- Dropdown: Absolute positioned results with rounded-lg, shadow-lg
- Result items: Hover background, p-3, includes title + preview text

### Interactive Elements

**Buttons:**
- Primary: font-medium px-6 py-3 rounded-lg
- Secondary: Similar but with border instead of fill
- Sizes: Small (px-4 py-2 text-sm), Regular, Large (px-8 py-4)

**Links:**
- In-content: Underline on hover
- Navigation: No underline, background change on hover
- External: Icon indicator (arrow-up-right)

**Form Elements:**
- Inputs: rounded-lg border px-4 py-2.5
- Focus: Ring effect (ring-2)
- Labels: text-sm font-medium mb-2

---

## Page-Specific Layouts

### Home/Landing Page:
- Hero section: Centered content with search bar prominence
- Quick start cards: 3-column grid (grid-cols-3 gap-6)
- Popular articles: List with icons and descriptions
- Recent updates: Timeline-style or simple list

### Documentation Article Page:
- Sidebar: Category navigation (left)
- Main content: Article with proper typography hierarchy
- Right sidebar (optional): Table of contents for long articles
- Bottom: Previous/Next navigation + Related articles

### Search Results Page:
- Filters sidebar: Category, date, type filters
- Results grid: Single column, card-based results
- Result preview: Title, excerpt, metadata
- Pagination: Bottom-centered

---

## Animations & Transitions
**Minimal and Purposeful:**
- Page transitions: Simple fade (duration-200)
- Hover states: Background/shadow changes (transition-all duration-150)
- Sidebar expand/collapse: Smooth slide (duration-300)
- No: Complex scroll animations, parallax, unnecessary motion

---

## Markdown Content Styling
- Headers: Progressive size reduction with consistent mb spacing
- Paragraphs: mb-4 to mb-6
- Lists: pl-6 with proper markers, space-y-2
- Blockquotes: Border-left accent, italic, pl-4
- Tables: Full-width, bordered, striped rows
- Images: max-w-full rounded-lg with caption support

---

## Images
**No hero images needed** - this is a documentation/knowledge base site focused on content accessibility.

**Content Images:**
- Diagrams/screenshots within articles: Centered, rounded-lg, shadow-sm
- Thumbnails in cards: Consistent aspect ratio (16:9 or 4:3)
- Icons: Use Heroicons (via CDN) throughout for consistency

---

## Accessibility Standards
- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support for all features
- Focus indicators: Clear ring-2 states
- Skip navigation link for screen readers
- Minimum contrast ratios maintained