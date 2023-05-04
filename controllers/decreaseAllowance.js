const {decreaseAllowanceToken} = require("../services/contractServices/decreaseAllowance")
async function decreaseAllowanceUser(req, res, next) {
    const {data}=req.body;
    await decreaseAllowanceToken(data);
    res.json({
        status:"Success"
    })
};

module.exports= {decreaseAllowanceUser}