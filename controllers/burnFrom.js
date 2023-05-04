const {burnFromToken} = require("../services/contractServices/burnFrom")
async function burnTokenfromanotheruser(req, res, next) {
    const {data}=req.body;
    await burnFromToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {burnTokenfromanotheruser}