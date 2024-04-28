$(".bi.bi-arrow-bar-right.open").click(function(){
    openSide()
});
$(".bi.bi-arrow-bar-left.open.closed").click(function(){
    closeSide()
  });
$(document).keypress(function(e){
    var detectKey = e.key;
    switch (detectKey) {
        case "o":
            openSide()
            break;
        case "c":
            closeSide()
            break;
        default:
            break;
    }
});
function openSide(){
    var sideBar = $(".side-bar");
    var iconText = $("i p");
    var iconStyle = $("aside i");
    var open = $(".bi.bi-arrow-bar-right.open");
    var closed = $(".bi.bi-arrow-bar-left.open.closed");
    sideBar.addClass("opened");
    iconText.addClass("showText");
    open.addClass("closed");
    closed.removeClass("closed");
    iconStyle.addClass("noStyle");
}
function closeSide(){
    var sideBar = $(".side-bar");
    var iconText = $("i p");
    var iconStyle = $("aside i");
    var open = $(".bi.bi-arrow-bar-right.open");
    var closed = $(".bi.bi-arrow-bar-left.open");
    sideBar.removeClass("opened");
    iconText.removeClass("showText");
    closed.addClass("closed");
    open.removeClass("closed");
    iconStyle.removeClass("noStyle");
}