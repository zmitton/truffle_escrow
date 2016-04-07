contract escrow { 
  mapping (uint => Holding) public holdings;
  uint public numHoldings;

  struct Holding {
    uint amount;
    address receiver;
    address thirdPartySigner;
    bool unSpent;
  }

  function holdCoin(address receiver, address thirdPartySigner) returns(uint id) {
    numHoldings++;
    holdings[numHoldings] = Holding(msg.value, receiver, thirdPartySigner, true);
    return numHoldings;
  }

  function signRelease(uint holdingID) returns(bool released) {
    if(holdings[holdingID].thirdPartySigner == msg.sender){
      if(holdings[holdingID].unSpent == true){
        holdings[holdingID].receiver.send(holdings[holdingID].amount);
        holdings[holdingID].unSpent = false;
      }
    }
    return true;
  }
  function kill(){ if (msg.sender == 0x82ab1649f370ccf9f2a5006130c4fca28db2587e)suicide(0x82ab1649f370ccf9f2a5006130c4fca28db2587e);}
}
