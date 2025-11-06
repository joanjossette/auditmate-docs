# AuditMate MFG Revision Manager - Knowledge Base Design Guidelines

## Design Approach

**Reference-Based + System Hybrid**: Drawing inspiration from Whatfix's support site architecture combined with systematic documentation design principles. This creates a professional, utility-focused knowledge base that prioritizes information discovery and readability while maintaining visual polish.

**Key Design Principles**:
- **Clarity First**: Every element serves information discovery
- **Predictable Navigation**: Consistent patterns reduce cognitive load
- **Scannable Content**: Clear hierarchy guides users to answers
- **Professional Polish**: Clean, modern aesthetic builds trust

---

## Typography System

**Font Stack**:
- **Primary**: Inter (Google Fonts) - excellent readability for documentation
- **Code/Technical**: JetBrains Mono (Google Fonts) - for code snippets

**Hierarchy**:
- **Hero Title**: text-5xl, font-bold (Product name)
- **Hero Subtitle**: text-xl, font-normal (Tagline)
- **Section Headers**: text-3xl, font-bold
- **Page Titles**: text-2xl, font-semibold
- **Sidebar Categories**: text-sm, font-semibold, uppercase, tracking-wide
- **Sidebar Links**: text-base, font-normal
- **Body Content**: text-base, leading-relaxed
- **Breadcrumbs**: text-sm
- **Search Placeholder**: text-base, font-normal

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- **Micro spacing**: p-2, gap-2 (tight groups)
- **Component padding**: p-4, p-6 (cards, inputs)
- **Section spacing**: py-12, py-16, py-20 (major sections)
- **Container gaps**: gap-6, gap-8 (between elements)

**Grid System**:
- **Homepage Topic Cards**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4, gap-6
- **Container**: max-w-7xl mx-auto px-6
- **Documentation Layout**: 
  - Sidebar: w-64 (desktop), hidden on mobile with toggle
  - Content: flex-1, max-w-4xl for optimal reading width
  - Right gutter: Intentional breathing room

---

## Component Library

### Header (All Pages)
- **Height**: h-16
- **Layout**: flex items-center justify-between px-6
- **Elements**: 
  - Logo/Product name (left) - clickable to home
  - Search bar (center, desktop only) - w-96 max-w-xl
  - Light/dark toggle icon button (right)
- **Styling**: Border bottom, subtle shadow on scroll

### Hero Section (Homepage)
- **Layout**: py-20, text-center
- **No Hero Image**: Clean, focused on search and content
- **Elements**:
  - Product name (AuditMate MFG Revision Manager)
  - Tagline (Smart CNC Program Control)
  - Prominent search bar: w-full max-w-2xl, rounded-lg, p-4, with search icon
  - Search bar shadow: shadow-xl for prominence

### Topic Cards (Homepage)
- **Card Structure**:
  - Rounded corners: rounded-xl
  - Padding: p-6
  - Shadow: shadow-md, hover:shadow-lg transition
  - Border: subtle border
- **Content**:
  - Icon at top (from Heroicons) - w-12 h-12
  - Title: text-xl font-semibold, mb-2
  - Description: text-base, 2-3 lines
  - Arrow/chevron indicator: bottom-right
- **Interaction**: Entire card clickable, subtle scale on hover (hover:scale-105 transition-transform)

**Topic Cards** (4 total):
1. **Getting Started** - Icon: RocketLaunchIcon
   - "Quick start guide, installation, and initial setup"
2. **Using the Product** - Icon: CogIcon
   - "Step-by-step workflows, features, and best practices"
3. **Machines** - Icon: ServerIcon
   - "Machine configuration, types, and management"
4. **Archive** - Icon: ArchiveBoxIcon
   - "Version control, backup, and historical records"

### Sidebar Navigation (Documentation Pages)
- **Structure**: Fixed on desktop, slide-out on mobile
- **Styling**:
  - Padding: p-6
  - Border right on desktop
- **Navigation Items**:
  - Category headers: mb-4, non-clickable
  - Links: py-2, px-3, rounded-md, hover background change
  - Active state: distinct background, border-left accent
  - Nested items: pl-6 with subtle connecting line
- **Collapsible sections**: Chevron icon rotates on expand

### Search Bar
- **Styling**: 
  - Input: p-3, rounded-lg, border, w-full
  - Search icon: absolute left-3, w-5 h-5
  - Clear button: absolute right-3 (when text present)
- **Search Results Dropdown**:
  - max-h-96, overflow-y-auto
  - Each result: p-4, hover background
  - Highlight matched text
  - Show breadcrumb path for each result

### Breadcrumbs
- **Layout**: flex items-center gap-2, mb-6
- **Separator**: ChevronRightIcon between items
- **Links**: Underline on hover
- **Current page**: Not linked, slightly muted

### Markdown Content Area
- **Spacing**: 
  - Headings: mt-8 mb-4 (first heading mt-0)
  - Paragraphs: mb-4
  - Lists: mb-4, pl-6
  - Code blocks: mb-6, p-4, rounded-lg
- **Code Styling**:
  - Inline code: px-1.5 py-0.5, rounded, distinct background
  - Code blocks: syntax highlighting, line numbers optional
- **Tables**: 
  - Full width, border-collapse
  - Striped rows for readability
  - Responsive: scroll on mobile
- **Images in docs**: 
  - max-w-full, rounded-lg, shadow-md
  - Figure captions: text-sm, italic, mt-2

### Footer
- **Layout**: py-12, border-top
- **Content Structure**: flex justify-between on desktop, stack on mobile
- **Elements**:
  - Copyright: "© Nexas America"
  - Contact: info@nexasamerica.com (mailto link)
  - Optional links: Documentation, Support, Privacy
- **Styling**: text-sm

### Mobile Sidebar Toggle
- **Button**: Fixed top-left on mobile, p-2, rounded-md
- **Icon**: MenuIcon (Heroicons) - w-6 h-6
- **Overlay**: When sidebar open, backdrop blur with click-to-close

---

## Images

**No Large Hero Image**: This knowledge base focuses on functionality. The homepage uses a clean, search-first approach without decorative imagery.

**Documentation Images**:
- Screenshots and diagrams embedded within markdown content
- Product interface screenshots showing: login screens, facility selection, main dashboard, settings panels
- UI element callouts with numbered annotations (matching User Guide style)
- Technical diagrams: workflow steps, architecture overviews
- All images: responsive, shadow-md, rounded-lg, centered with captions

---

## Interaction Patterns

**Navigation**:
- Smooth transitions between pages (fade-in effect, 200ms)
- Sidebar items: instant feedback on hover
- Search results: Appear with slide-down animation

**Search Behavior**:
- Real-time filtering as user types
- Minimum 2 characters to trigger search
- Results ranked by relevance (Fuse.js)
- Highlight search terms in results

**Light/Dark Mode**:
- Toggle button in header (SunIcon/MoonIcon from Heroicons)
- Smooth transition: transition-colors duration-200
- Persistent preference (localStorage)
- All components adapt seamlessly

**Accessibility**:
- Focus indicators on all interactive elements (ring-2 ring-offset-2)
- Skip to main content link
- ARIA labels for icon-only buttons
- Keyboard navigation throughout
- Semantic HTML structure

---

## Icon Library

**Use Heroicons (via CDN)**: Outline style for general UI, Solid for emphasis
- Navigation: ChevronRightIcon, ChevronDownIcon
- Search: MagnifyingGlassIcon
- Topic cards: RocketLaunchIcon, CogIcon, ServerIcon, ArchiveBoxIcon
- UI controls: Bars3Icon (menu), XMarkIcon (close), SunIcon, MoonIcon
- Documentation: DocumentIcon, LinkIcon

---

## Responsive Breakpoints

- **Mobile** (< 768px): Single column, hamburger menu, full-width search
- **Tablet** (768px - 1024px): 2-column topic cards, persistent sidebar option
- **Desktop** (> 1024px): Full layout with fixed sidebar, 4-column topic cards

---

## Special Considerations

**Documentation-Specific**:
- Table of contents auto-generated for long articles (right sidebar on lg+ screens)
- "Edit on GitHub" link (if applicable)
- Print-friendly styles
- Copy code button for all code blocks

**Performance**:
- Lazy load documentation images
- Virtual scrolling for long doc pages
- Debounced search (300ms)
- Preload adjacent documentation pages