function steam_page() { //steam­¶­±
    var steam_display = document.getElementById("steam_page").style.display
 if(steam_display == "block"){
     document.getElementById("steam_page").style.opacity = "0";
     setTimeout(steam0,300)     
 }else{
document.getElementById("steam_page").style.display = "block";
     setTimeout(steam1, 5)
 }
}
function steam1() {//steam¶}±Ò
    document.getElementById("steam_page").style.opacity = "1";
}
function steam0() {//steameÃö³¬
    document.getElementById("steam_page").style.display = "none";
}

function twitter_page() {//

}
