window.onload =hello();//啟動加載
function hello() {
    console.log("悪運の家|紀錄器|")
    setTimeout(hello_time);
    setTimeout(new_user);
}
function new_user() {//新使用者cookie
    if ("" == document.cookie) {
        console.log("設置新的使用者")
        setCookie("user_name", "test")
    }
}
function hello_time() {//報時機制
    var user_name = getCookie("user_name");
    var day = new Date();
    var time = day.getHours();
    console.log(user_name + "現在時間" + time + "點")
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
        console.log(user_name + "凌晨 1-5")
    }
    if (time >= 6) {
        if (time <= 10) {
            document.getElementById("hello_hours").innerHTML = user_name + "早上好阿 " + hours_time
            console.log(user_name + "早上 6-10")
        }
    }
    if (time >= 11) {
        if (time <= 18) {
            document.getElementById("hello_hours").innerHTML = user_name + "午安阿 " + hours_time
            console.log(user_name + "中午 11-18")
        }
    }
     if (time >= 19) {
        if (time <= 22) {
            document.getElementById("hello_hours").innerHTML = user_name + "晚上好阿 " + hours_time
            console.log(user_name + "中午 19-22")
        }
    }
    else if (time >= 23) {
        document.getElementById("hello_hours").innerHTML = user_name + "快點睡了 " + hours_time
        console.log("晚上 21-24")
    }
}
