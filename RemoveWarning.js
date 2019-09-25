'use strict';

var timeoutId = 0;

window.addEventListener('resize', function() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function() {
        const layers = Array.from(document.getElementsByClassName("ms-Layer--fixed"));
        layers.forEach((layer) => {
            if (layer.innerText.indexOf("Widen your browser window") >= 0) {
                console.log("Removing 'Widen your browser window' popup");
                layer.parentNode.removeChild(layer);
            }
        });
    }, 100);
}, false);