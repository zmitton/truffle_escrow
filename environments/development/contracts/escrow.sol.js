// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"thirdPartySigner","type":"address"}],"name":"holdCoin","outputs":[{"name":"id","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numHoldings","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"holdingID","type":"uint256"}],"name":"signRelease","outputs":[{"name":"released","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"holdings","outputs":[{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"},{"name":"thirdPartySigner","type":"address"},{"name":"unSpent","type":"bool"}],"type":"function"}],
    binary: "6060604052610222806100126000396000f3606060405260e060020a600035046341c0e1b581146100475780637d619d9b146100865780638b69450d14610122578063a66f7ad61461012b578063af503309146101cc575b005b61004533600160a060020a03167382ab1649f370ccf9f2a5006130c4fca28db2587e1415610220577382ab1649f370ccf9f2a5006130c4fca28db2587eff5b60018054810180825560e06040908152346060819052600435608081905260243560a081905260c08690526000948552602085905292909320908155808401805473ffffffffffffffffffffffffffffffffffffffff19908116909417905560020180549092161774ff0000000000000000000000000000000000000000191660a060020a179055545b60408051918252519081900360200190f35b61011060015481565b61011060043560008181526020819052604081206002015433600160a060020a03908116911614156101c457604081206002015460a060020a900460ff16600114156101c457604081208054600190910154600160a060020a0316908290606082818181858883f1505060409091208484526020849052600201805474ff00000000000000000000000000000000000000001916905550505b506001919050565b600060208190526004358152604090208054600182015460029092015461020a92600160a060020a03908116919081169060a060020a900460ff1684565b6060938452608092835260a09190915260c05290f35b56",
    unlinked_binary: "6060604052610222806100126000396000f3606060405260e060020a600035046341c0e1b581146100475780637d619d9b146100865780638b69450d14610122578063a66f7ad61461012b578063af503309146101cc575b005b61004533600160a060020a03167382ab1649f370ccf9f2a5006130c4fca28db2587e1415610220577382ab1649f370ccf9f2a5006130c4fca28db2587eff5b60018054810180825560e06040908152346060819052600435608081905260243560a081905260c08690526000948552602085905292909320908155808401805473ffffffffffffffffffffffffffffffffffffffff19908116909417905560020180549092161774ff0000000000000000000000000000000000000000191660a060020a179055545b60408051918252519081900360200190f35b61011060015481565b61011060043560008181526020819052604081206002015433600160a060020a03908116911614156101c457604081206002015460a060020a900460ff16600114156101c457604081208054600190910154600160a060020a0316908290606082818181858883f1505060409091208484526020849052600201805474ff00000000000000000000000000000000000000001916905550505b506001919050565b600060208190526004358152604090208054600182015460029092015461020a92600160a060020a03908116919081169060a060020a900460ff1684565b6060938452608092835260a09190915260c05290f35b56",
    address: "a85ca955b27dd80cb428a26efe842897694c311d",
    generated_with: "2.0.6",
    contract_name: "escrow"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("escrow error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("escrow error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("escrow error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("escrow error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.escrow = Contract;
  }

})();
