const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:270117/Agrotech")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})

const  LogInSchema = new mongoose.Schema({
    UsernameorEmail:{
        type: String,
        required:true
    },
    password: {
        type:String,
        require:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)
module.exports= collection