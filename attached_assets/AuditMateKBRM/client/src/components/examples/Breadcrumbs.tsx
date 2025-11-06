import { Breadcrumbs } from '../Breadcrumbs';

export default function BreadcrumbsExample() {
  return (
    <div className="p-8 space-y-6">
      <Breadcrumbs items={[
        { title: "Getting Started", path: "/docs/getting-started" },
        { title: "Installation" }
      ]} />
      
      <Breadcrumbs items={[
        { title: "Using the Product", path: "/docs/using-the-product" },
        { title: "Part Identification" }
      ]} />
    </div>
  );
}
