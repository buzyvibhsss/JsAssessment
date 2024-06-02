// create a variable to hold your NFT's
var NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, age, profession, nationality) {
  var NFT = {
    Name: name,
    Age: age,
    Profession: profession,
    Nationality: nationality,
  };
  NFTs.push(NFT);
  console.log("Minted Name: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nNFT ID:\t\t\t" + (i + 1));
    console.log("Name:\t\t\t" + NFTs[i].Name);
    console.log("Age: \t\t\t" + NFTs[i].Age);
    console.log("Profession:\t\t" + NFTs[i].Profession);
    console.log("Nationality:\t" + NFTs[i].Nationality);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal NFTs Minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("Levi", 35, "Writer", "Korean");
mintNFT("Itachi", 21, "Soldier", "Japanese");
mintNFT("Eren", 28, "Singer", "French");
mintNFT("Ino", 16, "Dancer", "American");

listNFTs();
getTotalSupply();
