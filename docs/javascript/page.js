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
    if (document.getElementById("imgur_page").style.display == "block") {
        document.getElementById("imgur_page").style.opacity = "0";
        setTimeout(imgur0, 300)
    }
    if (document.getElementById("github_page").style.display == "block") {
        document.getElementById("github_page").style.opacity = "0";
        setTimeout(github0, 300)
    }
    if (document.getElementById("youtube_page").style.display == "block") {
        document.getElementById("youtube_page").style.opacity = "0";
        setTimeout(youtube0, 300)
    }
    if (document.getElementById("twitch_page").style.display == "block") {
        document.getElementById("twitch_page").style.opacity = "0";
        setTimeout(twitch0, 300)
    }
    if (document.getElementById("discord_page").style.display == "block") {
        document.getElementById("discord_page").style.opacity = "0";
        setTimeout(discord0, 300)
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
    setTimeout(steam1, 100)
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
function discord() {//discord
    var display = document.getElementById("discord_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(discord_page)
    }
    console.log("discord before " + display)
}
function discord_page() { //discord����
    document.getElementById("discord_page").style.display = "block";
    setTimeout(discord1, 100)
    console.log("open discord")
}
function discord1() {//discord�}��
    document.getElementById("discord_page").style.opacity = "1";
    console.log("discord page on")
}
function discord0() {//discord����
    document.getElementById("discord_page").style.display = "none";
    console.log("discord page off")
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
    setTimeout(twitter1, 100)
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
function imgur() {//imgur
    var display = document.getElementById("imgur_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(imgur_page)
    }
    console.log("imgur before " + display)
}
function imgur_page() { //imgur����
    document.getElementById("imgur_page").style.display = "block";
    setTimeout(imgur1, 100)
    console.log("open imgur")
}
function imgur1() {//imgur�}��
    document.getElementById("imgur_page").style.opacity = "1";
    console.log("imgur page on")
}
function imgur0() {//imgur����
    document.getElementById("imgur_page").style.display = "none";
    console.log("imgur page off")
}
function github() {//github
    var display = document.getElementById("github_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(github_page)
    }
    console.log("github before " + display)
}
function github_page() { //github����
    document.getElementById("github_page").style.display = "block";
    setTimeout(github1, 100)
    console.log("open github")
}
function github1() {//github�}��
    document.getElementById("github_page").style.opacity = "1";
    console.log("github page on")
}
function github0() {//github����
    document.getElementById("github_page").style.display = "none";
    console.log("github page off")
}
function youtube() {//youtube
    var display = document.getElementById("youtube_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(youtube_page)
    }
    console.log("youtube before " + display)
}
function youtube_page() { //youtube����
    document.getElementById("youtube_page").style.display = "block";
    setTimeout(youtube1, 100)
    console.log("open youtube")
}
function youtube1() {//youtube�}��
    document.getElementById("youtube_page").style.opacity = "1";
    console.log("youtube page on")
}
function youtube0() {//youtube����
    document.getElementById("youtube_page").style.display = "none";
    console.log("youtube page off")
}
function twitch() {//twitch
    var display = document.getElementById("twitch_page").style.display
    setTimeout(clean_page)
    if (display == "none") {
        setTimeout(twitch_page)
    }
    console.log("twitch before " + display)
}
function twitch_page() { //twitch����
    document.getElementById("twitch_page").style.display = "block";
    setTimeout(twitch1, 100)
    console.log("open twitch")
}
function twitch1() {//twitch�}��
    document.getElementById("twitch_page").style.opacity = "1";
    console.log("twitch page on")
}
function twitch0() {//twitch����
    document.getElementById("twitch_page").style.display = "none";
    console.log("twitch page off")
}