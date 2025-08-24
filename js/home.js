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
    let addAmount = parseInt(document.getElementById('add-amount').value);
    if(addAmount<=0){
        alert("Invalid Amount ")
        return
    }
    let availableBlance = parseInt(document.getElementById("available-blance").innerText);
    totalAmaount = addAmount + availableBlance;

    let agentNumber = parseInt(document.getElementById("account-number").value);
    let userPin = parseInt(document.getElementById("add-money-pin").value);
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
    document.getElementById("available-blance").innerText = totalAmaount;

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
    let withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    if(withdrawAmount <=0){
        alert('Invalid Amount')
        return
    }
    let availableBlance = parseInt(document.getElementById("available-blance").innerText);
    if(availableBlance <= 0 || withdrawAmount > availableBlance){
        alert("Yout Dont Have Enogh Money to Withdraw")
        return
    }
    totalAmaount = availableBlance - withdrawAmount ;

    let agentNumber = parseInt(document.getElementById("agent-number").value);
    let userPin = parseInt(document.getElementById("withdraw-money-pin").value);
    if(agentNumber !== bankAccountNumber){
        alert("Invalid Account Number");
        return
    }
    if(userPin !==accountPin){
        alert('Invalid Pin');
        return
    }
    document.getElementById("available-blance").innerText = totalAmaount;

    // reset all value
    document.getElementById("withdraw-money-pin").value = ''
    document.getElementById("agent-number").value = ''
    document.getElementById('withdraw-amount').value = ''
    alert(`${withdrawAmount}tk Cashout successfuly`);
  
})