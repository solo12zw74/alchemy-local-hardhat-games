async function main() {
  const game1 = await hre.ethers.getContractAt("Game1", "0xFD471836031dc5108809D173A067e8486B9047A3");
  const tx1 = await game1.win();
  const receipt1 = await tx1.wait();
  console.log("Receipt #1");
  console.debug(receipt1);

  const game2 = await hre.ethers.getContractAt("Game2", "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc");
  await game2.setX(25);
  await game2.setY(25);
  const tx2 = await game2.win();
  const receipt2 = await tx2.wait();
  console.log("Receipt #2");
  console.debug(receipt2);

  const game3 = await hre.ethers.getContractAt("Game3", "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f");
  const tx3 = await game3.win(45);
  const receipt3 = await tx3.wait();
  console.log("Receipt #3");
  console.debug(receipt3);

  const game4 = await hre.ethers.getContractAt("Game4", "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07");
  const tx4 = await game4.win(56);
  const receipt4 = await tx4.wait();
  console.log("Receipt #4");
  console.debug(receipt4);

  const game5 = await hre.ethers.getContractAt("Game5", "0x162A433068F51e18b7d13932F27e66a3f99E6890");
  await game5. giveMeAllowance(10001);
  await game5.mint(10000);
  const tx5 = await game5.win();
  const receipt5 = await tx5.wait();
  console.log("Receipt #5");
  console.debug(receipt5);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
