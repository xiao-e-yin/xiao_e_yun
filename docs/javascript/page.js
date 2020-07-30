window.onload =hello();//啟動加載
function hello() {
    console.log("中文")
    setTimeout(hello_time);
}
function time() {
    var d = new Date();
    console.log(d.getHours())
    setInterval(time, 100000)
}
function hello_time() {
    var cookie = document.cookie;
    var day = new Date();
    var time = day.getHours();
    console.log(cookie + "現在時間" + time + "點")
    var user_name = cookie[0]
    if (user_name = "undefined") {
        user_name ="陌生人~"
    }
    if (time >= 21) {
        document.getElementById("hello_hours").innerHTML = user_name + " 快點睡了"
        console.log("晚上")
    }
    if (time <= 5) {
        document.getElementById("hello_hours").innerHTML = user_name + " 還沒睡麻"
        console.log(cookie + "凌晨")
    }
    if (time >= 11) {
        if (time <= 20) {
            document.getElementById("hello_hours").innerHTML = user_name + " 午安阿"
            console.log(cookie + "中午")
        }
    }
    if (time >= 6) {
        if (time <= 10) {
            document.getElementById("hello_hours").innerHTML = user_name + " 早上好阿"
            console.log(cookie + "早上")
        }
    }
}
