While using the console to understand and log what happens in your JS is a powerful tool, sometimes it’s not enough and you would need more to understand what’s going on in your program.

In most browsers, there is a powerful JS debugger, and we will see here how to use it.

|||info

### Debugger

A *debugger* is a software program used to test and find bugs (errors) in other programs.
When a program crashes, the *debugger* show the position of the error in the target program. Most debuggers also are capable of running programs in a step-by-step mode, besides stopping on specific points (called breakpoints).

|||

### Two ways of opening the debugger

There are two main ways of opening the debugger :

1. You write the statement: `debugger` anywhere in your code, and when the programs comes to that particular instruction it will pause and open the debugger tool focused on that particular line. You can then use the debugger normally.

1. By opening the debugger yourself and setting what's called a "breakpoint". A breakpoint is an intentional stop or pause placed in a program. Basically you mark a line in the program as a "breakpoint" and then when the program runs it will pause at that place and wait for your interaction to continue.
