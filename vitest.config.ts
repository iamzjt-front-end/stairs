import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
	},
	resolve: {
		alias: [
			{
				find: /@stairs\/(\w*)/,
				replacement: path.resolve(__dirname, "packages") + "/$1/src",
			},
		],
	},
	plugins: [
		AutoImport({
			imports: ["vitest"],
			dts: true, // generate TypeScript declaration
		}),
	],
});
