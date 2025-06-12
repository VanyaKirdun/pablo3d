// eslint-disable-next-line import/no-nodejs-modules
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import glsl from "vite-plugin-glsl";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	plugins: [
		react(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: "default",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
		glsl(),
	],
	build: {
    sourcemap: true,
  },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
