const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    // console.log("Deploying FundMe contract...");
    const { deploy, log } = deployments;
    const { deploer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const ethUSDPriceFeedAddress = networkConfig[chainId]["ethUSDPriceFeed"];

    const fundMe = await deploy("fundMe", {
        from: deploer,
        args: [
            /*address*/
        ],
        log: true,
    });
};
