function clean_page() {//�����Ҧ�����
    console.log("clean all link page")
    if (document.getElementById("steam_page").style.display == "block") {
        document.getElementById("steam_page").style.opacity = "0";
        setTimeout(steam0, 300)
    }
    if (document.getElementById("twitter_page").style.display == "block") {
        document.getElementById("twitter_page").style.opacity = "0";
        setTimeout(twitter0, 300)
    }
}

function steam() { //steam
    var display = document.getElementById("steam_page").style.display
    setTimeout(clean_page)
    if(display == "none"){
        setTimeout(steam_page)
    }
    console.log("steam before "+ display)
}
function steam_page() { //steam����
    document.getElementById("steam_page").style.display = "block";
    setTimeout(steam1, 50)
    console.log("open steam")
}
function steam1() {//steam�}��
    document.getElementById("steam_page").style.opacity = "1";
    console.log("steam page on")
}
function steam0() {//steame����
    document.getElementById("steam_page").style.display = "none";
    console.log("steam page off")
}

function twitter() {//twitter
    var display = document.getElementById("twitter_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(twitter_page)
    }
    console.log("twitter before " + display)
}
function twitter_page() { //twitter����
    document.getElementById("twitter_page").style.display = "block";
    setTimeout(twitter1, 50)
    console.log("open twitter")
}
function twitter1() {//twitter�}��
    document.getElementById("twitter_page").style.opacity = "1";
    console.log("twitter page on")
}
function twitter0() {//twitter����
    document.getElementById("twitter_page").style.display = "none";
    console.log("twitter page off")
}