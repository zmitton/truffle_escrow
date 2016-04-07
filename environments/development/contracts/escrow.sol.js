"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var escrow = (function (_Pudding) {
    _inherits(escrow, _Pudding);

    function escrow() {
      _classCallCheck(this, escrow);

      _get(Object.getPrototypeOf(escrow.prototype), "constructor", this).apply(this, arguments);
    }

    return escrow;
  })(Pudding);

  ;

  // Set up specific data for this class.
  escrow.abi = [{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "thirdPartySigner", "type": "address" }], "name": "holdCoin", "outputs": [{ "name": "id", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numHoldings", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "holdingID", "type": "uint256" }], "name": "signRelease", "outputs": [{ "name": "released", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "holdings", "outputs": [{ "name": "amount", "type": "uint256" }, { "name": "receiver", "type": "address" }, { "name": "thirdPartySigner", "type": "address" }, { "name": "unSpent", "type": "bool" }], "type": "function" }];
  escrow.binary = "6060604052610222806100126000396000f3606060405260e060020a600035046341c0e1b581146100475780637d619d9b146100865780638b69450d14610122578063a66f7ad61461012b578063af503309146101cc575b005b61004533600160a060020a03167382ab1649f370ccf9f2a5006130c4fca28db2587e1415610220577382ab1649f370ccf9f2a5006130c4fca28db2587eff5b60018054810180825560e06040908152346060819052600435608081905260243560a081905260c08690526000948552602085905292909320908155808401805473ffffffffffffffffffffffffffffffffffffffff19908116909417905560020180549092161774ff0000000000000000000000000000000000000000191660a060020a179055545b60408051918252519081900360200190f35b61011060015481565b61011060043560008181526020819052604081206002015433600160a060020a03908116911614156101c457604081206002015460a060020a900460ff16600114156101c457604081208054600190910154600160a060020a0316908290606082818181858883f1505060409091208484526020849052600201805474ff00000000000000000000000000000000000000001916905550505b506001919050565b600060208190526004358152604090208054600182015460029092015461020a92600160a060020a03908116919081169060a060020a900460ff1684565b6060938452608092835260a09190915260c05290f35b56";

  if ("0xa85ca955b27dd80cb428a26efe842897694c311d" != "") {
    escrow.address = "0xa85ca955b27dd80cb428a26efe842897694c311d";

    // Backward compatibility; Deprecated.
    escrow.deployed_address = "0xa85ca955b27dd80cb428a26efe842897694c311d";
  }

  escrow.generated_with = "1.0.3";
  escrow.contract_name = "escrow";

  return escrow;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.escrow = factory;
}