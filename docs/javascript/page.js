window.onload =hello();//啟動加載
function hello() {
    console.log("中文")
    setTimeout(hello_time);
}
function time() {
    var d = new Date();
    console.log(d.getHours())
}
function hello_time() {
    var d = new Date();
    console.log("現在時間"+d.getHours())

}