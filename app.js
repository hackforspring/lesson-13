let starttime = 0;
//要素の取得
let text = document.getElementById('text');
let result = document.getElementById('result');
let comment = document.getElementById('comment');

//最初のメッセージ表示と開始の処理
if (confirm('OKを押して10秒たったら何かしらのキーを押してください。')) {
    start();
};

//スタート関数
function start() {
    //現在時刻の取得、ここで最初のstarttimeに値を入れる
    starttime = new Date().getTime();
    text.innerHTML = '10秒カウントしたら何かキーを押してね！';
    //キーが押されたときの処理
    document.body.onkeydown = stop;
}

//ストップ関数
function stop() {
    //現在時刻の取得
    let crrenttime = new Date().getTime();
    //スタートした時刻からキーが押された時刻を引いて秒数を求める
    let seconds = (crrenttime - starttime) / 1000;
    //結果の表示、時間の正確さによってメッセージの条件分けをする
    if (seconds == 10)  {
        result.innerHTML = seconds + '秒';
        comment.innerHTML = 'excellent!ぴったり！人間時計';
        } else if (9.5 <= seconds && seconds <= 10.5) {
            result.innerHTML = seconds + '秒';
            comment.innerHTML = 'すごい！なかなかの正確さ';
        } else {
            result.innerHTML = seconds + '秒';
            comment.innerHTML = '残念、、、もう一度挑戦してみよう！';
        }
        console.log('ストップ');
};
