document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable inspect element
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
        return false;
    }
});

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'i' || e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'u' || e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

/** TO DISABLE SCREEN CAPTURE **/
document.addEventListener("keyup", (e) => {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots disabled!");
    }
});
/** TO DISABLE PRINTS WHIT CTRL+P **/ document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
        alert("This section is not allowed to print or export to PDF");
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});