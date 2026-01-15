export interface DocItem {
  title: string;
  path: string;
  icon?: string;
  children?: DocItem[];
}

export const docsStructure: DocItem[] = [
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    icon: "BookOpen",
    children: [
      { title: "Introduction", path: "/docs/getting-started/introduction" },
      { title: "Installation Guide", path: "/docs/getting-started/installation" },
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
    icon: "Server",
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
    icon: "Settings",
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
    icon: "Rocket",
  },
  {
    title: "Using the Product",
    description: "Step-by-step workflows, features, and best practices",
    path: "/docs/using-the-product",
    icon: "Settings",
  },
  {
    title: "Machines",
    description: "Machine configuration, types, and management",
    path: "/docs/machines",
    icon: "Server",
  },
  {
    title: "Archive",
    description: "Version control, backup, and historical records",
    path: "/docs/archive",
    icon: "Archive",
  },
];
