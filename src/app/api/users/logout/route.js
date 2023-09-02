import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = NextResponse.json({
      status: 200,
      body: {
        status: "success",
        message: "Logout success",
      },
    });
    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
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
