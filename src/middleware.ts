import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow assets (images, CSS, JS)
  const path = request.nextUrl.pathname;
  if (path.startsWith('/images/') || path.startsWith('/_next/') || path === '/favicon.ico') {
    return NextResponse.next();
  }

  // Redirect everything else to homepage (Coming Soon)
  if (path !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
};
