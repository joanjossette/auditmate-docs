---
title: Settings Configuration
description: Learn how to customize AuditMate MFG to your needs by adjusting system settings, managing authorizations, and setting user preferences.
category: Getting Started
---


# Settings Configuration

The **Settings** menu is accessible from the **Top Menu** and provides configuration options for both **system-wide behavior** and **individual user preferences**.  
It is divided into two categories: **Global Settings** and **User Settings**.

---

## GLOBAL SETTINGS

| **Setting Item** | **Description** | **Image** |
|------------------|-----------------|------------|
| **Part Authorization Types** | Define which user roles are authorized to approve **Parts**, **Operations**, **Machines**, and **CNC Programs** before moving to *Production* status.<br><br>Click the **three dots** beside an authorization type to view the list of user roles assigned to it. |<img src="/images/settings-part-authorization.png" alt="Download Status Authorization Settings" width="400" /> |
| **Download Status Authorization** | Control which user roles can authorize CNC Programs to be downloaded or sent to machines.<br><br>Toggle a user role’s switch to grant or remove permission to change a program’s download status. | <img src="/images/settings-download-authorization.png" alt="Download Status Authorization Settings" width="400"/> |
| **Part Revision Format** | Specify the format of **revision identifiers** for parts to ensure standard naming and traceability. | <img src="/images/settings-part-revision-format.png" alt="Part Revision Format" width="400"/> |
| **Operation Revision Format** | Define the **revision format** for operations, maintaining consistent versioning practices across the system. | <img src="/images/settings-operation-revision-format.png" alt="Operation Revision Format" width="400"/> |
| **Insert String to Program (Unique Identifier Format)** | Set the identifier string automatically inserted into CNC Programs for **tracking and traceability**. | <img src="/images/settings-insert-identifier.png" alt="Insert String to Program Settings" width="400"/> |
| **Main Program Limit** | Configure the **maximum number of main programs** allowed per part or operation. | <img src="/images/settings-main-program-limit.png" alt="Main Program Limit" width="400"/> |
| **Inactivity Timeout** | Specify the **inactivity period (in minutes)** after which the system automatically logs out idle users. | <img src="/images/settings-inactivity-timeout.png" alt="Inactivity Timeout Settings" width="400"/> |

---

## USER SETTINGS

| **Setting Item** | **Description** | **Image** |
|------------------|-----------------|------------|
| **Change Password** | Update the login password for the user account. | <img src="/images/settings-change-password.png" alt="Change Password Screen" width="400"/> |
| **CNC Program Editor** | Access the built-in editor to **view and modify imported CNC Programs** directly within the system. | <img src="/images/settings-cnc-program-editor.png" alt="CNC Program Editor" width="400"/> |

---

## Next Steps

After completing the settings configuration, proceed to [Manage Facilities](/docs/getting-started/manage-facilities) to create and manage facility records in the system.
