The jcmd utility is used to send diagnostic command requests to the JVM, where these requests are useful for controlling Java Flight Recordings, troubleshoot, and diagnose JVM and Java Applications. It must be used on the same machine where the JVM is running, and have the same effective user and group identifiers that were used to launch the JVM.

For more details on jcmd syntax and other usage details, see the jcmd command man page.

A special command jcmd <process id/main class> PerfCounter.print prints all performance counters in the process.

The command jcmd <process id/main class> <command> [options] sends the actual command to the JVM.

Example 2-1 shows diagnostic command requests to JVM using jcmd utility.

Example 2-1 Diagnostic Command Requests with jcmd Utility

> jcmd
5485 sun.tools.jcmd.JCmd
2125 MyProgram

> jcmd MyProgram help (or "jcmd 2125 help")
2125:
The following commands are available:
JFR.stop
JFR.start
JFR.dump
JFR.check
VM.native_memory
VM.check_commercial_features
VM.unlock_commercial_features
ManagementAgent.stop
ManagementAgent.start_local
ManagementAgent..md

Thread.print
GC.class_stats
GC.class_histogram
GC.heap_dump
GC.run_finalization
GC.run
VM.uptime
VM.flags
VM.system_properties
VM.command_line
VM.version
help




Create a heap dump

The preferred way to create a heap dump is

jcmd <pid> GC.heap_dump filename=Myheapdump


Create a heap histogram

The preferred way to create a heap histogram is

jcmd <pid> GC.class_histogram filename=Myheaphistogram  
