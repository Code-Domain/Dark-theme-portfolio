let body = document.querySelector("body");
let crsr = document.querySelector(".custm-crsr");
body.addEventListener("mousemove", function (dets) {
    // console.log(dets)
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable certain key combinations (F12, Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
    }
});

// Detect if DevTools is open (basic check)
setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200 ||
        window.outerHeight - window.innerHeight > 200) {
        document.body.innerHTML = "<h1>Developer Tools Detected!</h1>";
    }
}, 1000);
