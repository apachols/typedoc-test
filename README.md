# typedoc-test

Uses typedoc to auto-generate documentation for Typescript event definitions for analytics events.

## Setup

```
npm i
```

## To generate docs

```
npx typedoc --name Eventstream --out docs src/events.ts --customCss override.css
```
