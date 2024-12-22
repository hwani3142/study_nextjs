import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/news", // 미들웨어 처리할 필터 정의
};
