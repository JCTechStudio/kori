// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { locales } from "./config/locales";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Kori UI",
      description: "UI Component library for Astro, used in all JCTechStudio projects.",
      logo: {
        light: "./src/assets/kori-logo.webp",
        dark: "./src/assets/kori-logo.webp",
        alt: "Kori UI",
      },
      editLink: {
        baseUrl: "https://github.com/JCTechStudio/kori/tree/feat/starlight-docs/apps/starlight-docs",
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: { "es": "Primeros pasos" },
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Components",
          translations: { "es": "Componentes" },
          autogenerate: {
            directory: "components",
          },
        },
      ],
      locales,
      defaultLocale: "en",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/JCTechStudio/kori" }],
      customCss: ["./src/styles/global.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            size: "16x16",
          },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
