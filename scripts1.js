var under;
var num = 0;
window.onload = function(){
    // var script = document.createElement('script');
    // script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    // document.getElementsByTagName('head')[0].appendChild(script);
    under = document.getElementById('first');
    append();
}

    function append() {
        setTimeout(function() {
            //動的にDiv要素を生成する
		var div = document.createElement('div');
        div.setAttribute("id", `${num}`)
		div.style.position = "absolute";
        div.style.left = 0 + "px" ;

        var h = window.innerHeight;
        div.style.top = h + "px";
        div.style.height = h + "px";
        var BallImg = document.createElement('img');
		BallImg.src = "images/background.png";
        BallImg.style.height = h + "px";
        //Divにイメージを組み込む
		div.appendChild(BallImg);
		//ゲーム画面にボールレイヤ（Div)を組み込む
		first.appendChild(div);
        up();
        num += 1;
            // under.innerHTML = `<img id=${num} src="images/background.png" alt="background">`;
            // console.log(200*num);
            // $(`#${num}`).css("top", 500*num);
        },1000);
        setTimeout('append()',1000);
    };

    function up() {
        var divH = window.innerHeight;
        $(`#${num}`).animate({
            "top": "-=" + divH*2 + "px"
        }, 3000,"linear").queue(function() {
            this.remove();
        });
    };

// function rect() {
//     $('#subjection').animate({
//
//     }, 2000)
//     num++
//     under.innerHTML = `<img id=${num} src="images/background.png" alt="background">`
//
//     $(num).offset({
//         top: $(first).offset.bottom;
//     });
//
//     setTimeout('rect()', 2100); //アニメーションを繰り返す間隔
// }
