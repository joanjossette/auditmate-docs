import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexas America. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:info@nexasamerica.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded px-3 py-2"
              data-testid="link-contact-email"
            >
              <Mail className="h-4 w-4" />
              <span>info@nexasamerica.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
