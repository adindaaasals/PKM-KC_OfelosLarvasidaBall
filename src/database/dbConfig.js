import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    conn.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    conn.connection.on("error", (err) => {
      console.log(`MongoDB connection error: ${err.message}`);
      process.exit(1);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connect;
