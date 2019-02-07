window.onload = function() {
    console.log("hello1");
    transitionAni();
};

function transitionAni() {
    console.log("hello");
    var div = document.getElementById('moved');
    var h = window.innerHeight;
    var w = window.innerWidth;
    div.style.zIndex = 10;
    div.style.position = "absolute";
    div.style.top = 0 + "px";
    div.style.right = 0 + "px";
    div.style.left = 0 + "px";
    div.style.height = h*3 + "px";
    div.style.width = w + "px";

    $(`#moved`).animate({
        "top": "-=" + h*3 + "px"
    }, 500,"linear");
}
