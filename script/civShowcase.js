$("#allCivs").on("click", () => {
    $(".Europe").fadeIn();
    $(".Asia").fadeIn();
    $(".Africa").fadeIn();
    $(".America").fadeIn();
})

$("#europe").on("click", () => {
    $(".Europe").fadeIn();
    $(".Asia").fadeOut();
    $(".Africa").fadeOut();
    $(".America").fadeOut();
})

$("#asia").on("click", () => {
    $(".Asia").fadeIn();
    $(".Europe").fadeOut();
    $(".Africa").fadeOut();
    $(".America").fadeOut();
})

$("#america").on("click", () => {
    $(".America").fadeIn();
    $(".Europe").fadeOut();
    $(".Africa").fadeOut();
    $(".Asia").fadeOut();
})

$("#africa").on("click", () => {
    $(".Africa").fadeIn();
    $(".Europe").fadeOut();
    $(".America").fadeOut();
    $(".Asia").fadeOut();
})

