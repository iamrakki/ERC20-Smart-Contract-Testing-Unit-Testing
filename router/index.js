const express = require("express");
const router = express.Router();

const { mint,
       burn,
       burnTokenfromanotheruser,
       pausecontact,
       unpausecontract,
       transferamount,
       transferFromOnetoAnother,
       transferOwnershiptoanotheruser,
       approve,
       decreaseAllowanceUser,
       increaseAllowanceUser
}= require("../controllers")


router.get("/mint",mint);
router.get("/approve",approve);
router.get("/increaseAllowance",increaseAllowanceUser);
router.get("/decreaseAllowance",decreaseAllowanceUser);
router.get("/transfer",transferamount);
router.get("/transferFrom",transferFromOnetoAnother);
router.get("/transferOwnership",transferOwnershiptoanotheruser);
router.get("/burn",burn);
router.get("/burnTokenfrom",burnTokenfromanotheruser);
router.get("/pause",pausecontact);
router.get("/unpause",unpausecontract)

module.exports = router;