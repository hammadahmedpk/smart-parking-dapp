var VendingMachine = artifacts.require("./Parking.sol");

module.exports = function(deployer){
    deployer.deploy(VendingMachine);
}