// const anc=document.querySelector("#anc");
let name=document.querySelector("#name");
let balance=document.querySelector("#Balance");
let email=document.querySelector("#email");
let logincount=document.querySelector("#count");
let number=document.querySelector("#number");
let lastlogin=document.querySelector("#lastlogin");
let btns=document.querySelector(".btns")

const profile = async () => {
    
    // e.preventDefault();
    try{
        let URL="http://localhost:8081/profile"
        let token=localStorage.getItem("Token")
        console.log(token);
        let response= await fetch(URL,
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
            // window.location.href="/html/profile.html"
            
            console.log(data.message);
            name.value=data.UserData.name;
            balance.value=data.UserData.balance;
            email.value=data.UserData.email;
            logincount.value=data.UserData.logincount
            number.value=data.UserData.mobileno
            lastlogin.value=data.UserData.lastlogin

        }
        else if(response.status==501){
            alert(data.message)
            console.log(data.message);
            
        }
        
    }   
    catch(error){
        alert("Tu Chuklas Bhawa")
        console.log("Tu Chuklas Bhawa");
        
    } 
}

profile()

btns.addEventListener("click",async function (e){
    e.preventDefault();
    try{
        let URL="http://localhost:8081/editprofile";
        let token=localStorage.getItem("Token");
        console.log(token);
        let formData={
            name:name.value,
            email:email.value,
            mobileno:number.value
        }
        console.log(formData);

        let response=await fetch (URL,
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
            window.location.href="/html/home.html"
        }
        else if(response.status==400){
            alert(data.message)
            console.log(data.message);

            
        }
        else if(response.status==501){
            alert(data.message)
            console.log(data.message);
            
            
        }
        
    }
    catch(error){
        alert("Tu Chuklas Bhawa");
        console.log("Tu Chuklas Bhawa");
        
    }
})


