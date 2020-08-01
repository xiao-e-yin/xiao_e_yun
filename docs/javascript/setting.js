window.onload = function () {
    mode()
}
function setting_user_name() {//更改你的名稱
    var user_name = $("#setting_user_name").val()
    console.log("已更改名稱為 " + user_name)
    setCookie("UserName", user_name)
    setting_success("setting_user_success")
};
function setting_success(success) {//已更改通知
    var name = "#" + success
    $(name).toggleClass("success_opacity")
    setTimeout(function () {
        $(name).toggleClass("success_opacity")
    }, 1000,name)
}
$("#setting_mode").click(function setting_mode() {
    var mode = getCookie("Mode")
    console.log("切換模式")
    setting_success("setting_mode_success")
    if (mode == "normal") {
        setCookie("Mode", "home")
        $("#setting_mode").val("首頁模式")
        $("#setting_mode").toggleClass("setting_normal")
        $("#setting_mode").toggleClass("setting_home")
    } else {
        setCookie("Mode", "normal")
        $("#setting_mode").val("正常模式")
        $("#setting_mode").toggleClass("setting_normal")
        $("#setting_mode").toggleClass("setting_home")
    }
});
function mode() {
    var mode = getCookie("Mode")
    if (mode == "home") {
        $("#setting_mode").val("首頁模式")
        $("#setting_mode").removeClass("setting_normal")
        $("#setting_mode").addClass("setting_home")
    } else {
        $("#setting_mode").val("正常模式")
        $("#setting_mode").addClass("setting_normal")
        $("#setting_mode").removeClass("setting_home")
    }
}