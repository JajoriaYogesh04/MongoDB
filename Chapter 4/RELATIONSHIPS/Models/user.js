const mongoose= require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("Connected to Mongoose"))
.catch((err)=>console.log(err));