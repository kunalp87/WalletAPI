const form=document.querySelector(".form")

form.addEventListener("submit",async function (e) {
    e.preventDefault();
    try{
        let formdata={
            email:document.querySelector("#email").value,
            password:document.querySelector("#pass").value
        }
        console.log(formdata);
        
        let URL="http://localhost:8081/login";
        
        
        let response=await fetch (URL,
            {
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formdata),
                method:"POST"
            }
        )
        let data=await response.json();
        
        
        let token=data.token
        console.log(token);
        
        localStorage.setItem("Token",token)
        console.log(localStorage.Token);
        if(response.ok){
            alert(data.message)
            console.log(data.message);
            window.location.href="/html/home.html"
            
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
        alert("error")
    }
})