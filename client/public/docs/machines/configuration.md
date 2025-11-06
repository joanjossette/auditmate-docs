---
title: Machine Configuration
description: Configure machine settings and communication
category: Machines
---

# Machine Configuration

Configure machine settings, communication protocols, and advanced options.

## Communication Setup

### Network Configuration
For Ethernet-connected machines:
- **IP Address**: Static IP recommended for reliability
- **Port**: Common ports include 5001, 8080, or custom
- **Protocol**: TCP/IP, FTP, or SMB/CIFS

### Serial Communication (DNC)
For RS-232 connected machines:
- **Baud Rate**: Common rates: 9600, 19200
- **Data Bits**: Usually 8
- **Parity**: None, Even, or Odd
- **Stop Bits**: 1 or 2
- **Flow Control**: XON/XOFF or hardware handshaking

## Program Format Settings

### File Naming
Configure how programs are named when sent to machines:
- Prefix/suffix patterns
- Character limitations
- Extension requirements

### Program Headers and Footers
Define standard headers and footers:
- Program start codes
- Tool change sequences
- End of program codes

## Advanced Settings

### Character Encoding
- ASCII standard
- Special character handling
- Line ending format (CR/LF)

### Baud Rate (Serial Communication)
Common settings:
- 9600 baud
- 19200 baud
- Custom rates

### Handshaking
- XON/XOFF flow control
- Hardware handshaking
- Timeout settings

## Backup and Restore

Export machine configurations:
1. Select machine
2. Choose **Export Configuration**
3. Save configuration file
4. Import to restore or duplicate settings

## Best Practices

- Document custom configurations
- Test after configuration changes
- Maintain backup of working configurations
- Use consistent naming conventions
- Regular communication testing
