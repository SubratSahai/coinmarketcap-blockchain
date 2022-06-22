require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
     rinkeby: {
        url: process.env.SPEEDY_NODES,
        accounts: [process.env.ACCOUNT]
     },
  },
}
