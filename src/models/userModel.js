import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter your name"],
    unique: [true, "Username already exist"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "Email already exist"]
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
