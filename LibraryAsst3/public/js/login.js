
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
   const form=document.getElementById('form');
form.addEventListener('submit',function(e){
  
  e.preventDefault();
  var password=  document.getElementById("inputPassword").value;
  var email = document.getElementById("inputEmail").value;
 
  const formData={email:email,password:password};
  if(validate()){
  fetch('/signin/',{
    method:'POST',
    headers: {
    'Content-Type': 'application/json; charset=UTF-8'
      },
     body:JSON.stringify(formData)
  })
  .then(
    function(response){
      return response.json();
    }
  )
  .then(
    function(data){
       alert(data.message)
       if(data.redirect){
        window.sessionStorage.setItem('token',data.token);
         window.location.href="/";
       }
    }
  )
  }
})
 }
 return validate();

