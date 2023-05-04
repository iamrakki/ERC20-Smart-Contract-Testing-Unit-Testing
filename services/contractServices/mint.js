// const {createTx} = require("../walletServices/create-Transaction")
// const {web3} = require("../web3/web3")
// const Contract_Address =process.env.CONTRACT_ADDRESS;
// const Contract_ABI = require("../../config/contractabi.json")
// const network = process.env.NETWORK
// const Customer1=process.env.CUSTOMER_ADDRESS;

// const mintToken = async (data) => {
//     try{
//     var txObject = {};

//     txObject.to = Contract_Address;
//     txObject.value = "0x";
  
 
//     await erc20MintObject(data, txObject);
        
    

//     const txSerialized = await createTx(txObject, web3, network);
//     web3.eth.sendSignedTransaction(txSerialized)
//     .on("receipt",async (Txreceipt) => {
//         console.log("Mint conformation Completed", {
//           Txreceipt : Txreceipt
//         });
//     })
//     .on("error", async (error) => {
//         console.log(error);
//     });
//     }catch(err){
//         console.log(err);
     
//     }  
// } 
// const erc20MintObject = async (data, txObject) => {
  
//      const toAddress = data.toAddress;
//      const amount = data.amount;
   

//     console.log("data:", data);
    
//     const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);
    
  
//     txObject.data = myContract.methods
//       .mint(toAddress, amount)
//       .encodeABI();
    
    
// };

// module.exports= {mintToken};

const {createTx} = require("../walletServices/create-Transaction");
const {web3} = require("../web3/web3");
const Contract_Address = process.env.CONTRACT_ADDRESS;
const Contract_ABI = require("../../config/contractabi.json");
const network = process.env.NETWORK;
const Customer1 = process.env.CUSTOMER_ADDRESS;

const mintToken = async (data) => {
    console.log("data:", data);
    if (!data || !data.toAddress || !data.amount) {
        //console.log("Invalid data object:", data);
        return;
    }

    try {
        const txObject = {
            to: Contract_Address,
            value: "0x",
            data: ""
        };

        await erc20MintObject(data, txObject);

        const txSerialized = await createTx(txObject, web3, network);
        const receipt = await web3.eth.sendSignedTransaction(txSerialized);

        console.log("Mint confirmation completed", {
            Txreceipt: receipt
        });
    } catch (err) {
        console.log(err);
    }
};

const erc20MintObject = async (data, txObject) => {
    const toAddress = data.toAddress;
    const amount = data.amount;

    console.log("data:", data);

    const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);

    txObject.data = myContract.methods
        .mint(toAddress, amount)
        .encodeABI();

    return txObject;
};

module.exports = {
    mintToken
};

