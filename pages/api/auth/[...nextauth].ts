import NextAuth from 'next-auth/next';
import connect from '../../../database/connect';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

const db = connect();

const checkPassword = async (
	inputPassword: string,
	storedPasswordHash: string
) => {
	const passwordMatch = await compare(inputPassword, storedPasswordHash);

	return passwordMatch;
};

export default NextAuth({
	session: {
		// Choose how you want to save the user session.
		// The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
		// If you use an `adapter` however, we default it to `"database"` instead.
		// You can still force a JWT session by explicitly defining `"jwt"`.
		// When using `"database"`, the session cookie will only contain a `sessionToken` value,
		// which is used to look up the session in the database.
		strategy: 'jwt',

		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 24 * 60 * 60 * 7, // 7 days
	},

	providers: [
		Credentials({
			name: 'credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					//placeholder: '',
				},
				password: {
					label: 'Password',
					type: 'password',
					//placeholder: '',
				},
			},
			async authorize(credentials) {
				/*
				You need to provide your own logic here that takes the credentials
				submitted and returns either an object representing a user or value
				that is false/null if the credentials are invalid.
				e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
				 */
				if (!credentials) {
					return null;
				}

				/*
				Check for existing user in the database
				 */
				const user = await db('users')
					.where({
						username: credentials.username,
					})
					.first();
				if (!user) {
					/*
					If you return null then an error will be displayed advising the user to check their details.

					You can also Reject this callback with an Error.
					The user will be sent to the error page with the error message as a query parameter
					//throw new Error('User not found');
					 */
					return null;
				}

				const isMatchingPassword = await checkPassword(
					credentials.password,
					user.password
				);
				if (!isMatchingPassword) {
					//throw new Error('Invalid Credentials');
					return null;
				}

				// User is authenticated
				return user;
			},
		}),
	],

	callbacks: {
		jwt: async ({ token, user }) => {
			/*
			This is called whenever a JSON Web Token is created (ex. at login) or updated (ex. when a session is accessed in the client).
			The returned value will be encrypted, and it is stored in a cookie.

			The user, account, profile & isNewUser arguments are only passed the first time this callback is called on a new session,
			after the user signs in. In subsequent calls, only token will be available.

			Use an if statement to check for the existence of parameters (apart from token).
			If they exist, this means that the callback is being invoked for the first time (i.e. the user is being signed in).
			This is a good place to persist additional data like an access_token in the JWT.
			Subsequent invocations will only contain the token parameter.
			 */
			if (user) {
				token.id = user.id;
				token.userId = user.id;
				token.username = user.username;
				token.greeting = user.greeting;
				// Temporary avatar for authenticated users.
				// @TODO Get actual value from database before putting in production.
				token.avatar = '/img/default-avatar.png';
			}

			return token;
		},

		/*async redirect({url, baseUrl}) {
			/!*
			This is called anytime the user is redirected to a callback URL (e.g. on signin or signout).

			By default, only URLs on the same URL as the site are allowed,
			you can use this callback to customise that behaviour.

			The redirect callback may be invoked more than once in the same flow.
			 *!/
			return baseUrl;
		},*/

		session: async ({ session, token }) => {
			/*
			This is called whenever a session is checked.
			By default, only a subset of the token is returned for increased security.
			If you want to make something available you added to the token through the jwt() callback,
			you have to explicitly forward it here to make it available to the client.

			When using JSON Web Tokens the jwt() callback is invoked before the session() callback,
			so anything you add to the JSON Web Token will be immediately available in the session callback,
			like for example an access_token from a provider.

			The session object is not persisted server side, even when using database sessions.
			Only data such as the session token, the user, and the expiry time is stored in the session table.

			If you need to persist session data server side, you can use the accessToken returned for the session as a key
			and connect to the database in the session() callback to access it.
			Session accessToken values do not rotate and are valid as long as the session is valid.

			If using JSON Web Tokens instead of database sessions,
			you should use the User ID or a unique key stored in the token
			(you will need to generate a key for this yourself on sign in,
			as access tokens for sessions are not generated when using JSON Web Tokens).
			 */

			// Send properties to the client (ex. an access_token from a provider).
			if (token) {
				session.id = token.id;
				session.user.id = token.userId;
				session.user.greeting = token.greeting;
				session.user.username = token.username;
				session.user.avatar = token.avatar;
			}

			return session;
		},

		async signIn(/*{ user, account, profile, email, credentials }*/) {
			/*
			Used to control if a user is allowed to sign in.

			When using the Credentials Provider, the user object is the response returned from the authorize callback
			and the profile object is the raw body of the HTTP POST submission.
			 */
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
				return true;
			} else {
				// Return false to display a default error message
				return false;
				// Or you can return a URL to redirect to:
			}
		},
	},

	/*jwt: {
		// The maximum age of the NextAuth.js issued JWT in seconds.
		// Defaults to `session.maxAge`.
		maxAge: (60 * 60 * 24) * 30, // 30 Days

		// You can define your own encode/decode functions for signing and encryption
		/!*async encode() {},
		async decode() {},*!/
	},*/

	pages: {
		signIn: '/login',
		//signOut: '/logout',
		//newUser: '/welcome' // New users will be directed here on first sign in (leave the property out if not of interest)
		//verifyRequest: '/auth/verify-request', // (used for check email message)
	},
});
