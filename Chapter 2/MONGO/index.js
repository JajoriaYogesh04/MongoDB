const mongoose= require("mongoose");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then(()=>{console.log("Connection Successful")})
.catch((err)=>{console.log(err)});

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userschema);
const Employee = mongoose.model("Employee", userschema);

// const user4 = new User({
//     name: "Neha",
//     email: "neha@gmail.com",
//     age: 18,
// });
// user4.save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.insertMany([
//     {name: "Varun", email: "varun@gmail.com", age:15},
//     {name: "Vijay", email: "vijay@gmail.com", age:48},
// ]).then((res)=>{
//     console.log(res);
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// });

// const User = mongoose.model("User", userSchema);
// // const Employee = mongoose.model("Employee", userSchema);

// // const user1 = new User({
// //     name: "Adam",
// //     email: "adam@yahoo.in",
// //     age: 48
// // });
// // user1.save();

// // const user2= new User({
// //     name: "Yogesh",
// //     email: "yogesh@gmail.com",
// //     age: 20
// // });
// // user2.save();

// // const user3= new User({
// //     name: "Aryan",
// //     email: "aryan@gmail.com",
// //     age: 21
// // });
// // user3.save().then((res)=>{console.log(res)})
// // .catch((err)=>{console.log(err)});

// User.insertMany([
//     {name: "Shanu", email:"shanu@gmail.com", age: 25},
//     {name: "Tandon", email:"tandon@gmail.com", age: 2},
//     {name: "Sushrut", email:"sushrut@gmail.com", age: 18},
// ]).then((res)=>{console.log(res)});



// New Start

// User.find({}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.find({age:{$gt: 47}}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.find({age:{$gt: 47}}).then((data)=>{console.log(data[0].name)})
// .catch((err)=>{console.log(err)});

// User.findOne({age: {$gt: 47}}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.findById("6643f76d9e03f21b1262b48b").then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});


// User.updateOne({name:"Neha"},{age: 20}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.updateMany({age: {$gt: 47}}, {age: 55}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.findOneAndUpdate({name: "Adam"},{age: 15}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.findOneAndUpdate({name: "Adam"},{age: 25},{new: true}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.findByIdAndUpdate("66332fd7bd39704b8b41cc34",{name: "YOGESH JAJORIA"},{new: true}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.deleteOne({name: "Varun"}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.deleteMany({age: {$gt: 47}}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// User.findOneAndDelete({name: "Shanu"}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.findByIdAndDelete("663333c33c1551e3deeb8af7").then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});
