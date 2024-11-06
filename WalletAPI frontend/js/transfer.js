const form=document.querySelector(".form")
const anc=document.querySelector("#anc");
const inputBox=document.querySelector("#input")
let btn=document.querySelector('#btn')
let URL="http://localhost:8081/transferBalance"
let token=localStorage.getItem("Token");
console.log(token);
anc.addEventListener("click",()=>{
    window.location.href="/html/profile.html"
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
form.addEventListener("submit",async function (e) {
    e.preventDefault();
    try{
        let formData={
            mobileno:document.querySelector("#mobile").value,
            amount:document.querySelector("#amount").value,
            reason:document.querySelector("#reason").value
        }
        console.log(formData);
        console.log(formData.amount);
        if(formData.amount<=0){
            alert("Invalid Amount")
            console.log("Invalid Amount");
            inputBox.value =  `Rs.${data.TotalBalance}/-`
            
        }
        else {

            
            
            
            let response=await fetch(URL,
                {
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": token
                    },
                    body:JSON.stringify(formData),
                    method:"POST"
                }
            )
            let data=await response.json();
            console.log(data);
            
            
            if(response.ok){
                alert(data.message)
                console.log(data.message);
                inputBox.value=data.TotalBalance
            }
            else if(response.status==400){
                alert(data.message)
                console.log(data.message);
                
            }
            else if(response.status==401){
                alert(data.message)
                console.log(data.message);
                
            }
            else if(response.status==402){
                alert(data.message)
                console.log(data.message);
                
            }
            else if(response.status==403){
                alert(data.message)
                console.log(data.message);
                
            }
            else if(response.status==500){
                alert(data.message)
                console.log(data.message);
                
            }
            
        }
            
    }   
    catch(error){
        alert("Tu chuklas Bhawa")
    }
})
btn.addEventListener("dblclick",()=>{
    try{
        token= localStorage.removeItem("Token");
        console.log(token);
        window.location.href="/html/log in.html"
        

    }
    catch(error){
        alert("Tu Chuklas Bhawa")
    }
})