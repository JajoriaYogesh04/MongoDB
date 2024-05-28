const mongoose= require("mongoose");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main().then((res)=>{console.log("Connection Successful")})
.catch((err)=>{console.log(err)});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Too Low Price"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: {
        type: String,
        enum: ["fiction", "non fiction"],
    },
    category: [String],
});

const Book= mongoose.model("Book", bookSchema)

// const book1= new Book({
//     name: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200,
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book2= new Book({
//     name: "Mathematics X",
//     author: "RS Agarwal",
//     price: 1200,
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book3= new Book({
//     name: "Mathematics VIII",
//     author: "NCERT",
//     price: "100",
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book4= new Book({
//     name: "Atomic Habits",
//     price: 399,
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book5= new Book({
//     name: "Rich DaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaD",
//     author: "RD Sharma",
//     price: 1200,
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book5= new Book({
//     name: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     price: 499,
//     genre: "non fiction",
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// const book6= new Book({
//     name: "Think and grow rich",
//     price: 599,
//     category: ["Self Help", "Motivation", "Finance"],
// }).save().then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

Book.findByIdAndUpdate("6646e8c228316dfb1e18dfda", {price: -600}, {runValidators: true}).then((res)=>{console.log(res)})
.catch((err)=>{console.log(err.errors.price.properties.message)});