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
| **Program Approval Groups** | Define which user roles are authorized to approve **Parts**, **Operations**, **Machines**, and **Machine Programs** before moving to *Production* status.<br><br>Click the **three dots** beside an approval group to view the list of user roles assigned to it. |<img src="/images/settings-program-approval-groups.png" alt="Program Approval Groups Settings" /> |
| **Machine Release Approval** | Control which user roles can authorize Machine Programs to be downloaded or sent to machines.<br><br>Toggle a user role’s switch to grant or remove permission to change a program’s Machine Release status. | <img src="/images/machine-release-approval.png" alt="Machine Release Approval Settings"/> |
| **Revision Sequencing** | Choose the relationship between Part and Operation revisions during UpRev: **Connected Revision Numbers** (Operation revisions follow the Part revision), **Disconnected Revision Numbers** (Operation revisions maintain independent numeric revisions), or **Disconnected Revision Letters** (Operation revisions maintain independent alphabetical revisions). | <img src="/images/revision-sequencing.png" alt="Revision Sequencing Settings"/> |
| **Part Revision Format** | Specify the format of **revision identifiers** for parts to ensure standard naming and traceability. | <img src="/images/settings-part-revision-format.png" alt="Part Revision Format"/> |
| **Operation Revision Format** | Define the **revision format** for operations, maintaining consistent versioning practices across the system. | <img src="/images/settings-operation-revision-format.png" alt="Operation Revision Format"/> |
| **Insert String to Program (Unique Identifier Format)** | Set the identifier string automatically inserted into Machine Programs for **tracking and traceability**. | <img src="/images/settings-insert-identifier.png" alt="Insert String to Program Settings"/> |
| **Main Program Limit** | Configure the **maximum number of main programs** allowed per part or operation. | <img src="/images/settings-main-program-limit.png" alt="Main Program Limit"/> |
| **Inactivity Timeout** | Specify the **inactivity period (in minutes)** after which the system automatically logs out idle users. | <img src="/images/settings-inactivity-timeout.png" alt="Inactivity Timeout Settings"/> |
| **Machine Programs** | Toggle whether the **Non-G-Code Programs** section is visible across Machine Programs. Manage the list of recognized **G-Code Program Extensions** (e.g. `.nc`, `.ncc`, `.txt`), and toggle whether program extensions are displayed. | <img src="/images/settings-machine-programs.png" alt="Machine Programs Settings"/> |
| **Document Categories** | Create custom categories (folders) to organize documents at different levels. Categories are universal and available for all items at their level. | <img src="/images/settings-document-categories.png" alt="Document Categories Settings"/> |
| **Part Tags** | Create and manage the list of tags available for labeling parts. Toggle a tag's switch to enable or disable it for use. | <img src="/images/settings-part-tags.png" alt="Part Tags Settings"/> |

---

## USER SETTINGS

| **Setting Item** | **Description** | **Image** |
|------------------|-----------------|------------|
| **Change Password** | Update the login password for the user account. | <img src="/images/settings-change-password.png" alt="Change Password Screen"/> |
| **Machine Program Editor** | Access the built-in editor to **view and modify imported Machine Programs** directly within the system. | <img src="/images/settings-cnc-program-editor.png" alt="Machine Program Editor"/> |

---

## Next Steps

After completing the settings configuration, proceed to [Manage Facilities](/docs/getting-started/manage-facilities) to create and manage facility records in the system.
