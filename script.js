       const input_things=document.querySelector("#things")
       const input_price=document.querySelector("#price")
       const buttons=document.querySelector("#buttn")
       const display=document.querySelector("#result")
      
       let total_amt_ex =0
       buttons.addEventListener("click",()=>{
        const price = Number(input_price.value);
        total_amt_ex +=price

        const entry=document.createElement('div')
        entry.innerHTML=`<p>${input_things.value}</p><h2>${price}<button>cancel</button>`

        let total_amt=document.querySelector("#total")
        total_amt.innerHTML=`<h3>Total:${(total_amt_ex) }<h3>`
        

        const cancelbtn=entry.querySelector('button')
        cancelbtn.addEventListener("click",()=>{
            total_amt_ex -=price
            total_amt.innerHTML=`<h3>Total:${total_amt_ex}</h3>`
             
            entry.remove()


        })


        display.appendChild(entry);

        
       input_things.value=""
       input_price.value=""
       })
