const url = "/json/AoE2_Units.json"

$.get(url, (data, state) => {
    if (state == "success") {
        data.forEach(element => {
            $("#unitTable").append(
                `
            <tr class="${element.created_in}">
            <td>
            <h4>${element.name}</h4>
            <img src="/img/AoE2Assets/UnitIcons/${element.name}.png" class="img-fluid" width="100" height="auto">
            
            
            
            </td>
            <td>${element.description}</td>
            <td>
                <p>Hit points: ${element.hit_points}</p>
                <p>Attack: ${element.attack}</p>
                <p>Armor: ${element.armor}</p>
            </td>
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