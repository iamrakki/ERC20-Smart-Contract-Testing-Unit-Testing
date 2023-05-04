
const {mintToken} = require("../services/contractServices/mint")
async function mint(req, res, next) {
    const {data}=req.body;
    console.log(data);
    await mintToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {mint}