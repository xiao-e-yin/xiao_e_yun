function copy_link(link) {
    console.log(link)
    var copy = document.getElementById(link)
    var tag = link + "_tag"
    console.log(copy)
    window.getSelection().selectAllChildren(copy);
    document.execCommand("copy")
    console.log("discord copy")
    document.getElementById(tag).style.display = "block"
    document.getElementById(link).style.opacity = "0"
    document.getElementById(link).disabled =true
    setTimeout(copy_back,1500,tag,link)
}
function copy_back(tag,link) {
    document.getElementById(tag).style.display = "none"
    document.getElementById(link).style.opacity = "1"
    document.getElementById(link).disabled =false
}