var under;
var num = 0;
window.onload = function(){
    under = document.getElementById('first');
    append();
}

    function append() {
            //動的にDiv要素を生成する
		var div = document.createElement('div');
        div.setAttribute("id", `${num}`)
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
        setTimeout('append()',1800);
    };

    function up() {
        var divH = window.innerHeight;
        $(`#${num}`).animate({
            "top": "-=" + divH*2 + "px"
        }, 6000,"linear").queue(function() {
            this.remove();
        });
    };
