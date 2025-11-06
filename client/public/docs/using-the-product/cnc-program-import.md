---
title: CNC Program Import
description: Import CNC programs for version control
category: Using the Product
---

# CNC Program Import

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
- Available for editing if needed
