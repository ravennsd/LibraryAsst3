
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
        return
    
    }
    
    else {
        let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*.(\.\w{2,3})+$/;
        if(!regex.test(email.value)) {
            alert("Please type a valid email");
            return 
        }

        if (pwd.value !== pwd2.value) {
            alert("Passwords do not match");
            return true;
        }
        if (pwd.value.length < 8) {
            alert("Password needs to be at least 8 characters long");
            return true;
        }
        let regP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
        if (!regP.test(pwd.value)) {
            alert("Password must follow the required format");
            return true;
        }
        if(ph.value=="") {
            // phInfo()
            alert("Success!!")
            return true;
        }
        if(ph.value){
            phValidate()
          
        }

        
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
