const {mint}= require("./mint")
const {approve}= require("./approve")
const {burn}= require("./burn")
const {burnTokenfromanotheruser}= require("./burnFrom")
const {decreaseAllowanceUser}= require("./decreaseAllowance")
const {increaseAllowanceUser}= require("./increaseAllowance")
const {pausecontact}= require("./pause")
const {unpausecontract}= require("./unpause")
const {transferamount}= require("./transfer")
const {transferFromOnetoAnother}= require("./transferFrom")
const {transferOwnershiptoanotheruser}= require("./transferOwnership")


module.exports=  {
        mint,
        approve,
        burn,
        burnTokenfromanotheruser,
        decreaseAllowanceUser,
        increaseAllowanceUser,
        pausecontact,
        unpausecontract,
        transferamount,
        transferFromOnetoAnother,
        transferOwnershiptoanotheruser
}