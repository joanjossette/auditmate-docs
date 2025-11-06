---
title: Adding Machines
description: Add individual machine instances
category: Machines
---

# Adding Machines

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
