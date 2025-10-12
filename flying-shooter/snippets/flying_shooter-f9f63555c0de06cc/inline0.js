export function url_params() {
        let result = [];
        for (let x of new URLSearchParams(window.location.search).entries()) {
            if (x.length < 2) {
                continue;
            }
            result.push(x[0] + "," + x[1]);
        }
        return result;
    }

    export function go_fullscreen() {
        document.body.querySelector("canvas").requestFullscreen();
    }
    