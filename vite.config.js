import { defineConfig } from 'vite'

export default defineConfig({
	publicDir: "src/assets",
	base: "/three-base/",

	server: {
		open: true,
	},
	
	build: {
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		outDir: "dist",
	},
})