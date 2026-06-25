---
title: Installation Guide
description: Step-by-step installation instructions
category: Getting Started
---

# Installation Guide

Follow the steps below in sequence to ensure a successful installation:

1. [SQL Server Configuration](/docs/getting-started/installation/sql-server-configuration)  
   Configure the database server, including enabling network protocols, setting authentication mode, and creating the required login.

2. [IIS Setup](/docs/getting-started/installation/iis-setup)  
   Install and configure Internet Information Services (IIS) to host the web application.

3. [Application Deployment](/docs/getting-started/installation/application-deployment)  
   Deploy the AuditMateMFG™ application files and configure initial settings.

4. [Firewall Setup](/docs/getting-started/installation/firewall-setup)  
   Configure firewall rules to allow required inbound and outbound connections.

5. [IIS Application Pool and Site Configuration](/docs/getting-started/installation/iis-app-pool-site-configuration)  
   Set up the application pool and configure the IIS site for optimal performance and stability.

6. [Power Plan Configuration](/docs/getting-started/installation/power-plan-configuration)  
   Adjust system power settings to prevent performance throttling and ensure consistent operation.

7. [Verification](/docs/getting-started/installation/verification)  
   Validate the installation to ensure all components are properly configured and functioning as expected.

---

## Pre-Installation Notes

Before starting the installation:

- Ensure the **installer package** and **license key** have been provided by Nexas America
- Verify that the SQL Server instance is installed, running, and accessible
- Confirm that the target machine has **administrator privileges**

---

## Next Steps

After completing all installation steps:

1. Open the application in a web browser to verify that it is accessible
2. Log in using the default administrator credentials:
   - **Username:** `AuditmateAdmin`
   - **Password:** `Testingpw24#`
3. Change the default password immediately to secure the system
4. Proceed to the [Main Screen Overview](/docs/getting-started/main-screen-overview) to familiarize yourself with the interface
