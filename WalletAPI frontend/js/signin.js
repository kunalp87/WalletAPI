const form=document.querySelector("#form");
console.log(form);


form.addEventListener("submit",async function (e) {
    
    e.preventDefault();
    try{
        
        

        const formData={
            name:document.querySelector("#name").value,
            email:document.querySelector("#email").value,
            mobileno:document.querySelector("#number").value,
            password:document.querySelector("#pass").value
        }
        console.log("formData",formData);
        
        let URL="http://localhost:8081/signup"
        
        let response=await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
    
            }
        )
        console.log("response",response);
        
        
        let data = await response.json();

        console.log(data);
        if (response.ok) {
            console.log(data.message);
            alert(data.message);
            window.location.href="log in.html"
        }
        else if(response.status==400){
            alert (data.message)
            console.log(data.message);
            
        }
        else if(response.status==500){
            alert(data.message)
            console.log(data.message);
            
        }
        
    }
    catch(error){
        alert("error msg")
    }
})