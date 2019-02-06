var under;
var num = 0;
window.onload = function(){
    under = document.getElementById('first');
    appendWallInit();
    appendWall();
    createAlice();
}

function createAlice() {
    var div = document.createElement('div');
    div.setAttribute("id", "alice")
    var h = window.innerHeight;
    var w = window.innerWidth;

    div.style.position = "absolute";
    div.style.top = 500 + "px";
    div.style.right = 0 + "px";
    div.style.bottom = 0 + "px";
    div.style.left = 0 + "px";
    div.style.margin = "auto";
    div.style.height = 400 + "px";
    div.style.width = 400 + "px";

    var aliceImg = document.createElement('img');
    aliceImg.setAttribute("id", "aliceImg")
    aliceImg.style.position = "absolute";
    aliceImg.src = "images/alice.png";
    aliceImg.style.height = 400 + "px";
    aliceImg.style.width = 400 + "px";

    //Divにイメージを組み込む
    div.appendChild(aliceImg);
    //Divを組み込む
    first.appendChild(div);
    rect();
};

function rect() {
    $('#aliceImg').animate({
        marginTop: '-=100px'
    }, 1600).animate({
        marginTop: '+=100px'
    }, 1600);
    $('#aliceImg').animate({
        marginTop: '-=60px'
    }, 1600).animate({
        marginTop: '+=60px'
    }, 1600);
    setTimeout('rect()', 3200);
}

function appendWall() {
    //動的にDiv要素を生成する
    var div = document.createElement('div');
    div.setAttribute("id", `${num}`);
    div.style.zIndex = -1
    var h = window.innerHeight;
    var w = window.innerWidth;

    div.style.backgroundColor = "white";
    div.style.position = "absolute";
    div.style.top = h + "px";
    div.style.height = h + "px";
    div.style.right = w/10 + "px";
    div.style.width = w*4/5 + "px";
    var rightImg = document.createElement('img');
    rightImg.style.position = "absolute";
    rightImg.src = "images/wall_right.png";
    rightImg.style.height = h + "px";
    rightImg.style.right = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(rightImg);
    var leftImg = document.createElement('img');
    leftImg.style.position = "absolute";
    leftImg.src = "images/wall_left.png";
    leftImg.style.height = h + "px";
    leftImg.style.left = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(leftImg);
    //Divを組み込む
    first.appendChild(div);
    up();
    num += 1;
    setTimeout('appendWall()',1800);
};

function appendWallInit() {
    var div = document.createElement('div');
    div.setAttribute("id", `-1`);
    div.style.zIndex = -1
    var h = window.innerHeight;
    var w = window.innerWidth;

    div.style.backgroundColor = "white";
    div.style.position = "absolute";
    div.style.top = h - 300 + "px";
    div.style.height = h + "px";
    div.style.right = w/10 + "px";
    div.style.width = w*4/5 + "px";
    var rightImg = document.createElement('img');
    rightImg.style.position = "absolute";
    rightImg.src = "images/wall_right.png";
    rightImg.style.height = h + "px";
    rightImg.style.right = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(rightImg);
    var leftImg = document.createElement('img');
    leftImg.style.position = "absolute";
    leftImg.src = "images/wall_left.png";
    leftImg.style.height = h + "px";
    leftImg.style.left = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(leftImg);
    //Divを組み込む
    first.appendChild(div);
    $(`#-1`).animate({
        "top": "-=" + h*2 + "px"
    }, 6000,"linear").queue(function() {
        this.remove();
    });


    var div = document.createElement('div');
    div.setAttribute("id", `0`);
    div.style.zIndex = -1
    var h = window.innerHeight;
    var w = window.innerWidth;

    div.style.backgroundColor = "white";
    div.style.position = "absolute";
    div.style.top = 0 + "px";
    div.style.height = h + "px";
    div.style.right = w/10 + "px";
    div.style.width = w*4/5 + "px";
    var rightImg = document.createElement('img');
    rightImg.style.position = "absolute";
    rightImg.src = "images/wall_right.png";
    rightImg.style.height = h + "px";
    rightImg.style.right = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(rightImg);
    var leftImg = document.createElement('img');
    leftImg.style.position = "absolute";
    leftImg.src = "images/wall_left.png";
    leftImg.style.height = h + "px";
    leftImg.style.left = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(leftImg);
    //Divを組み込む
    first.appendChild(div);
    $(`#0`).animate({
        "top": "-=" + h*2 + "px"
    }, 6000,"linear").queue(function() {
        this.remove();
    });
}

function up() {
    var divH = window.innerHeight;
    $(`#${num}`).animate({
        "top": "-=" + divH*2 + "px"
    }, 6000,"linear").queue(function() {
        this.remove();
    });
};
