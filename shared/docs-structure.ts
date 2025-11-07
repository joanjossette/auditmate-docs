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
      { title: "Settings Configuration", path: "/docs/getting-started/settings-config" },
      { title: "Setting Up A New User", path: "/docs/getting-started/set-up-new-user" },
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
    title: "Archive",
    path: "/docs/archive",
    icon: "Archive",
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
