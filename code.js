$(".bi.bi-arrow-bar-right.open").click(function(){
    openSide()
    $(".side-bar.slideLeft i").mouseover(function(){
    })
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
var menu = document.querySelector(".option-menu");
document.addEventListener("contextmenu",function(e){
    var positionY = e.clientY; 
    var positionX = e.clientX;
    e.preventDefault();
    menu.style.display= "block";
    menu.style.top = positionY + "px";
    menu.style.left = positionX + "px";
});
document.addEventListener("click",function(){
    menu.style.display= "none";
});
var button = document.querySelector(".bi.bi-images");
var thing = document.querySelector(".upload-picture");
var file = document.querySelector(".files");
var uploadButton = document.querySelector(".bi.bi-cloud-arrow-up");
button.addEventListener("click",function(){
    thing.classList.toggle("hide");
});
document.addEventListener("click", e=>{
    if(!thing.contains(e.target) && e.target!== button){
        thing.classList.add("hide");
    }
})
uploadButton.addEventListener("click",function(){
    file.click();
})
