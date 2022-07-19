import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            $types: resolve("./src/@types"),
            $assets: resolve("./src/assets"),
            $components: resolve("./src/components"),
            $libraries: resolve("./src/libraries"),
            $pages: resolve("./src/pages"),
            $stores: resolve("./src/stores")
        }
    }
});
