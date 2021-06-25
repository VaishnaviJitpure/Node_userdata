const express=require('express');
const app= express();
const Ask_question = require("../models/ask_question");
//create
exports.create = async(req,res) =>{
    try {
       // res.send(req.body.firstname)
       const ask_question= new Ask_question({
         firstname : req.body.firstname,
         lastname: req.body.lastname,
         email:req.body.email ,
         phonNumber:req.body.phonNumber ,
         question:req.body.question ,
         msg:req.body.msg 
       })
       const question= await ask_question.save();
       res.send(req.body);
       res.status(201);
       
        
    } catch (error) {
       res.status(400).send(error); 
    }
 
}

//use to get-GET
exports.get = async (req, res) =>
{
    const userList = await Ask_question.findById(req.params.id);   
    res.json({"status": 200, "msg": 'data has been fetched', res: userList });  
  
}

//pagination  to get all data
  exports.allRecords = async (req, res) => {
  try 
  {
    const resPerPage = 10; // results per page
    const page = req.params.page || 1; // Page 
    const userList = await  Ask_question.find().sort({'_id':-1});
    res.json({"status": 200, "msg": 'data has been fetched', res: userList });
  }
  catch (err) 
  {
    res.status(500).json({ message: err.message })
  }
}

//Put One
exports.edit = async (req, res) => {
  try {
    const updatedUser = await Ask_question.findById(req.params.id).exec();
    updatedUser.set(req.body);
    var result = await updatedUser.save();
    //res.json(result);
    res.status(201).json({ "status": 200, "msg": 'record sucessfully updated',result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//Delete  one
exports.delete = async (req, res) => {
  try {
    await Ask_question.findById(req.params.id).deleteOne();
    res.json({ message: "User has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}