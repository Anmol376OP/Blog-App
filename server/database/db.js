import mongoose, { mongo } from "mongoose"
mongoose.set('strictQuery', true);
const Connection = async () => {
    const URL = `mongodb+srv://anmol:anmol123@blog-app.neditpz.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Connected successfully");
    } catch (error) {
        console.log("Error connecting to database ", error)
    }
}

export default Connection;