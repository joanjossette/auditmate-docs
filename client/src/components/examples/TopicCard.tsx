import { TopicCard } from '../TopicCard';

export default function TopicCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <TopicCard
        title="Getting Started"
        description="Quick start guide, installation, and initial setup"
        icon="Rocket"
        path="/docs/getting-started"
      />
      <TopicCard
        title="Using the Product"
        description="Step-by-step workflows, features, and best practices"
        icon="Settings"
        path="/docs/using-the-product"
      />
      <TopicCard
        title="Machines"
        description="Machine configuration, types, and management"
        icon="Server"
        path="/docs/machines"
      />
      <TopicCard
        title="Archive"
        description="Version control, backup, and historical records"
        icon="Archive"
        path="/docs/archive"
      />
    </div>
  );
}
