---
title: Machine Release
description: Deploy machine programs for testing or production use
category: Using the Product
---

# Machine Release

**Machine Release** is where you send machine programs to a machine — whether still in **Development** for testing, or authorized for **Production** use.

![Machine Release](./images/machine-release.png "width=800 nozoom")
**Access:** Top Menu → **Parts and Operations**, select a part, operation, and machine type, then go to **Machine Release** via the Left Menu.

A program can be sent to a machine at any time, regardless of its authorization status — including programs still in **Development**, for testing before production approval.

Machine Release status (**Untested** / **Tested**) is tracked separately from authorization status and never blocks a send. It exists to flag whether a program has been verified on the machine, and can only move from **Untested** to **Tested** once the associated Part/Operation has itself been authorized to **Production**.

<div class="doc-flex-row">
<div>

Clicking the **Untested** status opens the **Approve Machine Release Change** form. A user with one of the required roles must authorize the change before the program can move to **Tested**.

</div>
<div>

![Approve Machine Release Change](./images/approve-machine-release-change.png "width=400")

</div>
</div>

<div class="doc-flex-row">
<div>

Clicking the **Tested** status opens the **Machine Release Change** form, a direct toggle between **Untested** and **Tested** — no additional approval required.

</div>
<div>

![Machine Release Change](./images/machine-release-change.png "width=400")

</div>
</div>

⚠️ **Note:** Control who can authorize downloads in: **Settings > Global Settings > Machine Release Approval** <br>

## Send to Machine

<div class="doc-flex-row">
<div>

1\. Click the **Send** button for the corresponding machine and head. <br> 2. The **Send to Machine** form will open. <br> 3. Select the programs you want to send by checking the boxes next to each program. <br> 4. Click **Send to Machine** to begin the transfer. <br><br> The system will process the request and handle delivery based on the configured communication method for that machine.

</div>
<div>

![Send to Machine](./images/send-to-machine.png "width=400")

</div>
</div>
