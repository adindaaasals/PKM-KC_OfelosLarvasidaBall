import connect from "@/database/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    await connect();

    if (!email || !username || !password) {
      return NextResponse.json({
        status: 400,
        body: {
          status: "error",
          message: "Please fill all fields",
        },
      });
    }

    const existUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existUser) {
      return NextResponse.json({
        status: 400,
        body: {
          status: "error",
          message: "Email/username already exists",
        },
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      status: 200,
      body: {
        status: "success",
        message: "User created successfully",
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: {
        status: "error",
        message: error.message,
      },
    });
  }
}
