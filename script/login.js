function validate() {
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (username="user" && (password = "pass"))
    {
        window.location.href = "pages/AoE2_Main.html";
    } else {
        alert ("Nope!");
    }
}