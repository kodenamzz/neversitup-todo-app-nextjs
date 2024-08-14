import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  if (currentPath.startsWith("/todo") && !request.cookies.has("jwt")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
