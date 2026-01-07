import mongoose  from "mongoose";
const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('db connected successfully');
    } catch (error) {
        console.log(error,"error while connectiong the db");
    }
}

export default connectDB