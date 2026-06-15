import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { isAuthenticated, unauthorizedResponse } from './lib/auth';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Allow Next.js internal assets and API routes to pass through
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/images/')
  ) {
    return intlMiddleware(request);
  }

  // Check Basic Auth
  if (!isAuthenticated(request)) {
    return unauthorizedResponse();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|.*\\..*).*)'],
};
