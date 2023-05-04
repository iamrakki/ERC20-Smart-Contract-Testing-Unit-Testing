
const {transferToken} = require("../services/contractServices/transfer")
async function transferamount(req, res, next) {
    const {data}=req.body;
    await transferToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {transferamount}