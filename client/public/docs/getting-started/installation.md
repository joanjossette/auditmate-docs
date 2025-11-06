---
title: Installation Guide
description: Step-by-step installation instructions
category: Getting Started
---

# Installation Guide

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

```bash
# Example installation command
setup.exe /install /config=config.xml
```

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

```
http://localhost:3003/login
```

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

If port 3003 is already in use, modify the configuration in `config.xml`.

## Next Steps

Continue to [Quick Start](/docs/getting-started/quick-start) to begin using the system.
