const {createTx} = require("../walletServices/create-Transaction")
const {web3} = require("../web3/web3")
const Contract_Address =process.env.CONTRACT_ADDRESS;
const Contract_ABI = require("../../config/contractabi.json")
const network = process.env.NETWORK
const Customer1=process.env.CUSTOMER_ADDRESS;

const transferOwnershipToken = async (data) => {
    try{
    var txObject = {};

    txObject.to = Contract_Address;
    txObject.value = "0x";
  
 
    await erc20transferOwnershipeObject(data, txObject);
        
    

    const txSerialized = await createTx(txObject, web3, network);
    web3.eth.sendSignedTransaction(txSerialized)
    .on("receipt",async (Txreceipt) => {
        console.log("transferOwnership conformation Completed", {
          Txreceipt : Txreceipt
        });
    })
    .on("error", async (error) => {
        console.log(error);
    });
    }catch(err){
        console.log(err);
     
    }  
} 
const erc20transferOwnershipeObject = async (data, txObject) => {
  
    const NewOwner = data.NewOwner;
    // const tokenId = data.tokenId;
    // const tokenvalidity = data.tokenValidity;
    // //const graceperiod = data.graceperiod;
    // const royaltyReceiver = data.royaltyReceiver;
    // const royaltyPercentage = data.royaltyPercentage;
   
    
    console.log("data:", data);
    
    const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);
    
  
    txObject.data = myContract.methods
      .transferOwnership(NewOwner)
      .encodeABI();
    
    
};
module.exports = {transferOwnershipToken};