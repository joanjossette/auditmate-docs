---
title: Sending to Machine
description: Deploy programs to production machines
category: Using the Product
---

# Sending to Machine

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

This ensures only qualified operators can send programs to machines.
