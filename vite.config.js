import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
	publicDir: "src/assets",
	base: "/QuickVol/",

	server: {
		open: true,
		https: true,
	},

	build: {
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		outDir: "dist",
	},

	plugins: [compression(), basicSsl()],
});
