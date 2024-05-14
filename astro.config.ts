import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import unocss from "unocss/astro";
// @ts-ignore
import vesper from "./src/lib/vesper.json";

export default defineConfig({
  site: "https://www.thedropoutfund.com",
  adapter: vercel(),
  output: "hybrid",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    unocss({ injectReset: true }),
    vue(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  server: {
    port: 6969
  },
  // @ts-expect-error
  markdown: { shikiConfig: { theme: vesper, wrap: true } },
});
