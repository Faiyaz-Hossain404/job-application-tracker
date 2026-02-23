import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  const session = await getSession();

  const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up");
  const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");

  if ((isSignInPage || isSignUpPage) && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isDashboardPage && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  //continue to work normally
  return NextResponse.next();
}
