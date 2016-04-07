var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalances() {
  var contract = escrow.deployed();
  var balanceTable = document.getElementById('balances');
  balanceTable.innerHTML = "";
  for (var i = 0; i < web3.eth.accounts.length ; i++) {
    var value = web3.eth.getBalance(web3.eth.accounts[i])/(web3.toWei(1, "ether"));
    var row =  document.createElement("tr");
    var accountData =  document.createElement("td");
    var balanceData =  document.createElement("td");
    accountData.innerHTML = web3.eth.accounts[i];
    balanceData.innerHTML = Math.round(value.valueOf()*1000)/1000;
    row.appendChild(accountData);
    row.appendChild(balanceData);
    balanceTable.appendChild(row);
  }
};

function holdCoin() {
  var contract = escrow.deployed();

  var amount = parseInt(document.getElementById("amount").value)*1000000000000000000;
  var receiver = document.getElementById("receiver").value;
  var signer_1 = document.getElementById("signer_1").value;

  setStatus("Initiating transaction... (please wait)");

  contract.holdCoin(receiver, signer_1, {from: account, value: amount, gas: 1000000}).then(function(response) {
    console.log(response);

    setStatus("Transaction complete!");
    refreshBalances();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function signRelease() {
  var contract = escrow.deployed();

  var fromAccount = document.getElementById("fromAccount").value;
  var holdingNumber = Number(document.getElementById("holdingNumber").value);


  setStatus("Initiating transaction... (please wait)");

  contract.signRelease(holdingNumber, {from: fromAccount, gas: 1000000}).then(function(response) {
    console.log(response);

    setStatus("Transaction complete!");
    refreshBalances();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};



window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshBalances();
  });
}
