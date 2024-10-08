require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.8",
    defaultNetwork: "hardhat",
    networks: {},
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
    },
};
