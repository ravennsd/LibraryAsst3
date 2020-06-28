
let email = document.getElementById("email");
let name = document.querySelector("#name");
let pwd = document.querySelector("#pwd");
let dob = document.getElementById("date");
let error = document.getElementById("error");
let ph = document.getElementById("phone");
let format = document.getElementById("format");
let gen=document.getElementById("gender");
function validate() {

    if (email.value==""||name.value==""||dob.value==""||pwd.value==""||pwd2.value=="")  
        {
        alert("Required Fields Cannot Be Empty");
        return false;
    
    }
    
    else {
        let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\.\w{2,3})+$/;
        if(!regex.test(email.value)) {
            alert("Please type a valid email");
            return false;
        }

        if (pwd.value !== pwd2.value) {
            alert("Passwords do not match");
            return false;
        }
        if (pwd.value.length < 8) {
            alert("Password needs to be at least 8 characters long");
            return false;
        }
        let regP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
        if (!regP.test(pwd.value)) {
            alert("Password must follow the required format");
            return false;
        }
        if(ph.value=="") {
            // phInfo()
            alert("Success!!")
            return false;
        }
        if(ph.value){
            phValidate()
            
          
        }
        return true; 
        
    }
   
function phValidate() {
  
    let regPh= /^\d{10}?$/;

    if(!regPh.test(ph.value))
        {
            alert("Please enter a valid number")
        }
        else
        {
            alert("Success!!")
        }
        //     return true;

        // }
           
        // else{
        //     alert("please enter a valid phone number");
        //   return false;
        // }
      

    //    else {
    //     alert("please enter a valid phone number");
    //    }
}

}

function phInfo(){

    let info=document.getElementById("phInfo");
    info.innerHTML="Adding a phone number makes your account Verified";
    return true;
}

   // if(ph.value=="") {
    //     phInfo()
    //     return true;
    // }
    // else{
        const form=document.getElementById('formId');
        form.addEventListener('submit',function(e){
          
          e.preventDefault();
          var name=document.getElementById("name").value;;
          var pwd=  document.getElementById("pwd").value;
          var email = document.getElementById("email").value;
          var date = document.getElementById("date").value;
          var ph= document.getElementById("phone").value;
          var gender= document.querySelector("#genderSel").value;
          
          console.log("here");
          
          const formData={
              name:name,
              email:email,
              pwd:pwd,
              date:date,
              ph:ph,
              gender:gender
            };
            console.log(formData);
          if(validate()){
              console.log("here");
          fetch('/signup/',{
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
                 
                 window.location.href="/login";
               }
            }
          )
          }
        })