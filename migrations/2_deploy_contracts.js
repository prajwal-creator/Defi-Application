const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(DaiToken)
  const daitoken = await DaiToken.deployed()

  await deployer.deploy(DappToken)
  const dapptoken = await DappToken.deployed()

  deployer.deploy(TokenFarm,dapptoken.address,daitoken.address);
  const tokenfarm = await TokenFarm.deployed()

  await dapptoken.transfer(tokenfarm.address,'1000000000000000000000000')

  await daitoken.transfer(accounts[1],'10000000000000000000')

};
