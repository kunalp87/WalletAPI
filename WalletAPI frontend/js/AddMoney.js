const form = document.querySelector("#form");
const anc = document.querySelector("#anc");
const inputBox = document.querySelector("#input");
const btn = document.querySelector("#btn");
const heading=document.querySelector("#heading")
let URL = "http://localhost:8081/addBalance"
let token = localStorage.getItem("Token");
console.log(token);

anc.addEventListener("click", () => {
    window.location.href = "/html/profile.html"
    //  let URL="http://localhost:8081/profile"

})
const checkBalance = async () => {
    try {
        const URL = "http://localhost:8081/checkBalance";
        let token = localStorage.getItem("Token");
        console.log(token);
        let response = await fetch(URL,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },

                method: "GET"
            }
        )
        let data = await response.json();
        console.log(data);

        if (response.ok) {
            
            console.log(data.message);
            inputBox.value = `Rs.${data.TotalBalance}/-`;


        }
        else if (response.status == 500) {
            alert(data.message)
            console.log(data.message);

        }
        else if (response.status == 501) {
            alert(data.message)
            console.log(data.message);

        }
    }
    catch (error) {
        alert("Tu Chuklas Bhawa")
    }
}
checkBalance();
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        let formData = {
            balance: document.querySelector("#amount").value
        }
        console.log(formData);
        if (formData.balance <= 0) {
            alert("Invalid Amount")
            console.log("Invalid Amount");


        } else {




            let response = await fetch(URL,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    },
                    body: JSON.stringify(formData),
                    method: "POST"
                }
            )
            let data = await response.json();
            console.log(data);
            
            if (response.ok) {
                alert(data.message)
                console.log(data.message);
                inputBox.value =  `Rs.${data.TotalBalance}/-`
            }
            else if (response.status == 500) {
                alert(data.message)
                console.log(data.message);

            }
            else if (response.status == 501) {
                alert(data.message)
                console.log(data.message);

            }

        }

    }
    catch (error) {
        alert("Tu chuklas bhawa")
    }
})
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