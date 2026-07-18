---
title: Sending to Machine
description: Deploy programs to production machines
category: Using the Product
---

# Sending to Machine

Deploy authorized CNC programs to production machines.

## Prerequisite

Before sending CNC programs to a machine, they must be **tested** and correctly **tagged** in the system.

To update the program’s download status:
1. Click the **Untested** status.
2. The **Authorize Download Status Change** form will open.
3. Toggle the status to **Authorize**.
4. Click **Save**.

Once updated to **Tested**, the program becomes eligible for **Sending to Machine**.

⚠️ **Note:** Control who can authorize downloads in: **Settings > Global Settings > Download Status Authorization** <br>

## Send to Machine

<div class="doc-flex-row">
<div>

1\. Click the **Send** button for the corresponding machine and head. <br> 2. The **Send to Machine** form will open. <br> 3. Select the programs you want to send by checking the boxes next to each program. <br> 4. Click **Send to Machine** to begin the transfer. <br><br> The system will process the request and handle delivery based on the configured communication method for that machine.

</div>
<div>

![Send to Machine](./images/send-to-machine.png "width=400")

</div>
</div>


---

## Transfer Methods

AuditMate supports multiple transfer protocols:

- **Network Transfer** – Direct IP-based communication to compatible machines.  
- **DNC (Direct Numerical Control)** – Traditional RS-232 or serial-based transfer.  
- **File Share** – Sending programs to a monitored network folder for machine retrieval.  

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
