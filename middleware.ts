import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
    
      // Lindungi semua jalur /admin kecuali /admin/login
        if (path.startsWith("/admin") && path !== "/admin/login") {
            const adminSession = request.cookies.get("admin_session")?.value;
                
                    if (!adminSession) {
                          return NextResponse.redirect(new URL("/admin/login", request.url));
                              }
                                }

                                  return NextResponse.next();
                                  }

                                  export const config = {
                                    matcher: ["/admin/:path*"],
                                    };