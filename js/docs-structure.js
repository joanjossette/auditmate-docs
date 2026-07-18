// Ported from shared/docs-structure.ts (React version). Plain data, no framework.
// Each item's `path` mirrors the original React route (e.g. "/docs/getting-started/...").
// `docPathToFile()` in js/docs.js converts that into the actual markdown file to fetch.

export const docsStructure = [
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    icon: "BookOpen",
    children: [
      { title: "System Requirements", path: "/docs/getting-started/system-requirements" },
      {
        title: "Installation Guide",
        path: "/docs/getting-started/installation",
        children: [
          {
            title: "SQL Server Configuration",
            path: "/docs/getting-started/installation/sql-server-configuration",
            children: [
              { title: "Enable Network Protocols", path: "/docs/getting-started/installation/sql-server-configuration/enable-network-protocols" },
              { title: "Configure Authentication Mode", path: "/docs/getting-started/installation/sql-server-configuration/configure-authentication-mode" },
              { title: "Create SQL Server Login", path: "/docs/getting-started/installation/sql-server-configuration/create-sql-login" },
            ],
          },
          { title: "IIS Setup", path: "/docs/getting-started/installation/iis-setup" },
          { title: "Application Deployment", path: "/docs/getting-started/installation/application-deployment" },
          { title: "Firewall Setup", path: "/docs/getting-started/installation/firewall-setup" },
          { title: "IIS Application Pool and Site Configuration", path: "/docs/getting-started/installation/iis-application-pool-and-site-configuration" },
          { title: "Power Plan Configuration", path: "/docs/getting-started/installation/power-plan-configuration" },
          { title: "Verification", path: "/docs/getting-started/installation/verification" },
        ],
      },
      { title: "Main Screen Overview", path: "/docs/getting-started/main-screen-overview" },
      { title: "Settings Configuration", path: "/docs/getting-started/settings-config" },
      { title: "Manage Facilities", path: "/docs/getting-started/manage-facilities" },
      { title: "Manage User Roles", path: "/docs/getting-started/user-roles" },
      { title: "Manager Users", path: "/docs/getting-started/manage-users" },
    ],
  },
  {
    title: "Machines",
    path: "/docs/machines",
    icon: "Drill",
    children: [
      { title: "Machine Types", path: "/docs/machines/machine-types" },
      { title: "Adding Machines", path: "/docs/machines/adding-machines" },
      { title: "Machine Configuration", path: "/docs/machines/configuration" },
    ],
  },
  {
    title: "Parts & Operations",
    path: "/docs/parts-and-operations",
    icon: "Server",
    children: [
      { title: "Parts", path: "/docs/parts-and-operations/parts" },
      { title: "Operations", path: "/docs/parts-and-operations/operations" },
    ],
  },
  {
    title: "Using the Product",
    path: "/docs/using-the-product",
    icon: "MonitorCog",
    children: [
      { title: "Part Identification", path: "/docs/using-the-product/part-identification" },
      { title: "Operation Management", path: "/docs/using-the-product/operation-management" },
      { title: "Machine Association", path: "/docs/using-the-product/machine-association" },
      { title: "CNC Program Import", path: "/docs/using-the-product/cnc-program-import" },
      { title: "Authorization Process", path: "/docs/using-the-product/authorization-process" },
      { title: "Sending to Machine", path: "/docs/using-the-product/sending-to-machine" },
    ],
  },
  {
    title: "Archive",
    path: "/docs/archive",
    icon: "Archive",
    children: [
      { title: "Revisit", path: "/docs/archive/revisit" },
    ],
  },
  {
    title: "Utilities",
    path: "/docs/incoming-file-manager",
    icon: "ScanSearch",
    children: [
      { title: "Incoming File Manager", path: "/docs/incoming-file-manager" },
    ],
  },
  {
    title: "Contact Information",
    path: "/docs/contact",
    icon: "Mail",
  },
];

export const topicCards = [
  {
    title: "Getting Started",
    description: "Quick start guide, installation, and initial setup",
    path: "/docs/getting-started",
    icon: "BookOpen",
  },
  {
    title: "Using the Product",
    description: "Step-by-step workflows, features, and best practices",
    path: "/docs/using-the-product",
    icon: "MonitorCog",
  },
  {
    title: "Machines",
    description: "Machine configuration, types, and management",
    path: "/docs/machines",
    icon: "Drill",
  },
  {
    title: "Archive",
    description: "Version control, backup, and historical records",
    path: "/docs/archive",
    icon: "Archive",
  },
];

// Maps the original lucide-react icon names to the vanilla lucide CDN's
// kebab-case data-lucide names (same icon set, so the site keeps the exact
// icons the React version used instead of an emoji stand-in).
export const iconGlyphs = {
  BookOpen: "book-open",
  Settings: "settings",
  Server: "server",
  Archive: "archive",
  Mail: "mail",
  Drill: "drill",
  ScanSearch: "scan-search",
  MonitorCog: "monitor-cog",
};
