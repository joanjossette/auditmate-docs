import { MarkdownContent } from '../MarkdownContent';
import { ThemeProvider } from '@/lib/theme-provider';

const sampleMarkdown = `# Introduction

Welcome to the **AuditMate MFG Revision Manager**, a web-based platform designed to streamline the way manufacturers and operators manage CNC programs and related documents.

## Key Features

- Centralized CNC program storage
- Version control and tracking
- User permission management
- Direct machine communication

### Installation

Follow these steps to install AuditMate:

1. Download the installer
2. Run the setup wizard
3. Configure your database connection

\`\`\`javascript
// Example code
const config = {
  database: "auditmate",
  host: "localhost"
};
\`\`\`

> This is a sample quote to demonstrate formatting.

For more information, contact us at \`info@nexasamerica.com\`.
`;

export default function MarkdownContentExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <MarkdownContent content={sampleMarkdown} />
      </div>
    </ThemeProvider>
  );
}
