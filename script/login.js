function validate() {
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (username="user" && (password = "pass"))
    {
        window.location.href = "pages/aoe2_main.html";
    } else {
        alert ("Nope!");
    }
}