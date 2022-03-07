import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "src/routes/blog/_post.svelte",
      },
    }),
  ],
};

export default config;
