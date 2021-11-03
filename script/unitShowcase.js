const url = "/json/AoE2_Units.json"

$.get(url, (data, state) => {
    if (state == "success") {
        data.forEach(element => {
            $("#unitTable").append(
                `
            <tr class="${element.created_in}">
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.age}</td>
            <td>${element.cost}</td>
            </tr>

            `
            );
            
        });
    }
})

$("#barracks").on("click", () => {
    $(".barracks").fadeIn();
    $(".stable").fadeOut();
    $(".archeryRange").fadeOut();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeOut();
    $(".castle").fadeOut();
    $(".Gaia").fadeOut();
    $(".market").fadeOut();
    $(".monastery").fadeOut();
})

$("#stable").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeIn();
    $(".archeryRange").fadeOut();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeOut();
    $(".castle").fadeOut();
    $(".Gaia").fadeOut();
    $(".market").fadeOut();
    $(".monastery").fadeOut();
})

$("#siegeWorkshop").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeOut();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeIn();
    $(".castle").fadeOut();
    $(".Gaia").fadeOut();
    $(".market").fadeOut();
    $(".monastery").fadeOut();
})

$("#archeryRange").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeIn();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeOut();
    $(".castle").fadeOut();
    $(".Gaia").fadeOut();
    $(".market").fadeOut();
    $(".monastery").fadeOut();
})

$("#dock").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeOut();
    $(".dock").fadeIn();
    $(".siegeWorkshop").fadeOut();
    $(".castle").fadeOut();
    $(".Gaia").fadeOut();
    $(".market").fadeOut();
    $(".monastery").fadeOut();
})