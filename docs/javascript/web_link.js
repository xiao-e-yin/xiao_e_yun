function clean_page() {//關閉所有頁面
    var web = ["steam","discord","youtube","twitch","github","twitter","imgur"]
    console.log("clean all link page")
    for (var link = 0; link < web.length; link++) {
        if (document.getElementById(web[link] + "_page").style.display == "block") {
            console.log(web[link] + "_clean")
            document.getElementById(web[link] + "_page").style.opacity = "0";
            setTimeout(web_clean, 300, web[link])
        }
    }
}
function web(app) { //執行
    var display = document.getElementById(app + "_page").style.display;
    console.log(app + "_before_" + display)
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(web_page, 0, app)
    }
}
function web_page(page) { //啟動頁面
    document.getElementById(page+"_page").style.display = "block";
    setTimeout(web_open, 100,page)
    console.log("open_"+page)
}
function web_open(page) {//顯示
    document.getElementById(page+"_page").style.opacity = "1";
    console.log(page+"page_on")
}
function web_clean(page) {//隱藏
    document.getElementById(page+"_page").style.display = "none";
    console.log(page+"_page_off")
}
function copy_link(link) {//discord複製鍵
    console.log(link)
    var copy = document.getElementById(link)
    var tag = link + "_tag"
    console.log(copy)
    window.getSelection().selectAllChildren(copy);
    document.execCommand("copy")
    console.log("discord copy")
    document.getElementById(tag).style.display = "block"
    document.getElementById(link).style.opacity = "0"
    document.getElementById(link).disabled = true
    setTimeout(copy_back, 1500, tag, link)
}
function copy_back(tag, link) {//discord複製鍵復原
    document.getElementById(tag).style.display = "none"
    document.getElementById(link).style.opacity = "1"
    document.getElementById(link).disabled = false
}