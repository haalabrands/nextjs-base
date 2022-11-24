# Next.js Skeleton

## Installation

App installation:
```
git clone https://github.com/haalabrands/nextjs-base.git
cd nextjs-base
yarn install
cp .env.example .env.local
```

<br/>Edit the .env.local file to add a NextAuth secret key and database credentials.
<br/>The `NEXTAUTH_SECRET` key can be generated at:<br/>
[https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)<br/>
or by running command:
`openssl rand -base64 32`

Finish installation by migrating and seeding the databasr:
```
knex migrate:latest
knex seed:run
```

After installation is complete, run `yarn dev` in the console to start the local development server.
<br/>The site will be available at: [http://localhost:3000](http://localhost:3000)

## Stack

- Next.js with TypeScript
- Tailwind CSS
- MySQL (Knex.js)
- ESLint, Prettier, Yarn

### Documentation

**Next.js**

- [Docs](https://nextjs.org/docs/getting-started 'Docs')
- [Examples](https://nextjs.org/examples 'Examples')

**Knex.js**

- [Docs](https://knexjs.org/guide/ 'Docs')
- [Query Builder](https://knexjs.org/guide/query-builder.html 'Query Builder')
- [Migrations & Seeding](https://knexjs.org/guide/migrations.html 'Migrations')

**NextAuth.js**

- [Docs](https://next-auth.js.org/getting-started/introduction 'Docs')
- [Credentials Provider](https://next-auth.js.org/providers/credentials 'Credentials Provider')

**Tailwind CSS**

- [Docs](https://tailwindcss.com/docs/installation 'Docs')
- [Tailwind UI Components](https://tailwindui.com/ 'Tailwind UI')
- [TailGrids Components](https://tailgrids.com/components 'TailGrids')
- [TUK Components](https://app.tailwinduikit.com/components 'Tailwind UI Kit')

**ESLint**

- [Docs](https://eslint.org/docs/latest/ 'Docs')
- [Playground](https://eslint.org/play/ 'Playground')

**Prettier**

- [Docs](https://prettier.io/docs 'Docs')
- [Playground](https://prettier.io/playground/ 'Playground')
