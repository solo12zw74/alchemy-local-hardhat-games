// replace the name of the contract with which one you want to deploy!
const contractName = "Game1";

async function main() {
  const Game1 = await hre.ethers.getContractFactory("Game1");
  const game1 = await Game1.deploy();
  console.log(`Game1 deployed to address: ${game1.address}`);

  const Game2 = await hre.ethers.getContractFactory("Game2");
  const game2 = await Game2.deploy();
  console.log(`Game2 deployed to address: ${game2.address}`);

  const Game3 = await hre.ethers.getContractFactory("Game3");
  const game3 = await Game3.deploy();
  console.log(`Game3 deployed to address: ${game3.address}`);

  const Game4 = await hre.ethers.getContractFactory("Game4");
  const game4 = await Game4.deploy();
  console.log(`Game4 deployed to address: ${game4.address}`);

  const Game5 = await hre.ethers.getContractFactory("Game5");
  const game5 = await Game5.deploy();
  console.log(`Game5 deployed to address: ${game5.address}`);

}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });