// reuseable function
function getInputValueAsNumber(id) {
   return parseInt(document.getElementById(id).value);
}
function getElementValueAsNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}
function setBalance(amount) {
    return document.getElementById("available-blance").innerText = amount;
}
let bankAccountNumber = 12345678901;
let accountPin=1234;
// logout section 
document.getElementById('logout-btn').addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = "./index.html"
})
// add Money section 

// add money card 
document.getElementById("add-money-card").addEventListener("click",function () {
    document.getElementById('cash-out-section').style.display = "none";
    document.getElementById('add-money-section').style.display = "block";
})
// add money button
document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let addAmount = getInputValueAsNumber('add-amount');
    if(addAmount<=0){
        alert("Invalid Amount ")
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    totalAmaount = addAmount + availableBlance;

    let agentNumber = getInputValueAsNumber("account-number");
    let userPin = getInputValueAsNumber("add-money-pin");
    if(agentNumber !== bankAccountNumber){
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
    setBalance(totalAmaount);
    // reset all value
    document.getElementById("add-money-pin").value = ''
    document.getElementById("account-number").value = ''
    document.getElementById('add-amount').value = ''
    alert(`${addAmount}tk is added successfuly`);
  
})

// cashout section 
document.getElementById("cash-out-card").addEventListener("click",function () {
    document.getElementById('cash-out-section').style.display = "block";
    document.getElementById('add-money-section').style.display = "none";
    
})
document.getElementById('withdraw-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let withdrawAmount = getInputValueAsNumber('withdraw-amount');
    if(withdrawAmount <=0){
        alert('Invalid Amount')
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    if(availableBlance <= 0 || withdrawAmount > availableBlance){
        alert("Yout Dont Have Enogh Money to Withdraw")
        return
    }
    totalAmaount = availableBlance - withdrawAmount ;

    let agentNumber = getInputValueAsNumber("agent-number");
    let userPin = getInputValueAsNumber("withdraw-money-pin");
    if(agentNumber !== bankAccountNumber){
        alert("Invalid Account Number");
        return
    }
    if(userPin !==accountPin){
        alert('Invalid Pin');
        return
    }
    setBalance(totalAmaount);

    // reset all value
    document.getElementById("withdraw-money-pin").value = ''
    document.getElementById("agent-number").value = ''
    document.getElementById('withdraw-amount').value = ''
    alert(`${withdrawAmount}tk Cashout successfuly`);
  
})
// transfer section 
// document.getElementById("cash-out-card").addEventListener("click",function () {
//     document.getElementById('cash-out-section').style.display = "block";
//     document.getElementById('add-money-section').style.display = "none";
    
// })
document.getElementById('transfer-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let transferAmount = getInputValueAsNumber('transfer-amount');
    if(transferAmount <=0){
        alert('Invalid Amount')
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    if(availableBlance <= 0 || transferAmount > availableBlance){
        alert("Yout Dont Have Enogh Money to Transfer")
        return
    }
    totalAmaount = availableBlance - transferAmount ;

    let userAccontNumber = getInputValueAsNumber("user-account-number");
    let userPin = getInputValueAsNumber("transfer-money-pin");
    if(userAccontNumber !== bankAccountNumber){
        alert("Invalid Account Number");
        return
    }
    if(userPin !== accountPin){
        alert('Invalid Pin');
        return
    }
    setBalance(totalAmaount);

    // reset all value
    document.getElementById("transfer-money-pin").value = ''
    document.getElementById("user-account-number").value = ''
    document.getElementById('transfer-amount').value = ''
    alert(`${transferAmount}tk Transfer successfuly`);
  
})

