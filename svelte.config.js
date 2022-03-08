import adapter from "@sveltejs/adapter-static";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer()]
      }
    }),
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
      layout: {
        blog: "src/routes/blog/_post.svelte",
      },
    }),
  ],
};

export default config;
