import mongoose, { mongo } from "mongoose"
mongoose.set('strictQuery', true);
const Connection = async (Username, Pass) => {
    const URL = `mongodb+srv://${Username}:${Pass}@blog-app.neditpz.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Connected successfully");
    } catch (error) {
        console.log("Error connecting to database ", error)
    }
}

export default Connection;