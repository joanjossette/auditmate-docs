---
title: Authorization Process
description: Approve programs for production use
category: Using the Product
---

# Authorization Process

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
4. Re-authorize when ready
