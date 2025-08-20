import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connectToDB = async () => {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log("Darabse connected successfully"))
        .catch((e) => console.error(e))
}

export default connectToDB;