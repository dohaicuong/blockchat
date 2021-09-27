const Counter = artifacts.require("Counter");
const BlockChatRoom = artifacts.require("BlockChatRoom");
const BlockChatMessage = artifacts.require("BlockChatMessage");

module.exports = function (deployer) {
  deployer.deploy(Counter);
  deployer.deploy(BlockChatRoom);
  deployer.deploy(BlockChatMessage);
};
