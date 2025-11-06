import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Menu, X } from "lucide-react";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

const sampleDocs: Record<string, { title: string; content: string; breadcrumbs: { title: string; path?: string }[] }> = {
  "/docs/getting-started": {
    title: "Getting Started",
    breadcrumbs: [{ title: "Getting Started" }],
    content: `# Getting Started

Welcome to the AuditMate MFG Revision Manager documentation. This guide will help you get up and running quickly.

## Overview

AuditMate MFG Revision Manager is a web-based platform designed to streamline the way manufacturers and operators manage CNC programs and related documents.

## What You'll Learn

- How to install and configure AuditMate
- Basic concepts and terminology
- Your first steps with the platform

## Next Steps

Continue to the [Installation Guide](/docs/getting-started/installation) to begin setting up your system.`,
  },
  "/docs/getting-started/quick-start": {
    title: "Quick Start",
    breadcrumbs: [
      { title: "Getting Started", path: "/docs/getting-started" },
      { title: "Quick Start" },
    ],
    content: `# Quick Start

Get up and running with AuditMate in minutes.

## First Login

1. Open your browser and navigate to the AuditMate URL
2. Enter your credentials
3. Select your facility from the facility selection screen

## Your First Part

Follow these steps to create your first part and CNC program:

### Step 1: Create a Part

1. Click **+Create** in the Parts panel
2. Enter part name and revision
3. Select authorization type
4. Save the part

### Step 2: Add an Operation

1. Select your newly created part
2. Navigate to the Operations section
3. Click **+Create** to add an operation
4. Enter operation details

### Step 3: Associate a Machine

1. With your operation selected, go to Machine Types
2. Check the box next to the machine you want to use
3. The machine is now linked to your operation

### Step 4: Import Programs

1. Navigate to CNC Programs
2. Drag and drop your program files
3. Review the imported programs

### Step 5: Authorize

1. Click the authorization icon
2. Review the program details
3. Toggle to Authorize and save

You're now ready to send programs to your machines!`,
  },
  "/docs/getting-started/introduction": {
    title: "Introduction",
    breadcrumbs: [
      { title: "Getting Started", path: "/docs/getting-started" },
      { title: "Introduction" },
    ],
    content: `# Introduction

Welcome to the AuditMate MFG Revision Manager, a web-based platform designed to streamline the way manufacturers and operators manage CNC programs and related documents.

## System Overview

The system provides a centralized hub where users can:

- **Store** CNC programs securely
- **Organize** documents with version control
- **Preview** programs before deployment
- **Transfer** files to machines
- **Manage** user permissions and access

## Key Benefits

### Version Control
Maintain complete control of the CNC program lifecycle with automatic versioning and change tracking.

### Data Security
Ensure compliance with company standards through document restrictions and user permission management.

### Error Reduction
Advanced validation and approval workflows help reduce errors and improve quality.

### Complete Traceability
Every program, file, and communication is logged for compliance and audit purposes.

## Built for Manufacturing

AuditMate integrates seamlessly with your existing manufacturing processes, supporting both day-to-day operations and long-term process reliability.`,
  },
  "/docs/getting-started/installation": {
    title: "Installation Guide",
    breadcrumbs: [
      { title: "Getting Started", path: "/docs/getting-started" },
      { title: "Installation" },
    ],
    content: `# Installation Guide

This guide will walk you through the installation process for AuditMate MFG Revision Manager.

## System Requirements

Before installing, ensure your system meets the following requirements:

- **Operating System**: Windows Server 2016 or later
- **Database**: PostgreSQL 12 or later
- **Browser**: Chrome, Firefox, or Edge (latest versions)
- **Network**: Local network access for machine communication

## Installation Steps

### 1. Download the Installer

Contact Nexas America to receive your installation package and license key.

### 2. Run the Setup Wizard

Execute the installer and follow the on-screen prompts:

\`\`\`bash
# Example installation command
setup.exe /install /config=config.xml
\`\`\`

### 3. Configure Database Connection

During installation, you'll be prompted to configure your database connection:

- **Host**: Your PostgreSQL server address
- **Port**: Default 5432
- **Database Name**: auditmate_production
- **Credentials**: Database username and password

### 4. Set Up Admin Account

Create your first administrator account with:

- Username
- Password
- Email address

### 5. Verify Installation

After installation completes, verify by accessing:

\`\`\`
http://localhost:3003/login
\`\`\`

Default credentials:
- **Username**: ExcellerantAdmin
- **Password**: Testingpw24#

> **Security Note**: Change the default password immediately after first login.

## Post-Installation

After successful installation:

1. Configure facility settings
2. Add machine types
3. Set up user accounts
4. Configure authorization workflows

## Troubleshooting

### Database Connection Issues

If you cannot connect to the database:

1. Verify PostgreSQL service is running
2. Check firewall settings
3. Confirm credentials are correct

### Port Conflicts

If port 3003 is already in use, modify the configuration in \`config.xml\`.

## Next Steps

Continue to [Quick Start](/docs/getting-started/quick-start) to begin using the system.`,
  },
  "/docs/using-the-product": {
    title: "Using the Product",
    breadcrumbs: [{ title: "Using the Product" }],
    content: `# Using the Product

Learn how to use AuditMate MFG Revision Manager for managing your CNC programs through the complete lifecycle.

## Workflow Overview

AuditMate guides you through a structured process:

1. **Part Identification** - Define the part to be manufactured
2. **Operation Creation** - Set up manufacturing operations
3. **Machine Association** - Link operations to machines
4. **Program Import** - Import CNC programs
5. **Authorization** - Approve for production
6. **Deployment** - Send to machines

## Core Concepts

### Parts
A part represents a physical component to be manufactured. Each part has:
- Unique identifier
- Revision number
- Authorization requirements
- Associated operations

### Operations
Operations define specific manufacturing activities performed on parts.

### Machines
Machines are the CNC equipment that execute programs.

### Programs
CNC programs contain the instructions for manufacturing.

## Getting Started

Choose a topic from the sidebar to learn more about each step in the workflow.`,
  },
  "/docs/using-the-product/part-identification": {
    title: "Part Identification",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "Part Identification" },
    ],
    content: `# Part Identification

Define the parts you'll be manufacturing in AuditMate.

## What is a Part?

A part represents a physical component to be manufactured. Each part in AuditMate serves as a container for operations and CNC programs.

## Creating a New Part

1. Navigate to the main screen
2. Click the **+Create** button in the Parts panel
3. Fill in the Create Part form:
   - **Part Name**: Unique identifier for the part
   - **Revision Number**: Version control identifier
   - **Authorization Type**: Required approval workflow
   - **Description**: Optional details about the part

## Part Properties

### Part Name
The part name should be unique and descriptive. Common naming conventions include:
- Part numbers from your ERP system
- Drawing numbers
- Internal part codes

### Revision Numbers
Revisions track changes to parts over time. The system can be configured to use:
- Letter-based revisions (A, B, C...)
- Number-based revisions (1, 2, 3...)
- Alphanumeric combinations

### Authorization Types
Authorization types determine who can approve parts for production. Configure these in Settings to match your quality control processes.

## Best Practices

- Use consistent naming conventions
- Include relevant part information in descriptions
- Set appropriate authorization types based on part criticality
- Review existing parts before creating duplicates`,
  },
  "/docs/using-the-product/operation-management": {
    title: "Operation Management",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "Operation Management" },
    ],
    content: `# Operation Management

Create and manage manufacturing operations for your parts.

## What is an Operation?

An operation represents a specific manufacturing activity performed on a part. Operations organize the workflow and link parts to machines.

## Creating Operations

### Step 1: Select a Part
Highlight the part you want to add an operation to.

### Step 2: Access Operations
Click **Operation** from either the Left Menu or Center Menu.

### Step 3: Create Operation
1. Click the **+Create** button
2. Fill in the Create Operation form:
   - **Operation Name**: Descriptive name for the operation
   - **Operation Number**: Sequential identifier
   - **Description**: Details about what this operation accomplishes

## Operation Workflow

Each operation follows this sequence:
1. Operation is created and linked to a part
2. Machines are associated with the operation
3. CNC programs are imported for the operation
4. Programs are authorized
5. Programs are deployed to machines

## Multiple Operations

Parts can have multiple operations to represent multi-step manufacturing processes:
- Operation 10: Roughing
- Operation 20: Finishing
- Operation 30: Inspection

## Managing Operations

- **Edit**: Modify operation details
- **Delete**: Remove operations (only if no programs exist)
- **Copy**: Duplicate operations to new parts
- **Reorder**: Change operation sequence`,
  },
  "/docs/using-the-product/machine-association": {
    title: "Machine Association",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "Machine Association" },
    ],
    content: `# Machine Association

Link operations to the machines that will execute them.

## Associating Machines

### Prerequisites
- Part must be created
- Operation must be defined
- Machine types must be configured in the system

### Association Process

1. **Select the Operation**: Highlight the operation you created
2. **Access Machine Types**: Click **Machine Type** from the Left or Center Menu
3. **Select Machines**: In the Machine Types list, check the box next to each machine you want to associate

## Machine Capabilities

When associating machines, consider:
- **Tooling**: Does the machine have the required tools?
- **Work Envelope**: Is the part within the machine's capacity?
- **Spindle Type**: Does it match program requirements?
- **Number of Axes**: 3-axis, 4-axis, 5-axis compatibility

## Multi-Machine Operations

An operation can be associated with multiple machines:
- Primary production machine
- Backup machine for overflow
- Alternative machines for flexibility

## Managing Associations

- **Add**: Check additional machines
- **Remove**: Uncheck machines no longer needed
- **Update**: Modify associations as requirements change`,
  },
  "/docs/using-the-product/cnc-program-import": {
    title: "CNC Program Import",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "CNC Program Import" },
    ],
    content: `# CNC Program Import

Import CNC programs into AuditMate for version control and deployment.

## Before Importing

CNC programs are created using external CAM software (like Mastercam, Fusion 360, or similar). AuditMate manages these programs but does not create them.

## Import Process

### Step 1: Navigate to CNC Programs
With a machine associated to your operation, click **CNC Programs** from the menu.

### Step 2: Select Head (Multi-Head Machines)
For multi-head machines, select the correct head number before importing.

### Step 3: Import Files
You can import files in two ways:

**Drag and Drop**:
- Drag program files from your file explorer
- Drop into either the MAIN or SUB panels

**Browse for Files**:
- Click **Click to Browse**
- Select one or more program files
- Click Open

## Main vs. Sub Programs

### Main Programs
The primary CNC program that runs on the machine. Typically contains:
- Tool calls
- Machining operations
- Program flow control

### Sub Programs
Reusable routines called by main programs:
- Common patterns
- Subroutines
- Macros

## Supported File Formats

- G-code files (.nc, .txt, .cnc)
- Machine-specific formats
- Post-processed CAM output

## After Import

Once imported, programs are:
- Stored with version control
- Ready for review and authorization
- Available for editing if needed`,
  },
  "/docs/using-the-product/authorization-process": {
    title: "Authorization Process",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "Authorization Process" },
    ],
    content: `# Authorization Process

Approve parts, operations, and CNC programs for production use.

## Why Authorization?

Authorization ensures that only validated and approved programs are sent to production machines, maintaining quality and reducing errors.

## Authorization Workflow

The entire setup must be authorized before execution:
1. Part authorization
2. Operation authorization
3. Machine authorization
4. CNC Program authorization

## Who Can Authorize?

Authorization permissions are based on:
- User role assignments
- Authorization type settings
- Configured approval workflows

Configure these in **Settings > Part Authorization Types**.

## Authorization Process

### Step 1: Login as Authorized User
Only users with appropriate permissions can authorize programs.

### Step 2: Navigate to Programs
Follow the hierarchy:
- Select Part
- Select Operation
- Select Machine Type
- View CNC Programs

### Step 3: Review Program
Before authorizing:
- Verify program correctness
- Check version and revision
- Review any warnings or alerts

### Step 4: Authorize
1. Click the **Authorization icon** in the right-most column
2. The Authorize Program Status Change form opens
3. Review the details
4. Toggle to **Authorize**
5. Click **Save**

## Authorization States

- **Pending**: Awaiting authorization
- **Authorized**: Approved for production
- **Rejected**: Not approved (requires revision)
- **Expired**: Authorization time limit exceeded

## Revoking Authorization

If a program needs to be revised:
1. Open the authorization form
2. Toggle to remove authorization
3. Make necessary changes
4. Re-authorize when ready`,
  },
  "/docs/using-the-product/sending-to-machine": {
    title: "Sending to Machine",
    breadcrumbs: [
      { title: "Using the Product", path: "/docs/using-the-product" },
      { title: "Sending to Machine" },
    ],
    content: `# Sending to Machine

Deploy authorized CNC programs to production machines.

## Prerequisites

Before sending programs to machines:
- ✓ Part is created
- ✓ Operation is defined
- ✓ Machine is associated
- ✓ Programs are imported
- ✓ Programs are authorized
- ✓ Machine communication is configured

## Send Process

### Step 1: Select the Program
Navigate to the authorized CNC program you want to deploy.

### Step 2: Initiate Transfer
Click the **Send to Machine** button or icon.

### Step 3: Confirm Transfer
Review the transfer details:
- Target machine
- Program name
- File size
- Destination path

### Step 4: Monitor Transfer
The system displays transfer progress:
- Connection status
- Transfer percentage
- Completion confirmation

## Transfer Methods

AuditMate supports multiple transfer protocols:
- **Network Transfer**: Direct network connection
- **DNC (Direct Numerical Control)**: Serial/RS-232 communication
- **File Share**: Network folder synchronization

## Troubleshooting

### Connection Failed
- Verify machine is powered on
- Check network connectivity
- Confirm IP address and port settings

### Transfer Timeout
- Check file size limits
- Verify machine storage availability
- Review communication settings

### Program Not Found on Machine
- Confirm transfer completed successfully
- Check destination folder on machine
- Verify file naming conventions

## Download Status

Control who can authorize downloads in:
**Settings > Download Status Authorization**

This ensures only qualified operators can send programs to machines.`,
  },
  "/docs/machines": {
    title: "Machines",
    breadcrumbs: [{ title: "Machines" }],
    content: `# Machines

Configure and manage CNC machines in AuditMate MFG Revision Manager.

## Machine Management

AuditMate supports multiple machine types and configurations to match your manufacturing environment.

## Machine Types

Define machine types based on capabilities:

- Machining centers
- Lathes
- Multi-axis mills
- Custom configurations

## Adding Machines

1. Navigate to Machine Management
2. Select "Add Machine Type"
3. Configure machine properties
4. Add individual machine instances

## Configuration

Each machine can be configured with:

- Communication settings
- File transfer protocols
- Program format requirements
- Head/spindle configurations

## Multi-Head Machines

For machines with multiple heads or spindles, configure each head separately to ensure proper program routing.`,
  },
  "/docs/machines/machine-types": {
    title: "Machine Types",
    breadcrumbs: [
      { title: "Machines", path: "/docs/machines" },
      { title: "Machine Types" },
    ],
    content: `# Machine Types

Define and categorize your CNC machines by type.

## What are Machine Types?

Machine types group similar machines based on their capabilities, control systems, and program formats. This organization helps:
- Standardize program formatting
- Simplify machine selection
- Manage communication settings

## Common Machine Types

### Vertical Machining Centers (VMC)
- 3-axis, 4-axis, or 5-axis configurations
- Vertical spindle orientation
- Common for mold making and general machining

### Horizontal Machining Centers (HMC)
- Horizontal spindle orientation
- Pallet changers for high-volume production
- Ideal for multi-sided operations

### Lathes
- Turning operations
- Live tooling options
- Multi-axis turning centers

### Swiss-Type Machines
- High-precision small parts
- Sliding headstock design
- Complex multi-axis operations

### Mill-Turn Centers
- Combined milling and turning
- Complete part machining
- Reduces setups

## Creating Machine Types

### Step 1: Add Machine Type
Navigate to the machine configuration area and select **Add Machine Type**.

### Step 2: Define Properties
Configure the machine type with:
- **Name**: Descriptive identifier (e.g., "Haas VMC", "Okuma Lathe")
- **Category**: General classification
- **Control Type**: Controller brand/model (Fanuc, Haas, Mazak, etc.)
- **Post Processor**: CAM post processor identifier

### Step 3: Communication Settings
Set up how programs are transferred:
- Network protocols
- Port numbers
- File transfer methods

### Step 4: Program Format
Define program requirements:
- File extensions
- Header/footer formats
- Character limitations`,
  },
  "/docs/machines/adding-machines": {
    title: "Adding Machines",
    breadcrumbs: [
      { title: "Machines", path: "/docs/machines" },
      { title: "Adding Machines" },
    ],
    content: `# Adding Machines

Add individual machine instances to your AuditMate system.

## Machine vs. Machine Type

- **Machine Type**: A category or class of machines (e.g., "Haas VF-2")
- **Machine**: A specific physical machine on your shop floor (e.g., "VMC-101")

## Adding a Machine

### Step 1: Create Machine Type
If you haven't already, create the machine type first.

### Step 2: Add Machine Instance
1. Select the machine type
2. Click **Add Machine**
3. Fill in machine details

### Required Information

**Machine Identification**:
- **Machine Name**: Unique identifier (e.g., "VMC-101", "Lathe-3")
- **Machine Number**: Internal asset number
- **Location**: Shop floor location or cell

**Communication Settings**:
- **IP Address**: Network address for the machine
- **Port Number**: Communication port
- **Transfer Protocol**: DNC, FTP, network share, etc.

**Physical Properties**:
- **Work Envelope**: Maximum part size (X, Y, Z dimensions)
- **Number of Tools**: Tool magazine capacity
- **Number of Pallets**: If applicable

## Multi-Head Configuration

For machines with multiple spindles or heads:
1. Enable multi-head mode
2. Configure each head separately
3. Assign head numbers
4. Set up individual communication for each head

## Testing Communication

After adding a machine:
1. Use the **Test Connection** feature
2. Verify file transfer works
3. Send a test program
4. Confirm the machine receives it correctly

## Managing Machines

**Edit Machine**: Update machine information
**Remove Machine**: Delete machines no longer in use
**Enable/Disable**: Temporarily take machines offline`,
  },
  "/docs/machines/configuration": {
    title: "Machine Configuration",
    breadcrumbs: [
      { title: "Machines", path: "/docs/machines" },
      { title: "Configuration" },
    ],
    content: `# Machine Configuration

Configure detailed settings for your CNC machines.

## Configuration Overview

Proper machine configuration ensures reliable communication and correct program formatting.

## Communication Settings

### Network Configuration
- **IP Address**: Static IP recommended for stability
- **Subnet Mask**: Network subnet configuration
- **Gateway**: Network gateway if required
- **Port**: Communication port (commonly 10000-10099 for DNC)

### Transfer Protocols

**DNC (Direct Numerical Control)**:
- Serial or network-based communication
- Real-time program streaming
- Requires DNC software on machine

**FTP (File Transfer Protocol)**:
- Standard file transfer
- Machine must have FTP server enabled
- Configure username/password if required

**Network Share**:
- Shared folder on machine or network
- Map network drive
- Set appropriate permissions

## Program Format Settings

### File Naming
Configure how programs are named:
- Character limits
- Allowed special characters
- Automatic numbering schemes

### Program Headers
Define required header information:
- Program number format
- Date/time stamps
- Operator instructions
- Tool lists

### Program Footers
Set up footer requirements:
- End-of-program codes
- Rewind commands
- Reset instructions

## Advanced Settings

### Character Encoding
- ASCII standard
- Special character handling
- Line ending format (CR/LF)

### Baud Rate (Serial Communication)
Common settings:
- 9600 baud
- 19200 baud
- Custom rates

### Handshaking
- XON/XOFF flow control
- Hardware handshaking
- Timeout settings

## Backup and Restore

Export machine configurations:
1. Select machine
2. Choose **Export Configuration**
3. Save configuration file
4. Import to restore or duplicate settings`,
  },
  "/docs/archive": {
    title: "Archive",
    breadcrumbs: [{ title: "Archive" }],
    content: `# Archive

Manage version history, backups, and historical records in AuditMate.

## Version Control

AuditMate automatically maintains version history for:

- Parts
- Operations
- CNC Programs
- Machine configurations

## Backup and Restore

### Automatic Backups

The system automatically creates backups at:
- Daily intervals
- Before major changes
- On-demand when requested

### Restoring from Archive

To restore a previous version:

1. Navigate to the archived item
2. Select the version to restore
3. Review changes
4. Confirm restoration

## Historical Reports

Generate reports showing:
- Change history
- Audit trails
- User activities
- Program deployments

## Data Retention

Configure retention policies to:
- Meet compliance requirements
- Manage storage space
- Maintain historical records

## Compliance

Archive features support:
- ISO 9001 requirements
- AS9100 standards
- FDA 21 CFR Part 11
- Custom audit requirements`,
  },
  "/docs/contact": {
    title: "Contact Information",
    breadcrumbs: [{ title: "Contact Information" }],
    content: `# Contact Information

Get help and support for AuditMate MFG Revision Manager.

## Nexas America

### Locations

**Massachusetts Office**
- Phone: 413.566.0100
- Address: Hampden, MA 01036

**Pennsylvania Office**
- Phone: 267.603.5582

### Email Support

For general inquiries and technical support:
- **Email**: info@nexasamerica.com

## Support Hours

Our support team is available:
- Monday - Friday: 8:00 AM - 6:00 PM EST
- Emergency support: Available 24/7 for critical issues

## Resources

- **Documentation**: This knowledge base
- **Training**: Available on request
- **Updates**: Automatic notifications for new releases

## Feedback

We value your feedback! Contact us with:
- Feature requests
- Bug reports
- Suggestions for improvement
- Success stories

## Social Media

Stay connected with Nexas America for the latest updates and news.`,
  },
};

export default function DocPage() {
  const [, params] = useRoute("/docs/*");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const path = params ? `/docs/${params}` : "/docs/getting-started";
  const doc = sampleDocs[path] || sampleDocs["/docs/getting-started"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className={`${sidebarOpen ? "block" : "hidden"} md:block fixed md:relative inset-0 z-40 md:z-0`}>
        <div className="md:hidden absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="relative h-full">
          <DocsSidebar />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl px-6 py-8">
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              data-testid="button-mobile-menu"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          <div className="mb-6">
            <SearchBar
              placeholder="Search documentation..."
              onSearch={setSearchQuery}
            />
          </div>

          <Breadcrumbs items={doc.breadcrumbs} />

          <article>
            <MarkdownContent content={doc.content} />
          </article>
        </div>
      </div>
    </div>
  );
}
