import connect from "@/database/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    await connect();

    if (!username || !password) {
      return NextResponse.json({
        status: 400,
        body: {
          status: "error",
          message: "Please fill all fields",
        },
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({
        status: 400,
        body: {
          status: "error",
          message: "Credentials does not match",
        },
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({
        status: 400,
        body: {
          status: "error",
          message: "Credentials does not match",
        },
      });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      status: 200,
      body: {
        status: "success",
        message: "Login success",
        token,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
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
