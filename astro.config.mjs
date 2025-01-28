import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://fairagro.github.io",
  base: "4.2-RDI_workshop",
  integrations: [tailwind()],
});