import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get('token');

  const publicPath = path === '/login' || path === '/signup';

  if (!publicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (publicPath && token) {
    return NextResponse.redirect(new URL('/main', req.nextUrl));
  }

}

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/main',
  ]
};