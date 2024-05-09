$(".bi.bi-toggle-off").click(function(){
    onandoff();
    nightmodeOn();
});
$(".bi.bi-toggle-on").click(function(){
    onandoff();
    nightmodeOff();
});
$(".bi.bi-list").click(function(){
    closeOpen();
    $(".side-bar").css("min-width","15rem");
    $(".side-bar").toggleClass("change");
});
$(".bi.bi-x-lg").click(function(){
    closeOpen();
    $(".side-bar").css("min-width","3rem");
    $(".side-bar").toggleClass("change");
});
function closeOpen(){
    $(".opened").toggleClass("hide");
    $(".closed").toggleClass("hide");
}
function onandoff(){
    $(".bi.bi-toggle-off").toggle("hide");
    $(".bi.bi-toggle-on").toggle("hide");
};
function nightmodeOn(){
    $(".side-bar").addClass("side-bar-nightmode");
    $("i").addClass("icon-nightmode");
    $("body").addClass("body-nightmode");
    $(".hero-Section").addClass("hero-nightmode");
    $(".prompt-answers").addClass("prompt-a-nightmode");
    $(".prompt").addClass("prompt-nightmode");
    $(".prompt input").addClass("input-nightmode");
    $(".search-conteiner").addClass("search-conteiner-nightmode");
    $(".hero-Section h3").addClass("hero-Section-nightmode-h3");
    $(".member").addClass("member-night-mode");
}
function nightmodeOff(){
    $(".side-bar").removeClass("side-bar-nightmode");
    $("i").removeClass("icon-nightmode");
    $("body").removeClass("body-nightmode");
    $(".hero-Section").removeClass("hero-nightmode");
    $(".prompt-answers").removeClass("prompt-a-nightmode");
    $(".prompt").removeClass("prompt-nightmode");
    $(".prompt input").removeClass("input-nightmode");
    $(".search-conteiner").removeClass("search-conteiner-nightmode");
    $(".hero-Section h3").removeClass("hero-Section-nightmode-h3");
    $(".member").removeClass("member-night-mode");
};
