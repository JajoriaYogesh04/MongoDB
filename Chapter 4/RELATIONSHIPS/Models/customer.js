const mongoose= require("mongoose");
const { findByIdAndDelete } = require("../../../../Project/models/listing");
const { Schema }= mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("Connected to Mongoose"))
.catch((err)=>console.log(err));

const orderSchema= new Schema({
    item: String,
    price: Number,
});

const customerSchema= new Schema({
    name: String,
    order: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async ()=>{
//     console.log("PRE MIDDLEWARE");
// })


customerSchema.post("findOneAndDelete", async(customer)=>{
    // console.log(customer.order);
    if(customer.order.length){
        let result= await Order.deleteMany({ _id: {$in: customer.order} });
        console.log(result);
    }
})

const Order= mongoose.model("Order", orderSchema);

const Customer= mongoose.model("Customer", customerSchema);

const addOrders= async()=>{
    const result= await Order.insertMany([
        {item: "Chocolate", price: 80},
        {item: "Chips", price: 40},
        {item: "Apple", price: 100},
    ])
    console.log(result);
}
// addOrders();

const addCustomer= async()=>{
    let cust1= new Customer({
        name: "Parth",
    });
    let order1= await Order.findOne({item: "Chips"});
    let order2= await Order.findOne({item: "Chocolate"});
    cust1.order.push(order1);
    cust1.order.push(order2);
    let result= await cust1.save()
    console.log(result);

    // const result= await Customer.find({})
    // console.log(result);
}
// addCustomer();

const findCustomer= async()=>{
    const result= await Customer.find({}).populate("order");
    console.log(result[0]);
}
// findCustomer();

const addData= async()=>{
    let cust1= new Customer({
        name: "Paradigm",
    })

    let order1= new Order({
        item: "Sweets",
        price: 450,
    });

    cust1.order.push(order1);

    await order1.save();
    await cust1.save();
    console.log("Order Added Successfully");
}
// addData();

const delData= async()=>{
    let delCust= await Customer.findByIdAndDelete("66595b094d3419be2482231b");
    console.log(delCust);
}
delData();

