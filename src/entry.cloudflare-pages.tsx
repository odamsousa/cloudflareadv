/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Cloudflare Pages when building for production.
 *
 * Learn more about the Cloudflare Pages integration here:
 * - https://qwik.dev/docs/deployments/cloudflare-pages/
 *
 */
import { createQwikCity } from @builder.io/qwik-city/middleware/cloudflare-pages;
import type { PlatformCloudflarePages } from @builder.io/qwik-city/middleware/cloudflare-pages;
import qwikCityPlan from @qwik-city-plan;
import render from ./entry.ssr;

/* eslint-disable @typescript-eslint/no-empty-interface */
// Extend the default PlatformCloudflarePages interface with any custom
// platform-specific types. For now we simply extend it directly.
export interface Platform extends PlatformCloudflarePages {}

declare global {
  // Extend QwikCityPlatform with our custom Platform definition. This is
  // required so Qwik City knows about the types available on the Platform.
  interface QwikCityPlatform extends Platform {}
}

// Create the Cloudflare Pages fetch handler.  This function will be
// automatically invoked by Cloudflare when a request comes in.  It
// wraps the Qwik City SSR renderer and provides the Qwik City plan
// for routing and rendering your application.
const fetch = createQwikCity({ render, qwikCityPlan });

export { fetch };
