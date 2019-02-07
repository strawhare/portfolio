var num = 0;
var isHoleScaling = false;
window.onload = function() {
    no_scroll()
    var url = location.href;
    var parameters = url.split("?");
    var param = parameters[1];
    if (param){
        backedAni();
    }else{
        createHare();
    }
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

function walk() {
    var div = document.createElement('div');
    div.setAttribute("id", `foots`)
    div.style.position = "absolute";
    div.style.left = 0 + "px" ;
    div.style.right = 0 + "px" ;
    div.style.bottom = 0 + "px" ;
    div.style.margin = 'auto';
    div.style.width = 85*1.5 + "px" ;
    div.style.height = 70*1.5 + "px" ;
    var leftfootImg = document.createElement('img');
    leftfootImg.style.position = "absolute";
    leftfootImg.setAttribute("id","leftFootImg")
    leftfootImg.src = "images/leftfoot.png";
    leftfootImg.style.height = 70*1.5 + "px";
    leftfootImg.style.left = 0 + "px";
    //Divにイメージを組み込む
    div.appendChild(leftfootImg);
    var rightfootImg = document.createElement('img');
    rightfootImg.style.position = "absolute";
    rightfootImg.setAttribute("id","rightFootImg")
    rightfootImg.src = "images/rightfoot.png";
    rightfootImg.style.height = 70*1.5 + "px";
    rightfootImg.style.right = 0 + "px";
    rightfootImg.style.bottom = 100 + "px";
    //Divにイメージを組み込む
    div.appendChild(rightfootImg);
    //Divを組み込む
    initial.appendChild(div);
    $("#leftFootImg").hide();
    $("#rightFootImg").hide();
    $("#leftFootImg").fadeIn(700);
    $("#leftFootImg").fadeOut(700)
    setTimeout(function() {
        $("#rightFootImg").fadeIn(700);
        $("#rightFootImg").fadeOut(700)
    },1400);
}

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
    $('#hare').fadeIn(400);
    $('#hare').fadeOut(400);
    var num = 2;

    var mv = function() {
        $('#hare').hide()
        $('#hare').fadeIn(400);
        $('#hare').fadeOut(400);
        document.getElementById('hareImg').src =
        `./images/hare${num}.png`;
        num++;
        if (num > 5) {
            setTimeout(function() {
                walk();
            },1000);
            clearInterval(mvTimer)
            setTimeout(function() {
                document.getElementById('hare').parentNode.removeChild(document.getElementById('hare'));
                var div = document.createElement('div');
                div.style.zIndex = 10
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
            },4000);
        };
    };
    var mvTimer = setInterval(function(){
        mv();
    }, 800);
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
    rect("#alice",3200);
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
        rect("#clock",3200);

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
        rect("#pot", 3200);


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
        transition();
        rect("#trump",3200);
};

function rect(name) {
    first = Math.floor( Math.random() * (100-50) + 50);
    second = Math.floor( Math.random() * (100-50) + 50);
    time = Math.floor( Math.random() * (4000-2000) + 2000);
    $(name).animate({
        marginTop: `-=${first}px`
    }, time/2).animate({
        marginTop: `+=${first}px`
    }, time/2);
    $(name).animate({
        marginTop: `-=${second}px`
    }, time/2).animate({
        marginTop: `+=${second}px`
    }, time/2);
    setTimeout(`rect("${name}")`,time);
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

function transition() {
    document.getElementById('clock').addEventListener("click", function() {
        console.log("a");
        $('.mainClass').css('pointer-events', 'none');
        transitionAni("works.html");
    },false);
    document.getElementById('trump').addEventListener("click", function() {
        console.log("b");
        $('.mainClass').css('pointer-events', 'none');
        transitionAni("about.html");
    },false);
    document.getElementById('pot').addEventListener("click", function() {
        console.log("c");
        $('.mainClass').css('pointer-events', 'none');
        transitionAni("contact.html");
    },false);
}

function transitionAni(url) {
    var div = document.getElementById('transition');
    var h = window.innerHeight;
    var w = window.innerWidth;
    div.style.zIndex = 10;
    div.style.position = "absolute";
    div.style.top = h + "px";
    div.style.right = 0 + "px";
    div.style.left = 0 + "px";
    div.style.height = h*3 + "px";
    div.style.width = w + "px";

    $(`#transition`).animate({
        "top": "-=" + h*3 + "px"
    }, 500,"linear").queue(function() {
        window.location.href = url
    });
}

function backedAni() {
    appendWallInit();
    appendWall();
    createItems();
    createAlice();
    var div = document.getElementById('transition');
    var h = window.innerHeight;
    var w = window.innerWidth;
    div.style.zIndex = 10;
    div.style.position = "absolute";
    div.style.top = -h*2 + "px";
    div.style.right = 0 + "px";
    div.style.left = 0 + "px";
    div.style.height = h*3 + "px";
    div.style.width = w + "px";

    $(`#transition`).animate({
        "top": "+=" + h*3 + "px"
    }, 500,"linear");

}
