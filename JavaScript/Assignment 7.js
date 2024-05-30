function delayedCallback(callback) {
    setTimeout(callback, 2000);
}

function myCallback() {
    console.log("hi");
}

delayedCallback(myCallback);