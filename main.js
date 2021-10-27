 let body = document.querySelector("body");
 let lightButton = document.querySelector("#light-button");
 let darkButton = document.querySelector("#dark-button");

 lightButton.addEventListener("click",()=>{
  body.style.backgroundColor="#e7ccdb";
  body.style.color="#735d78";
  });

  darkButton.addEventListener("click",()=>{
    body.style.backgroundColor="#735d78";
    body.style.color="#e7ccdb";
});

let mySubmitButton = document.querySelector("#submit-button");
let myResultDiv = document.querySelector("#result");
let myPara = document.createElement("p");

      mySubmitButton.addEventListener("click",()=>{
        let myInputResult = 0;  
        let checkResult = 0;   
        let myTotal = 0;
        let checkA = document.querySelector("#a7"); 
        let checkB = document.querySelector("#b7");
        let checkC = document.querySelector("#c7"); 
        let checkD = document.querySelector("#d7"); 
        
for(let i = 1; i <= 1; i++) {
  let radioInput = document.querySelectorAll("[type = radio]");
  for(let x = 0; x < radioInput.length; x++) {
    let input = radioInput[x];
  

   if(checkA.checked && checkB.checked && checkD.checked){
     checkResult=0;
   }
   else if(checkC.checked && checkB.checked && checkD.checked){
    checkResult=0;
  }
   else if(checkB.checked && checkD.checked){
    checkResult=1;
  }
  
   
  if (input.value == "correct" && input.checked) {
     myInputResult++;
    }
  }
  myTotal = checkResult + myInputResult;
}   

 if(myTotal>=7.5)           
{ myPara.innerText="Du har "+myTotal +"/10 rätt";
myPara.style.color="#3cdd3c";
 myResultDiv.appendChild(myPara);
}
     else if(myTotal>=5)           
       { myPara.innerText="Du har "+myTotal +"/10 rätt";
       myPara.style.color="orange";
        myResultDiv.appendChild(myPara);
    }
    else if(myTotal<5){
        myPara.innerText="Du har "+myTotal +"/10 rätt";
        myPara.style.color="black";
        myResultDiv.appendChild(myPara);
    }
   
      });

      let refreshButton = document.querySelector("#refresh");

      refreshButton.addEventListener("click", ()=>{
        location.reload();
    })
    