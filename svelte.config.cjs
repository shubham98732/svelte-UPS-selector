const preprocess = require("svelte-preprocess");
const sveltePreprocess = require("svelte-preprocess");

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
        preprocess: sveltePreprocess(),
      },
    }),
  ],
};

module.exports = config;
