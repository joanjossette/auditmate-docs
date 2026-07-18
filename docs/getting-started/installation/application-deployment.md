---
title: Application Deployment
description: Deploy AuditMateMFG™ Revision Manager using the Deployment Manager installer
category: Getting Started > Installation Guide
---

# Application Deployment

Deploy **AuditMateMFG™ Revision Manager** by running the Deployment Manager and configuring the website, database, and optional integration settings.

## 1. Download the Installer

Contact **Nexas America** to receive your installation package and license key.

<h2 style="border-top: none; padding-top: 0;">2. Extract the Installer Package</h2>

Extract the **AuditMateMFG™ Installer Package** to a known directory on the host server.

<h2 style="border-top: none; padding-top: 0;">3. Run the Installer as Administrator</h2>

1. Navigate to the extracted directory
2. Right-click **Setup.exe** or **AuditMateMFGDeploymentManager.msi**
3. Select **Run as administrator**

<h2 style="border-top: none; padding-top: 0;">4. Configure Website Settings</h2>

On the **Website Configuration** screen:

1. Enter your desired **Application URL**
2. Verify that the specified **File Storage Path** exists
   - If the path does not exist, create it manually before proceeding

![Website Configuration](../../../../images/website-configuration.png)

<h2 style="border-top: none; padding-top: 0;">5. Configure Database Connection</h2>

On the **Database Configuration** screen, enter the SQL Server details from the previous setup steps:

| Setting       | Value                                                                     |
| ------------- | ------------------------------------------------------------------------- |
| Server        | `[Your SQL Server Instance]`                                              |
| Database Name | `[Your desired database name — will be created]`                          |
| Username      | `[SQL Server login username created during the SQL Server Configuration]` |
| Password      | `[SQL Server login password created during the SQL Server Configuration]` |
| Database Port | `[TCP Dynamic Port from IPAll noted during SQL Server Configuration`      |

![Database Configuration](../../../../images/database-configuration.png)

<h2 style="border-top: none; padding-top: 0;">6. Configure LDAP Settings (Optional)</h2>

LDAP settings enable connection to a directory service (e.g., Active Directory) for centralized authentication. These settings are optional and depend on your environment.

- **Windows 11:** Retain the default values and proceed to the next step.
- **Windows Server:** Update the settings according to your directory configuration.

![LDAP Settings](../../../../images/ldap-settings.png)

<h2 style="border-top: none; padding-top: 0;">7. Configure File Compare Settings</h2>

The **File Compare Settings** define how the system handles file comparison, email security, and program scanning. Most installations can use the default values.

| Setting                                         | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **ExamDiff Location**                           | Root path of the file comparison program. Provided by your authorized reseller if this feature is enabled.       |
| **Email SSL Setting**                           | Select whether your email server uses SSL. Applied when sending file comparison reports to users.                |
| **Program Modification (FANUC) Scanning Timer** | Time interval for scanning compatible FANUC CNC controls for program changes (if enabled for your installation). |

![File Compare Settings](../../../../images/file-compare-settings.png)

<h2 style="border-top: none; padding-top: 0;">8. Complete the Installation</h2>

Click **Next** to proceed and complete the installation.

![Installation Completed](../../../../images/installation-completed.png)

## Next Steps

After verifying the deployment, proceed to [Firewall Setup](/docs/getting-started/installation/firewall-setup) to configure Windows Defender Firewall for remote access.
