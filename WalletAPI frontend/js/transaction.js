const tbody = document.querySelector('#tbody');
const anc=document.querySelector("#anc");
const URL = "http://localhost:8081/transactionHistory";
let btn=document.querySelector("#btn")
let token = localStorage.getItem("Token");
console.log(token);
anc.addEventListener("click",()=>{
    window.location.href="/html/profile.html"
    //  let URL="http://localhost:8081/profile"
    
})

const getdata = async () => {
    try {

        let response = await fetch(URL,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },

                method: "GET"
            }
        );
        let data = await response.json()
        console.log(data);
        let Transactions=data.Transactions;
        console.log(Transactions);
        


        Transactions.forEach(transaction => {
            let { date, senderMobile, receiverMobile, amount, reason, status } = transaction;
            tbody.innerHTML += `<tr>
      
        <td>${date}</td>
        <td>${senderMobile}</td>
        <td>${receiverMobile}</td>
        <td>${amount}</td>
        <td>${reason}</td>
        <td>${status}</td>
      
        </tr>`;
        });

    }
    catch(error){
        alert("Tu  chuklas bhawa");
    }
}
getdata();
btn.addEventListener("dblclick",()=>{
    try{
        token= localStorage.removeItem("Token");
        console.log(token);
        window.location.href="/html/log in.html"
        

    }
    catch(error){
        alert("Tu Chuklas Bhawa2")
    }
})

