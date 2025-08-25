// reuseable function
function getInputValueAsNumber(id) {
    return parseInt(document.getElementById(id).value);
}
function getInputValue(id) {
    return document.getElementById(id).value;
}
function getElementValueAsNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}
function setBalance(amount) {
    return document.getElementById("available-blance").innerText = amount;
}

function resetInput(id) {
    return document.getElementById(id).value = ''
}

  function viweSection(id) {
      let sections = document.getElementsByClassName('section');
    for(const section of sections){
        section.style.display = "none"    
    }
    document.getElementById(id).style.display = "block";
 }
let bankAccountNumber = 12345678901;
let accountPin = 1234;
// logout section 
document.getElementById('logout-btn').addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = "./index.html"
})
// add Money section 

// add money button
document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let addAmount = getInputValueAsNumber('add-amount');
    if (addAmount <= 0) {
        alert("Invalid Amount ")
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    totalAmaount = addAmount + availableBlance;

    let agentNumber = getInputValueAsNumber("account-number");
    let userPin = getInputValueAsNumber("add-money-pin");
    if (agentNumber !== bankAccountNumber) {
        alert("Invalid Account Number");
        return
    }
    if (userPin !== accountPin) {
        alert('Invalid Pin');
        return
    }
    let bank = document.getElementById('bank').value;
    console.log(bank);

    if (bank === 'Seclect Bank') {
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

document.getElementById('withdraw-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let withdrawAmount = getInputValueAsNumber('withdraw-amount');
    if (withdrawAmount <= 0) {
        alert('Invalid Amount')
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    if (availableBlance <= 0 || withdrawAmount > availableBlance) {
        alert("Yout Dont Have Enogh Money to Withdraw")
        return
    }
    totalAmaount = availableBlance - withdrawAmount;

    let agentNumber = getInputValueAsNumber("agent-number");
    let userPin = getInputValueAsNumber("withdraw-money-pin");
    if (agentNumber !== bankAccountNumber) {
        alert("Invalid Account Number");
        return
    }
    if (userPin !== accountPin) {
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
// transfer money section 
// document.getElementById("cash-out-card").addEventListener("click",function () {
//     document.getElementById('cash-out-section').style.display = "block";
//     document.getElementById('add-money-section').style.display = "none";

// })
document.getElementById('transfer-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let transferAmount = getInputValueAsNumber('transfer-amount');
    if (transferAmount <= 0) {
        alert('Invalid Amount')
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    if (availableBlance <= 0 || transferAmount > availableBlance) {
        alert("Yout Dont Have Enogh Money to Transfer")
        return
    }
    totalAmaount = availableBlance - transferAmount;

    let userAccontNumber = getInputValueAsNumber("user-account-number");
    let userPin = getInputValueAsNumber("transfer-money-pin");
    if (userAccontNumber !== bankAccountNumber) {
        alert("Invalid Account Number");
        return
    }
    if (userPin !== accountPin) {
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

// pay bill section 


// pay bill button
document.getElementById('pay-bill-btn').addEventListener("click", function (e) {
    e.preventDefault()
    let payAmount = getInputValueAsNumber('pay-amount');
    if (payAmount <= 0) {
        alert("Invalid Amount ")
        return
    }
    let availableBlance = getElementValueAsNumber("available-blance");
    totalAmaount =  availableBlance - payAmount ;

    let billAccountNumber = getInputValueAsNumber("bill-account-number");
    let userPin = getInputValueAsNumber("pay-bill-pin");
    if (billAccountNumber !== bankAccountNumber) {
        alert("Invalid Account Number");
        return
    }
    if (userPin !== accountPin) {
        alert('Invalid Pin');
        return
    }
   let bank = document.getElementById("pay-bank").value;
    if (bank === 'Seclect Bank') {
        alert("Seclect a Bank To Add Money");
        return
    };
    setBalance(totalAmaount);
    // reset all value
    resetInput("pay-bill-pin")
    resetInput("bill-account-number")
    resetInput('pay-amount')
    alert(`${payAmount}tk is pay successfuly`);

})

// get bonus section 
document.getElementById("get-bonus-btn").addEventListener("click", function (e) {
    e.preventDefault()
    let coupon = "akib20";
   let userCoupon = getInputValue("get-bonus-value");
   if(userCoupon !== coupon){
    alert('Invalid Coupon');
    return
   };
   let rendomAmount = Math.floor(Math.random()*100);
   let availableBlance = getElementValueAsNumber("available-blance");
   totalAmaount =  availableBlance + rendomAmount ;
   setBalance(totalAmaount);
   alert(`${rendomAmount}tk bonus added successfuly`)
   resetInput("get-bonus-value")
})

// toggoling section
document.getElementById("add-money-card").addEventListener("click", function (e) {
   viweSection('add-money-section')
});
document.getElementById("cash-out-card").addEventListener("click", function () {
   viweSection('cash-out-section')

});
document.getElementById("transfer-money-card").addEventListener("click", function (e) {
   viweSection('transfer-money-section')
})
document.getElementById("get-bonus-card").addEventListener("click", function (e) {
   viweSection('get-bonus-section')
})
document.getElementById("pay-bill-card").addEventListener("click", function (e) {
   viweSection('pay-bill-section')
})
document.getElementById("pay-bill-card").addEventListener("click", function (e) {
   viweSection('pay-bill-section')
})
document.getElementById("transaction-card").addEventListener("click", function (e) {
   viweSection('transaction-section')
})
