import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    rpassword:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.models.StudentDetails || mongoose.model('StudentDetails',userSchema)
