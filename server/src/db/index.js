import { default as mongoose } from "mongoose";

const connectDB =  async ()=>{
    try {
        const connectionInstance = await mongoose.connect()
    } catch (error) {

    }
}