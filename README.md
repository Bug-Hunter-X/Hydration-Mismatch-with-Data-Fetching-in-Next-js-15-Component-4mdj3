# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch bug in a Next.js 15 application. The bug occurs when fetching data within a component using `useEffect` and `fetch`.  The server-side render displays 'Loading...', while the client-side render shows the fetched data, causing a hydration mismatch error.

## Bug Description

A common issue in Next.js applications involves client-side data fetching within components.  If the component renders different content on the server (e.g., a loading indicator) compared to the client (the actual fetched data), a hydration mismatch can occur.  This leads to visual inconsistencies and potential errors.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the initial render and the subsequent update after data is fetched.  You will see a hydration mismatch warning in the browser console.

## Solution

The solution involves using a loading state or a mechanism to ensure the server-side render matches the client-side render.  The solution branch provides a corrected implementation.