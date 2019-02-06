var num = 0;
var isHoleScaling = false
window.onload = function() {
    createHare();
    no_scroll()
};

function holeAni() {
    document.getElementById('hole').addEventListener("click", function() {
        if (isHoleScaling){return false};
        isHoleScaling = true;
        $('#footprint').fadeOut(1000).queue(function() {
            this.remove();
        });
        $('#holeImg').animate({paddingRight:1},{
    	//2秒かけてアニメーション
    	duration:2000,
    	//stepは、アニメーションが進むたびに呼ばれる
    	step:function(now){
            var now1 = now*2.5-1;
            //三次関数を用いてscaleを変化させる
    		$('#holeImg').css({transform:'scale(' + (((1.4*now1*now1*now1-0.8*now1-0.6)+1.2)*5+1) + ')'});
    	},
    	//終わったら
    	complete:function(){
            appendWallInit();
            appendWall();

            createItems();
            createAlice();
    		$('#holeImg').fadeOut(1000).queue(function() {
                $(`#hole`).remove();
            });

    	}
    })
    },false);
}

//スクロール禁止用関数
function no_scroll(){
//PC用
var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(scroll_event,function(e){e.preventDefault();});
//SP用
$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}

//スクロール復活用関数
function return_scroll(){
//PC用
var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).off(scroll_event);
//SP用
$(document).off('.noScroll');
}


function createFootPrint() {
    var div = document.createElement('div');
    div.setAttribute("id", `footprint`)
    div.style.position = "absolute";
    div.style.left = 0 + "px" ;
    div.style.right = 0 + "px" ;
    div.style.top = 200*1.5 + "px" ;
    div.style.bottom = 0 + "px" ;
    div.style.margin = 'auto';
    div.style.width = 85*1.5 + "px" ;
    div.style.height = 70*1.5 + "px" ;
    var footImg = document.createElement('img');
    footImg.src = "images/footprint.png";
    footImg.style.height = 70*1.5 + "px";
    //Divにイメージを組み込む
    div.appendChild(footImg);
    //Divを組み込む
    initial.appendChild(div);
    $('#footprint').hide()
    $('#footprint').fadeIn(1000);
};

function createHare() {
    var div = document.createElement('div');
    div.setAttribute("id", `hare`)
    div.style.position = "absolute";
    div.style.left = 0 + "px" ;
    div.style.right = 0 + "px" ;
    div.style.top = 0 + "px" ;
    div.style.bottom = 0 + "px" ;
    div.style.margin = 'auto';
    div.style.width = 128*1.5 + "px" ;
    div.style.height = 128*1.5 + "px" ;
    var hareImg = document.createElement('img');
    hareImg.setAttribute("id","hareImg")
    hareImg.src = "images/hare1.png";
    hareImg.style.height = 128*1.5 + "px";
    //Divにイメージを組み込む
    div.appendChild(hareImg);
    //Divを組み込む
    initial.appendChild(div);
    $('#hare').hide()
    $('#hare').fadeIn(500);
    $('#hare').fadeOut(500);
    var num = 2;

    var mv = function() {
        $('#hare').hide()
        $('#hare').fadeIn(500);
        $('#hare').fadeOut(500);
        document.getElementById('hareImg').src =
        `./images/hare${num}.png`;
        num++;
        if (num > 5) {
            clearInterval(mvTimer)
            setTimeout(function() {
                document.getElementById('hare').parentNode.removeChild(document.getElementById('hare'));
                var div = document.createElement('div');
                div.setAttribute("id", `hole`)
                div.style.position = "absolute";
                div.style.left = 0 + "px" ;
                div.style.right = 0 + "px" ;
                div.style.top = 0 + "px" ;
                div.style.bottom = 0 + "px" ;
                div.style.margin = 'auto';
                div.style.width = 128*1.5 + "px" ;
                div.style.height = 128*1.5 + "px" ;
                var holeImg = document.createElement('img');
                holeImg.setAttribute("id","holeImg")
                holeImg.src = "images/hole.png";
                holeImg.style.height = 128*1.5 + "px";
                //Divにイメージを組み込む
                div.appendChild(holeImg);
                //Divを組み込む
                initial.appendChild(div);
                $('#holeImg').hide()
                $('#holeImg').fadeIn(1000);
                createFootPrint();
                holeAni();
            },2000);
        };
    };
    var mvTimer = setInterval(function(){
        mv();
    }, 1000);
};

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
    initial.appendChild(div);
    $('#alice').hide()
    $('#alice').fadeIn(1000);
    rect();
};

function createItems() {
        //clock
        var div = document.createElement('div');
        div.setAttribute("id", "clock")
        var h = window.innerHeight;
        var w = window.innerWidth;

        div.style.position = "absolute";
        div.style.top = 100 + "px";
        div.style.right = 500 + "px";
        div.style.bottom = 0 + "px";
        div.style.left = 0 + "px";
        div.style.margin = "auto";
        div.style.height = 128 + "px";
        div.style.width = 128 + "px";

        var clockImg = document.createElement('img');
        clockImg.setAttribute("id", "clockImg")
        clockImg.style.position = "absolute";
        clockImg.src = "images/clock.png";
        clockImg.style.height = 128 + "px";
        clockImg.style.width = 128 + "px";

        //Divにイメージを組み込む
        div.appendChild(clockImg);
        //Divを組み込む
        initial.appendChild(div);
        $('#clock').hide()
        $('#clock').fadeIn(1000);

        //teapot
        var potdiv = document.createElement('div');
        potdiv.setAttribute("id", "pot")

        potdiv.style.position = "absolute";
        potdiv.style.top = 0 + "px";
        potdiv.style.right = 0 + "px";
        potdiv.style.bottom = 0 + "px";
        potdiv.style.left = 500 + "px";
        potdiv.style.margin = "auto";
        potdiv.style.height = 128 + "px";
        potdiv.style.width = 128 + "px";

        var potImg = document.createElement('img');
        potImg.setAttribute("id", "potImg")
        potImg.style.position = "absolute";
        potImg.src = "images/pot.png";
        potImg.style.height = 128 + "px";
        potImg.style.width = 128 + "px";

        //Divにイメージを組み込む
        potdiv.appendChild(potImg);
        //Divを組み込む
        initial.appendChild(potdiv);
        $('#pot').hide()
        $('#pot').fadeIn(1000);

        //trump
        var trumpdiv = document.createElement('div');
        trumpdiv.setAttribute("id", "trump")

        trumpdiv.style.position = "absolute";
        trumpdiv.style.top = 0 + "px";
        trumpdiv.style.right = 100 + "px";
        trumpdiv.style.bottom = 300 + "px";
        trumpdiv.style.left = 0 + "px";
        trumpdiv.style.margin = "auto";
        trumpdiv.style.height = 128 + "px";
        trumpdiv.style.width = 128 + "px";

        var trumpImg = document.createElement('img');
        trumpImg.setAttribute("id", "trumpImg")
        trumpImg.style.position = "absolute";
        trumpImg.src = "images/trump.png";
        trumpImg.style.height = 128 + "px";
        trumpImg.style.width = 128 + "px";

        //Divにイメージを組み込む
        trumpdiv.appendChild(trumpImg);
        //Divを組み込む
        initial.appendChild(trumpdiv);
        $('#trump').hide()
        $('#trump').fadeIn(1000);
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
    initial.appendChild(div);
    up();
    num += 1;
    setTimeout('appendWall()',1800);
};

function appendWallInit() {
    document.bgColor = "#000";
    var div = document.createElement('div');
    div.setAttribute("id", `-1`);
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
    initial.appendChild(div);
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
    initial.appendChild(div);
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
