const mongoose= require("mongoose");
const { Schema }= mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("Connected to Mongoose"))
.catch((err)=>console.log(err));

const userSchema= new Schema({
    username: String,
    email: String,
});

const postSchema= new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User= mongoose.model("User", userSchema);
const Post= mongoose.model("Post", postSchema);

// const addData= async ()=>{
//     let user1= new User({
//         username: "David",
//         email: "david@gmail.com",
//     });

//     let post1= new Post({
//         content: "Hello Friends",
//         likes: 1500,
//     })

//     post1.user= user1;

//     await user1.save();
//     await post1.save();
// }
// addData();

const addData= async ()=>{
    let user1= await User.findOne({username: "David"});

    let post1= new Post({
        content: "Good Evening guys",
        likes: 2000,
    })

    post1.user= user1;

    let result= await post1.save();
    console.log(result)
}
// addData();

const getData= async()=>{
    let posts= await Post.find().populate("user");
    console.log(posts);
}
getData();