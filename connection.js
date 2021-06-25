const mongoos = require('mongoose');
mongoos.connect(" mongodb+srv://userdata:user@1234@cluster0.gwl8f.mongodb.net/curdOperation?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
   

}).then(() =>{
    console.log(" Connecting Successful");
}).catch((e)=>{
    console.log("Sorry Connection is Not Establish");

})

