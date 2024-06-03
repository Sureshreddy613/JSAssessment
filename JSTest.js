/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// create a variable to hold your NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyecolour, _shirttype, _bling) {
    const nft = {
        "name": _name,
        "eyecolour": _eyecolour,
        "shirttype": _shirttype,
        "bling": _bling
    };
    NFTs.push(nft);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eyecolour: \t" + NFTs[i].eyecolour);
        console.log("Shirt Type: \t" + NFTs[i].shirttype);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Suresh", "black", "hoodie", "silver chain");
mintNFT("Adarsh", "brown", "t-shirt", "gold ring");
mintNFT("Tarun", "blue", "sweater", "bracelet");
mintNFT("Varsha", "green", "blouse", "necklace");
listNFTs();
getTotalSupply();
