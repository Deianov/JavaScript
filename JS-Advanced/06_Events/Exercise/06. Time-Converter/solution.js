function attachEventsListeners() {
    const from = {
        days: (d) => d * 86400,
        hours: (h) => h * 3600,
        minutes: (m) => m * 60,
        seconds: (s) => s
    };
    const to = {
        days: (s) => s / 86400,
        hours: (s) => s / 3600,
        minutes: (s) => s / 60,
        seconds: (s) => s
    };
    Array.from(document.body.getElementsByTagName('div')).forEach(div => {
        div.lastElementChild.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const seconds = from[input.id](Number(input.value));
            for (const key of Object.keys(from)) {
                document.getElementById(key).value = to[key](seconds);
            }
        })
    });
}