const mongoose= require("mongoose");
const { Schema }= mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("Connected to Mongoose"))
.catch((err)=>console.log(err));

const userSchema= new Schema({
    username: String,
    address: [
        {
            // _id: false,
            location: String,
            city: String,
        }
    ],
});

const User= mongoose.model("User", userSchema);

const addUser= async()=>{
    const user1= new User({
        username: "Rahul",
        address: [
            {
                location: "33, Shiv Colony",
                city: "Kota",
            }
        ],
    });
    user1.address.push({location: "76, Laxmi Nagal", city: "Kota"});
    let result= await user1.save();
    console.log(result);
}

addUser();

