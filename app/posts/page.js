/**
 * Routing in Next.js works as a file system.
 * This page.js represents localhost:3000/posts.
 * 
 * 
 * next.js gives us three options for data fetching
 * 1. server side rendering (SSR)
 * 2. Static site generation (SSG)
 * 3. incremental static generation (ISR)
 * 
 * by default next.js uses static site generation, which caches
 * the page in the web browser
 * 
 * server side will always be up to date with the server
 * 
 * incremental is inbetween, where it will fetch new info from
 * the server with a set amount of time in between each fetch,
 * and otherwise will store in the browser
 */