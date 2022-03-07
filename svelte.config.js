import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess(
    sveltePreprocess(),
  ),

  kit: {
    adapter: adapter(),
  },
};

export default config;
