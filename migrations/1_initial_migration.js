var Migrations = artifacts.require("./Migrations.sol");
var Casino = artifacts.require("./Casino.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Casino);
};
