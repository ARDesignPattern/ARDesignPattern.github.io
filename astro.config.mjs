import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yuliu.design",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "zh"],

    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
});
