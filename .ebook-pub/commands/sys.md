# sys

**version**: 0.100.1

## **usage**:

View information about the system.

## Signature

`> sys `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | record |

## Examples

Show info about the system

```bash
> sys
```

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                       | type     | usage                                                 |
| ------------------------------------------ | -------- | ----------------------------------------------------- |
| [`sys cpu`](/commands/docs/sys_cpu.md)     | built-in | View information about the system CPUs.               |
| [`sys disks`](/commands/docs/sys_disks.md) | built-in | View information about the system disks.              |
| [`sys host`](/commands/docs/sys_host.md)   | built-in | View information about the system host.               |
| [`sys mem`](/commands/docs/sys_mem.md)     | built-in | View information about the system memory.             |
| [`sys net`](/commands/docs/sys_net.md)     | built-in | View information about the system network interfaces. |
| [`sys temp`](/commands/docs/sys_temp.md)   | built-in | View the temperatures of system components.           |
| [`sys users`](/commands/docs/sys_users.md) | built-in | View information about the users on the system.       |
