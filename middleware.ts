import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const dashboardRoute = '/app';
const loginRoute = '/login';

// Page routes that should not be shown to authenticated users.
const nonAuthRoutes = [
	'/',
	loginRoute,
	'/register',
	'/password/forgot',
	'/password/reset',
];

const isNonAuthRoute = (req: NextRequest) => {
	return nonAuthRoutes.indexOf(req.nextUrl.pathname) >= 0;
};

const isProtectedRoute = (req: NextRequest) => {
	return req.nextUrl.pathname.startsWith(dashboardRoute);
};

export async function middleware(req: NextRequest) {
	const session = await getToken({ req: req, secret: process.env.SECRET });
	const isAuthenticated = session !== null;

	if (isAuthenticated && isNonAuthRoute(req)) {
		// Redirect the authenticated user to the main dashboard.
		return NextResponse.redirect(new URL(dashboardRoute, req.url));
	} else if (!isAuthenticated && isProtectedRoute(req)) {
		// Redirect unauthenticated users to the login page
		return NextResponse.redirect(new URL(loginRoute, req.url));
	}

	return NextResponse.next();
}
