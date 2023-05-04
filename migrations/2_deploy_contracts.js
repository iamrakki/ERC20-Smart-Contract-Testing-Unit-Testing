const Binance = artifacts.require('Binance');

module.exports = function (deployer) {
  deployer.deploy(Binance).then(() => {
    console.log('Binance address is: ', Binance.address);
  });
};