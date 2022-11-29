function Stopwatch() {
    let duration = 0;
    let interval;
    this.start = () => {
        if (!interval) {
            interval = setInterval(() => {
                duration += 1;
            }, 1);
        } else {
            throw new Error('Stopwatch has already started.');
        }
    };
    this.stop = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        } else {
            throw new Error('Stopwatch is not started.');
        }
    };
    this.reset = () => {
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: () => {
            return duration;
        },
    });
}
