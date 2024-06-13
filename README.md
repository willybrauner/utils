# @wbe/utils

javascript & nodejs utils.

## Installation

```shell
npm i @wbe/utils
```

## Util categories

- [array](src/array)
- [dom](src/dom)
- [envs](src/envs)
- [math](src/math)
- [promise](src/promise)
- [social](src/social)


## Development

```shell
# install dependencies
pnpm i

# run tests
pnpm test

# run tests in watch mode
pnpm test:watch

# build in watch mode
pnpm build:watch

# build for production
pnpm build
```

## Publish a new version

```shell
# build and tests
pnpm pre-publish

# increment version in package.json
npm verion {patch|minor|major}

# push to github with tags
git push --follow-tags

# publish to npm (you need to be logged in)
npm publish

# then create a release on github
```

## Licence

MIT

## Credits

© Willy Brauner
