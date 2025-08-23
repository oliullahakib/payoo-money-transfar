let bankAccountNumber = 12345678901;
let accountPin=1234;
// logout section 
document.getElementById('logout-btn').addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = "./index.html"
})
// add Money section 
document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let addAmount = parseInt(document.getElementById('add-amount').value);
    let availableBlance = parseInt(document.getElementById("available-blance").innerText);
    totalAmaount = addAmount + availableBlance;

    let userAccountNumber = parseInt(document.getElementById("account-number").value);
    let userPin = parseInt(document.getElementById("add-money-pin").value);
    if(userAccountNumber !== bankAccountNumber){
        alert("Invalid Account Number");
        return
    }
    if(userPin !==accountPin){
        alert('Invalid Pin');
        return
    }
    let bank = document.getElementById('bank').value;
   
   if(bank === 'Seclect Bank'){
    alert("Seclect a Bank To Add Money");
    return
   };
    document.getElementById("available-blance").innerText = totalAmaount;

    // reset all value
    document.getElementById("add-money-pin").value = ''
    document.getElementById("account-number").value = ''
    document.getElementById('add-amount').value = ''
    alert(`${addAmount}tk is added successfuly`);
  
})