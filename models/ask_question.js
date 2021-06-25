const mongoose=require('mongoose');
const ask_question=new mongoose.Schema({
    firstname : {
        type:String
    } ,
    lastname : {
        type:String
    },
    email:{
        type:String
    },
    phonNumber:
    {
        type:Number
    },
   question:
    {
        type:String

    },
    msg:
    {
        type:String
    }

})
const Ask_question =new mongoose.model("Ask_question",ask_question)
module.exports=Ask_question;
