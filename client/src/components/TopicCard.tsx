import { Link } from "wouter";
import { LucideIcon, Rocket, Settings, Server, Archive, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Settings,
  Server,
  Archive,
};

interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export function TopicCard({ title, description, icon, path }: TopicCardProps) {
  const IconComponent = iconMap[icon] || Rocket;

  return (
    <Link href={path} data-testid={`card-topic-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer group h-full">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <IconComponent className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-primary text-sm font-medium">
            <span>Learn more</span>
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
