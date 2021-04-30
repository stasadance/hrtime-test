# hrtime-test

This repo tests the nanosecond precision of [`process.hrtime()`](https://nodejs.org/api/process.html#process_process_hrtime_time) inside of an infinite while loop. <br>
There is a noticeable delta (~0.2 ms) per loop caused by calculations and logging to the console. <br>
The delay depends on your CPU speed, the example below was done on a Ryzen 9 3900X. <br>

# Example

<img src="https://i.imgur.com/A9Dw03t.gif" alt="Example" width="400" style="border-radius: 5px"/><br>

# Usage

Make sure you have [node.js](https://nodejs.org/en/) installed on your system <br>
Clone the repository and run this command inside the project folder <br>

```bash
npm start
```
