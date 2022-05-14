## Quick Start

### Installation

```bash
# Using Yarn is recomended
npx create-next-app myapp-name -e "https://github.com/riipandi/next-tailwind-starter"

# If you want to use npm instead
npx create-next-app myapp-name --use-npm -e "https://github.com/riipandi/next-tailwind-starter"
```

> Don't forget to change `myapp-name` with your real application name.

### Up and Running

| NPM             | Yarn         | Description              |
| --------------- | ------------ | ------------------------ |
| `npm install`   | `yarn`       | install the dependencies |
| `npm run dev`   | `yarn dev`   | serve with hot reload    |
| `npm run build` | `yarn build` | build for production     |
| `npm run start` | `yarn start` | launch generated build   |

Application will run at `http://localhost:3000`

For detailed explanation on how things work, check out [Next.js docs](https://nextjs.org/docs/getting-started).

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-tailwind-starter&project-name=next-tailwind-starter&repo-name=next-tailwind-starter&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE)

#### Vercel Configuration (optional)

If you are using monorepo you will need to configure a few things:

- Settings -> General -> Root Directory : `apps/web/`
- Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

#### Cloudflare Deployment

You need to add `NODE_VERSION` with value `14.19.0` on the environment variables setting.

## Thanks to...

In general, I'd like to thank every single one who open-sources their
source code for their effort to contribute something to the open-source
community. Your work means the world! 🌍 ❤️

## License

This project is open-sourced software licensed under the [MIT license](https://aris.mit-license.org).

Copyrights in this project are retained by their contributors.
See the [license file](./license.txt) for more information.
