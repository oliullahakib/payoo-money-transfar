let userPin =1234
document.getElementById('login-btn')
.addEventListener("click",function (e) {
    e.preventDefault();
   let mobileNumber = document.getElementById("mobile-number").value;
   let loginPin =parseInt(document.getElementById("login-pin").value) 
   if(mobileNumber.length!==11 || !mobileNumber.startsWith("01")){
    alert( "Put a Valid Mobile Number")
    return
   }
   if(loginPin !==userPin){
    alert('Pin Is Not Match');
    return
   }
    window.location.href = "./home.html"
    document.getElementById("mobile-number").value = "";
    document.getElementById("login-pin").value = "";
    
    
})
