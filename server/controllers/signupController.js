
const Signup= require("../models/signup");
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken");
 const secret="geethu3@"

const Signups = async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const sign=await Signup.findOne({email:email,password:password});
        const hashpassword=await bcrypt.hash(password,10);

        if(sign){
            res.status(400).json({message:"user already exists"});
        }
        else{
            const user=await Signup.create({
              username,
              email,
              password:hashpassword,

            })
            if(user){
                res.status(200).json({message:"user registered successfully"})
                console.log("registration success")
            }else{
                res.status(400).json({message:"error while registering"});
            }
        }
    } catch (error){
        console.log(error);
    }

}
const Logins =async(req,res)=>{
    const{email,password}=req.body;
    try{
        const log=await Login.findOne({email:email});
        
            if(!log||!(await bcrypt.compare(password,log.password))){
                     res.status(400).json({message:"invalid user or password"});
            }
            else{
                res.status(200).json({message:"user login successfully"});
                const token=await jwt.sign({userId:log._id},secret,{expiresIn:"30h" });
            }
        }catch(error){
           console.log(error)
        }
    }
module.exports={Signups,Logins};
