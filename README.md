# Basics

This website makes use of the [Astro](https://astro.build) framework to build a snappy, static site. Astro lets us blend pure HTML/CSS components with .JSX components so that we can use React (or Vue, Angular, etc.) when we need to and keep it simple otherwise.

```sh
npm i
```
## Development Server
```sh
npm run dev
```
## Local Build and Preview
```sh
npm run build && npm run preview
```
## Vercel Production
Vercel will automatically build the latest commit to the main branch. Please do not push build files (in `dist` or `.vercel/output`) as they will prevent fresh builds from occurring in new deployments
