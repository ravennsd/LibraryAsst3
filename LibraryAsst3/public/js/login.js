
  const form=document.querySelector("#formId");

  // form.addEventListener("submit", validate);
  // form.addEventListener("submit", success);

 var email= document.getElementById("email");
 let pwd= document.getElementById("pwd");


 function validate()
 {

   if(email.value==""||pwd.value==""){

     alert("Fields cannot be empty");
    
   } 
   
  

   else {
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\.\w{2,3})+$/;
    if(regex.test(email.value)) {

      alert("Welcome");
  
     }
     else {
       alert("Please type a valid email");
     }

    
   }
 }

