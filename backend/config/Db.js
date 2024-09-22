import mongoose from "mongoose";
import { ENV_VARS } from "./envVar.js";

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("MongoDb connected: "+conn.connection.host);
    } catch (error) {
        console.error("Error connecting to Db: "+error.message);
        process.exit(1);
    }
};