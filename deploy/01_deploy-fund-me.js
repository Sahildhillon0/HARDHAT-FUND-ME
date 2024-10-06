const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");
const { deploymentchains } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    // console.log("Deploying FundMe contract...");
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    // const ethUSDPriceFeedAddress = networkConfig[chainId]["ethUSDPriceFeed"];
    let ethUSDPriceFeedAddress;

    if (deploymentchains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUSDPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUSDPriceFeedAddress = networkConfig[chainId]["ethUSDPriceFeed"];
    }

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUSDPriceFeedAddress],
        log: true,
    });
    log("---------------------------------");
};

module.exports.tags = ["all", "FundMe"];
