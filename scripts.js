
window.onload = function() {
    createHare();
};

function holeAni() {
    document.getElementById('hole').addEventListener("click", function() {
        no_scroll()
        $('#footprint').fadeOut(1000).queue(function() {
            this.remove();
            return_scroll();
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
    		$('#holeImg').fadeOut(1000).queue(function() {
                $(`#hole`).remove();
                return_scroll();
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
    div.style.top = 200 + "px" ;
    div.style.bottom = 0 + "px" ;
    div.style.margin = 'auto';
    div.style.width = 85 + "px" ;
    div.style.height = 70 + "px" ;
    var footImg = document.createElement('img');
    footImg.src = "images/footprint.png";
    footImg.style.height = 70 + "px";
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
    div.style.width = 128 + "px" ;
    div.style.height = 128 + "px" ;
    var hareImg = document.createElement('img');
    hareImg.setAttribute("id","hareImg")
    hareImg.src = "images/hare1.png";
    hareImg.style.height = 128 + "px";
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
                div.style.width = 128 + "px" ;
                div.style.height = 128 + "px" ;
                var holeImg = document.createElement('img');
                holeImg.setAttribute("id","holeImg")
                holeImg.src = "images/hole.png";
                holeImg.style.height = 128 + "px";
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
