import { NextRequest, NextResponse } from "next/server";

// www / 본 주소 모두 그대로 유지 (리다이렉트 없음)
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
