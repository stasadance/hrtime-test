const secondsToNano = 1e9;
const secondsToMilli = 1e3;

function getTime() {
    const [seconds, nanoSeconds] = process.hrtime();
    return seconds + nanoSeconds / secondsToNano;
}

function logUpdate(...lines) {
    for (let index in lines) {
        process.stdout.cursorTo(0);
        process.stdout.write(lines[index]);
    }
    process.stdout.moveCursor(0, -lines.length);
}

async function loop() {
    let loops = 0;
    let lastTime = getTime();
    while (true) {
        const currentTime = getTime();
        const delta = currentTime - lastTime;
        lastTime = currentTime;
        loops++;

        logUpdate(
            `loops: ${loops}\n`,
            `hrtime: ${lastTime}\n`,
            `delta seconds: ${delta}\n`,
            `delta milliseconds: ${delta * secondsToMilli}\n`,
            `delta nanoseconds: ${delta * secondsToNano}\n`
        );
    }
}

if (require.main === module) {
    loop();
}
