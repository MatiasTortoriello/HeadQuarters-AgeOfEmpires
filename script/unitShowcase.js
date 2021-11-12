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
            <td>${element.cost[element]}</td>
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
})

$("#stable").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeIn();
    $(".archeryRange").fadeOut();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeOut();
})

$("#siegeWorkshop").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeOut();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeIn();
})

$("#archeryRange").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeIn();
    $(".dock").fadeOut();
    $(".siegeWorkshop").fadeOut();
})

$("#dock").on("click", () => {
    $(".barracks").fadeOut();
    $(".stable").fadeOut();
    $(".archeryRange").fadeOut();
    $(".dock").fadeIn();
    $(".siegeWorkshop").fadeOut();
})