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
  escrow.abi = [{ "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "int256" }], "name": "holdings", "outputs": [{ "name": "amount", "type": "uint256" }, { "name": "receiver", "type": "address" }, { "name": "unSpent", "type": "bool" }, { "name": "numSigners", "type": "int8" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "thirdPartySigner", "type": "address" }], "name": "holdCoin", "outputs": [{ "name": "id", "type": "int256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numHoldings", "outputs": [{ "name": "", "type": "int256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "holdingID", "type": "int256" }], "name": "signRelease", "outputs": [{ "name": "released", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "totalValue", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  escrow.binary = "60606040526104b1806100126000396000f3606060405236156100565760e060020a600035046341c0e1b581146100585780637cf3a433146100975780637d619d9b146100d65780638b69450d146101f9578063cf8c8ed614610202578063d4c3eea014610300575b005b61005633600160a060020a03167382ab1649f370ccf9f2a5006130c4fca28db2587e14156104af577382ab1649f370ccf9f2a5006130c4fca28db2587eff5b61030960043560006020819052908152604081206001810154905491600160a060020a0382169160a060020a810460ff169160a860020a909104900b84565b600180548101808255600280543490810182556060819052600435608081905260a085905260c0839052600093845260208481526040808620938455928601805473ffffffffffffffffffffffffffffffffffffffff1990811690931774ff00000000000000000000000000000000000000001990811660a060020a1775ff00000000000000000000000000000000000000000019167502000000000000000000000000000000000000000000179091553360e081905261010087905287548752848720888852860183528487208054851690911782169055610160845260243561012081905261014087905287548752868352848720868852909501909152919093208054909316909117169055545b60408051918252519081900360200190f35b6101e760015481565b6101e760043560008080805b6000600050600086815260200190815260200160002060005060010160159054906101000a900460000b60000b831315156103225733600160a060020a031660006000506000878152602001908152602001600020600050600201600050600085815260200190815260200160002060005060000160009054906101000a9004600160a060020a0316600160a060020a031614156102f457600160006000506000878152602001908152602001600020600050600201600050600085815260200190815260200160002060005060000160146101000a81548160ff021916908302179055505b6001929092019161020e565b6101e760025481565b6060938452608092835260a09190915260000b60c05290f35b5060019050805b6040842085855260208590526001015460a860020a9004840b840b81136103a05760006000506000868152602001908152602001600020600050600201600050600082815260200190815260200160002060005060000160149054906101000a900460ff161515610398578391505b600101610329565b81156104a4576000600050600086815260200190815260200160002060005060010160009054906101000a9004600160a060020a0316600160a060020a031660006000600050600088815260200190815260200160002060005060000160005054604051809050600060405180830381858888f1935050505050600060005060008681526020019081526020016000206000506000016000505460026000828282505403925050819055506000600060005060008781526020019081526020016000206000506000016000508190555060006000600050600087815260200190815260200160002060005060010160146101000a81548160ff021916908302179055505b506001949350505050565b56";

  if ("0x0e03e40f684f6eb7cd9f08acd03219c0e92514e2" != "") {
    escrow.address = "0x0e03e40f684f6eb7cd9f08acd03219c0e92514e2";

    // Backward compatibility; Deprecated.
    escrow.deployed_address = "0x0e03e40f684f6eb7cd9f08acd03219c0e92514e2";
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