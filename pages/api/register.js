// import clientPromise from "@/lib/mongodb"
import connectdb from "@/utils/connnectdb" 
// import StudentDetails from "models/register"
import StudentDetails from "models/register"


connectdb()
export default async function handler(req, res) {
    try{
        var p=req.body.password
        var rp=req.body.rpassword
        console.log("body:",rp,"p:",p)
        
            console.log("in")
            const student = await StudentDetails.create(req.body)   
            res.redirect('/')
        
            if(!student){
                return res.json({"user":"not created"})
            }
    }
    catch(err){
        console.log("in catch");
        res.status(200).json({ "user": 'not created' })
    }
    
    
  }
  