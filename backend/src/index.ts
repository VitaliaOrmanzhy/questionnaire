import express from "express";
import "dotenv/config"
import router from "./routes";
import connectToDB from "./db/db";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());
app.use("/api", router);

connectToDB();
    
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})