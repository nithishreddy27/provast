import connectdb from "@/utils/connnectdb" 
import StudentDetails from "models/register"


connectdb()
export default async function handler(req, res) {
    try{
        console.log("bodut:",req.body)
        const student =await StudentDetails.create(req.body)
        res.redirect('/')
        
        if(!student){
            return res.json({"user":"not created"})
        }
    }
    catch(err){
        res.status(200).json({ "user": 'not created' })
    }
    
    
  }
  