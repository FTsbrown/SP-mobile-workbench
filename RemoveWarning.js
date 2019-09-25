'use strict';

var timeoutId = 0;

window.addEventListener('resize', function() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function() {
        console.log("Resize");
        const layers = document.getElementsByClassName("ms-Layer--fixed");
        while (layers.length > 0) {
            layers[0].parentNode.removeChild(layers[0]);
        }
        console.log(layers);
    }, 100);
}, false);