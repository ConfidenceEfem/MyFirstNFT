require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      accounts: [process.env.MY_PRIVATE_KEY],
      url: process.env.MY_POKT_PUBLIC_KEY,
    }
  }
}