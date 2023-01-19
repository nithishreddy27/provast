import mongoose from 'mongoose';

console.log("inside")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        // required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.models.StudentDetails || mongoose.model('StudentDetails',userSchema)
