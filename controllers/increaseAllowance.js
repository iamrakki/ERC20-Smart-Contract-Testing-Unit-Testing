const {increaseAllowanceToken} = require("../services/contractServices/increaseAllowance")
async function increaseAllowanceUser(req, res, next) {
    const {data}=req.body;
    await increaseAllowanceToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {increaseAllowanceUser}