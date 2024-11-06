const form=document.querySelector(".form")
const anc=document.querySelector("#anc");
let inputBox=document.querySelector("#input");
let btn=document.querySelector("#btn");
anc.addEventListener("click",()=>{
    window.location.href="/html/profile.html"
    //  let URL="http://localhost:8081/profile"

})
const URL="http://localhost:8081/checkBalance";
let token=localStorage.getItem("Token");
console.log(token);

form.addEventListener("submit",async function (e) {
    e.preventDefault();
    try{

        let response=await fetch(URL,
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": token
                },
                
                method:"GET"
            }
        )
        let data=await response.json();
        console.log(data);
        
        if(response.ok){
            alert(data.message)
            console.log(data.message);
            inputBox.value=`Rs.${data.TotalBalance}/-`;

            
        }
        else if(response.status==500){
            alert(data.message)
            console.log(data.message);
            
        }
        else if(response.status==501){
            alert(data.message)
            console.log(data.message);
            
        }
    }
    catch(error){
        alert("Tu Chuklas Bhawa")
    }

})

btn.addEventListener("dblclick",()=>{
    try{
        token=localStorage.removeItem("Token");
        console.log(token);
        window.location.href="/html/log in.html"
        
    }
    catch(error){
        alert("Tu Chuklas Bhawa");
    }
})