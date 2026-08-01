import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getNewAccessToken } from "./services/refreshToken";
import { jwtUtils } from "./utils/jwt";

const PUBLIC_ROUTES = ["/"];
const AUTH_ROUTES = ["/login", "/register"];

type JwtPayload = {
  id: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  exp: number;
};

export async function proxy(request: NextRequest) {
  console.log("🔥 Proxy executed:", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;
  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Verify tokens
  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  // 🔑 Refresh logic
  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      const cookieStore = await cookies();
      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: "lax",
      });

      accessToken = newAccessToken;
      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // User not logged in
  if (!accessToken) {
    if (isPublicRoute || isAuthRoute) {
      return NextResponse.next();
    }
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Decode token safely
  let decoded: JwtPayload | null = null;
  try {
    decoded = jwtDecode<JwtPayload>(accessToken);
    console.log(jwtDecode(accessToken));
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("accessToken");
    response.cookies.delete("refreshToken");
    return response;
  }

  // Prevent logged-in users from visiting login/register
  if (isAuthRoute) {
    switch (decoded.role) {
      case "ADMIN":
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
      case "PROVIDER":
        return NextResponse.redirect(
          new URL("/provider-dashboard", request.url),
        );
      default:
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Role protection
  if (pathname.startsWith("/admin-dashboard") && decoded.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/403", request.url));
  }
  if (
    pathname.startsWith("/provider-dashboard") &&
    decoded.role !== "PROVIDER"
  ) {
    return NextResponse.redirect(new URL("/403", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
