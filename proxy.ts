import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/"];
const AUTH_ROUTES = ["/login", "/register"];

type JwtPayload = {
  id: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  exp: number;
};

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // User is not logged in
  if (!accessToken) {
    // Allow public & auth pages
    if (isPublicRoute || isAuthRoute) {
      return NextResponse.next();
    }

    // Redirect protected pages to login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Decode token
  let decoded: JwtPayload | null = null;

  try {
    decoded = jwtDecode<JwtPayload>(accessToken);
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));

    response.cookies.delete("accessToken");
    response.cookies.delete("refreshToken");

    return response;
  }

  // Logged-in users shouldn't visit login/register
  if (isAuthRoute) {
    switch (decoded.role) {
      case "ADMIN":
        return NextResponse.redirect(new URL("/admin", request.url));

      case "PROVIDER":
        return NextResponse.redirect(
          new URL("/provider/dashboard", request.url),
        );

      default:
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Role protection
  if (pathname.startsWith("/admin") && decoded.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/403", request.url));
  }

  if (pathname.startsWith("/provider") && decoded.role !== "PROVIDER") {
    return NextResponse.redirect(new URL("/403", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
