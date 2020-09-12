window.onload = hello();//啟動加載
function hello() {
    console.log("悪運の家|紀錄器|")
    new_user()
    mode()
}
function mode() {
    $(".background").css({
        "background-image": "url('https://raw.githubusercontent.com/xiao-e-yun/home/master/docs/images/background.png')"
    })
    setTimeout(function () {
        $(".background").addEventListener("load",function() {
            $(".background").css({
                "opacity": "1"
            })
        })
}, 500);
function new_user() {//新使用者cookie
    if ("" == document.cookie) {
        console.log("設置新的使用者")
        setCookie("UserName", "陌生人")
        setCookie("Mode","normal")
        setTimeout(new_user,500)
    }
    else
        console.log("讀取使用者資料")
    checkCookie();
    HelloTime();
    setInterval(HelloTime,10000)
    Mode()
}
function HelloTime() {//報時機制
    var user_name = getCookie("UserName");
    var day = new Date();
    var time = day.getHours();
    if (time > 12) {//判定早中晚
        var pm_time = time - 12
        if (pm_time >= 11) {
            var hours_time = "晚上" + pm_time + "點了拉"
        }
        else {
            var hours_time = "下午" + pm_time + "點了惹"
        }
    }
    else if (time < 11) {
        if (time <= 5) {
            if (time == 0) {
                var hours_time = "凌晨12點了惹"
            } else
            var hours_time = "凌晨" + time + "點了惹"
        }
        else {
            var hours_time = "早上" + time + "點了喔"
        }
    }
    else {
        var hours_time = "中午" + time + "點了呀"
    }

    if (time <= 5) {//自動回話
        document.getElementById("hello_hours").innerHTML = user_name + "還沒睡麻 " + hours_time
        console.log(user_name + " 凌晨 1-5")
    }
    if (time >= 6) {
        if (time <= 10) {
            document.getElementById("hello_hours").innerHTML = user_name + "早上好阿 " + hours_time
            console.log(user_name + " 早上 6-10")
        }
    }
    if (time >= 11) {
        if (time <= 18) {
            document.getElementById("hello_hours").innerHTML = user_name + "午安阿 " + hours_time
            console.log(user_name + " 中午 11-18")
        }
    }
    if (time >= 19) {
        if (time <= 22) {
            document.getElementById("hello_hours").innerHTML = user_name + "晚上好阿 " + hours_time
            console.log(user_name + " 晚上 19-22")
        }
    }
    if (time >= 23) {
        document.getElementById("hello_hours").innerHTML = user_name + "快點睡了 " + hours_time
        console.log(" 午夜 21-24")
    }
}
function Mode() {
    var Mode = getCookie("Mode");
    if (Mode == "home") {
        console.log("首頁模式")
        $(".left_section").html("<p class=air> </p>");
        $(".left_section").css({ "width": "25vw" });
        $(".right_section").html("<p class=air> </p>");
        $(".right_section").css({ "width": "25vw" });
        $(".about").css({ "display": "none" });
        $(".more").html('<p class="home_setting_touch"><a class="home_setting" type="text/html" href="setting.html">設置</a></p>')
        $(".header").remove()
    }
    else {
        console.log("普通模式")
    }
}
