import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: z.object({
    /* =========================
       BASIC PROJECT DATA
       ========================= */

    title: z.string(),
    description: z.string(),
    year: z.string(),
    category: z.array(z.string()),

    cover: z.string().optional(),

    featured: z.boolean().default(false),
    order: z.number().default(99),

    /* =========================
       TEMPLATE TYPE
       ========================= */

    template: z.enum(["default", "work"]).default("default"),

    /* =========================
       WORK PAGE HERO
       ========================= */

    subtitle: z.string().optional(),

    tags: z.array(z.string()).optional(),

    /* =========================
       IMAGE GALLERY
       ========================= */

    gallery: z
      .array(
        z.object({
          image: z.string(),
          label: z.string().optional(),
          alt: z.string().optional(),
        }),
      )
      .optional(),

    /* =========================
       VIDEO
       ========================= */

    video: z
      .object({
        youtube: z.string().optional(),
        bilibili: z.string().optional(),
      })
      .optional(),

    /* =========================
       PROJECT INFO
       ========================= */

    context: z.string().optional(),
    platform: z.string().optional(),
    interaction: z.string().optional(),
    role: z.string().optional(),
    focus: z.string().optional(),
    outcome: z.string().optional(),

    /* =========================
       PROJECT NAVIGATION
       ========================= */

    previous: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
