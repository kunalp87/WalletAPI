const anc = document.querySelector("#anc");
anc.addEventListener("click", () => {
    window.location.href = "/html/profile.html"
    //  let URL="http://localhost:8081/profile"

})
const btn = document.querySelector("#btn");
btn.addEventListener("dblclick", () => {
    try {
        token = localStorage.removeItem("Token");
        console.log(token);
        window.location.href = "/html/log in.html"


    }
    catch (error) {
        alert("Tu Chuklas Bhawa")
    }
})