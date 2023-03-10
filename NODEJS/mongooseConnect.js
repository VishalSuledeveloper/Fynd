const mongoose =require("mongoose");
const url ="mongodb://0.0.0.0:27017/socialApp";

const userSchema =new mongoose.Schema({
    _id:Number,
    username:String,
    email:String,
},
{_id:false}
);
const User =new mongoose.model("user",userSchema);
async function run(){
    try{
        await mongoose.connect(url);
        const user =User({"username":"vssule","email":"vssule@gmail.com","_id":3});
        await user.save();
        const docs = await User.find({});
        docs.forEach((doc)=>console.log(doc));

    }catch(error){
        console.log(error);
    }finally{
        await mongoose.disconnect();
    }
}
run();