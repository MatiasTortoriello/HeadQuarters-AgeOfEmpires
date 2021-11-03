/*let showcaseTownCenter = document.getElementById('townCenter')

showcaseTownCenter.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target
})
*/

/*let barracks = document.querySelector('#barracks')
let archeryRange = document.querySelector('#archeryRange')
let stable = document.querySelector('#stable')
let dock = document.querySelector('#dock')
let siegeWorkshop = document.querySelector('#siegeWorkshop')*/

const url = "/json/AoE2_Units.json"

$.get(url, (data, state) => {
    if (state == "success") {
        data.forEach(element => {
            $("#unitTable").append(
                `
            <tr>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.description}</td>
            </tr>

            `
            );
            
        });
    }
})

