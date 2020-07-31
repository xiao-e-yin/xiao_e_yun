function setting_user_name() {//更改你的名稱
    var user_name = $("#setting_user_name").val()
    console.log("已更改名稱為 " + user_name)
    setCookie("UserName", user_name)
    setting_success("setting_user_success")
};
function setting_success(success) {
    var name = "#" + success
    $(name).toggleClass("success_opacity")
    setTimeout(function () {
        $(name).toggleClass("success_opacity")
    }, 1000,name)
}