---
title: System Requirements
description: Hardware and Software Requirements
category: Getting Started
---

# System Requirements

Ensure that the target environment meets the following requirements before proceeding with the installation.

## Hardware Requirements

The system should meet the following minimum and recommended specifications:

| Component       | Minimum Requirement | Recommended Requirement      |
| --------------- | ------------------- | ---------------------------- |
| Processor (CPU) | Dual-core 2.0 GHz   | Quad-core 2.5 GHz or higher  |
| Memory (RAM)    | 16 GB               | 32 GB or higher              |
| Storage         | 512 GB              | 1 TB (SSD preferred)         |
| Disk Type       | HDD                 | SSD (for better performance) |
| Network         | 1 Gbps LAN          | Stable high-speed connection |
| Display         | 1366 × 768          | 1920 × 1080                  |

### Notes

- Allocate additional storage for:
  - Database growth
  - Application logs and backups

- SSD storage is strongly recommended for:
  - Faster database performance
  - Improved application responsiveness

- Ensure reliable network connectivity for multi-user access

---

## Operating System Requirements

| Use Case                                                  | Windows 11 (Home/Pro)                              | Windows Server 2022 / 2025                            |
| --------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| 1–2 users, occasional access                              | Full performance, lowest cost, simple deployment   | Optional                                              |
| 2–3 users, occasional access                              | Simultaneous concurrent use may trigger delays\*   | Optional                                              |
| 2–3 users, frequent/simultaneous use                      | Not recommended -- IIS limits may trigger dealys\* | Recommended                                           |
| 3+ users, shared dashboards, or continuous use            | Not suitable                                       | Required                                              |
| Centralized governance hub (multiple machines/facilities) | Not suitable                                       | Required                                              |
| Regulated environments (ISO, ITAR, CMMC)                  | Possible but not ideal                             | Recommended -- hardened defaults, long-term servicing |

\*_Windows 11 IIS restricts concurrent requests. Multiple simultaneous IIS requests may cause delays or “500
Internal Service Error” messages. This will not impact the application or the data but will delay performance and
require the user to re-submit the request._

---

## Additional Software Requirements

Ensure that the following software is installed and available prior to installation:

| Category        | Requirement                                                                   | Notes                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Server | Microsoft SQL Server. It may be the Express, Standard, or Enterprise version. | To choose the best version for your use, please refer to the available Microsoft documentation on size limitations, backup, security, and other features for each product. |
| Database Tools  | SQL Server Management Studio (SSMS)                                           | For database access and management                                                                                                                                         |
| Framework       | .NET Framework 4.8.1                                                          | Required for the application; may already be installed on newer operating systems                                                                                          |

### Notes

- Installation and configuration of IIS, .NET Framework, and firewall settings are covered in the [Installation Guide](/docs/getting-started/installation)
- Ensure all required software is installed before proceeding
- Ensure that the SQL Server instance is accessible from the application server

---

## Next Steps

Once you have verified that all system requirements are met, proceed to the [Installation Guide](/docs/getting-started/installation) to begin setting up **AuditMateMFG™ Revision Manager** in your environment.
