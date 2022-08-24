const  { ethers } = require("hardhat")

const deployFunction = async () => {
  const myContract = await ethers.getContractFactory("MyContract");
  const deployMyContract = await myContract.deploy();
  await deployMyContract.deployed();

  console.log(deployMyContract.address);
}

deployFunction().then(()=>{
  process.exit(0)
}).catch((error)=>{
  console.log(error),
  process.exit(1)
})