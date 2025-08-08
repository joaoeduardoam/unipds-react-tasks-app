import { NextRequest, NextResponse } from "next/server";

import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);


export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("midd token", token);

  if (!token) {
    console.log("No token found");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    console.log("Verifying token...");
    await jwtVerify(token, secret);
    console.log("Token verified");
    return NextResponse.next();
  } catch {
    console.log("Token verification failed");
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/tasks"],
};