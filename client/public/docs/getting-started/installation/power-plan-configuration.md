---
title: Power Plan Configuration
description: Configure Windows power settings to ensure continuous 24/7 system availability
category: Getting Started > Installation Guide
---

# Power Plan Configuration

Configure the Windows power plan on the host server to prevent the system from sleeping or turning off the display, ensuring **AuditMateMFG™** remains available at all times.

---

## Steps

1. Open **Control Panel → Power Options**
2. Click **Change plan settings** next to the active power plan
3. Apply the following settings:

| Setting                       | Value   |
| ----------------------------- | ------- |
| **Turn off the display**      | `Never` |
| **Put the computer to sleep** | `Never` |

4. Click **Save changes**
5. Restart the machine to apply all installation changes

---

## Next Steps

After system restart, the installation is complete. Proceed to [Verification](/docs/getting-started/installation/verification) to ensure the application is functioning as expected.
