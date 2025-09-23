import mongoose from "mongoose";

const connectDB = async (mongoURI: string) => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
        process.exit(1);
    }
};

export default connectDB;
