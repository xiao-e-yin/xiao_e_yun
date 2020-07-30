window.onload =hello();//啟動加載
function hello() {
    console.log("悪運の家|紀錄器|")
    setTimeout(hello_time);
    setTimeout(new_user);
}
function new_user() {//新使用者cookie
    
}
function hello_time() {//報時機制
    var cookie = getCookie(user_name);
    var day = new Date();
    var time = day.getHours();
    console.log(cookie + "現在時間" + time + "點")
    var user_name = cookie[0]
    if (user_name = "undefined") {
        user_name ="陌生人"
    }

    if (time > 12) {//判定早中晚
        var pm_time = time - 12
        var hours_time = "下午" + pm_time + "點了惹"
    }
    else if (time < 11) {
        var hours_time = "早上" + time + "點了喔"
    }
    else {
        var hours_time = "中午" + time + "點了呀"
    }

     if (time <= 5) {//自動回話
        document.getElementById("hello_hours").innerHTML = user_name + "還沒睡麻 " + hours_time
        console.log(cookie + "凌晨 1-5")
    }
    if (time >= 6) {
        if (time <= 10) {
            document.getElementById("hello_hours").innerHTML = user_name + "早上好阿 " + hours_time
            console.log(cookie + "早上 6-10")
        }
    }
    if (time >= 11) {
        if (time <= 18) {
            document.getElementById("hello_hours").innerHTML = user_name + "午安阿 " + hours_time
            console.log(cookie + "中午 11-18")
        }
    }
     if (time >= 19) {
        if (time <= 22) {
            document.getElementById("hello_hours").innerHTML = user_name + "晚上好阿 " + hours_time
            console.log(cookie + "中午 19-22")
        }
    }
    else if (time >= 23) {
        document.getElementById("hello_hours").innerHTML = user_name + "快點睡了 " + hours_time
        console.log("晚上 21-24")
    }
}
