import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Site is open — all pages accessible
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
};
