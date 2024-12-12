const express = require("express")
const{Signups,Logins}=require("../controllers/signupController")

const router=express.Router();
router.post("/signup",Signups);
router.post("/login",Logins)
module.exports=router;