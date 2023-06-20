import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import typescript from "@rollup/plugin-typescript";
import externals from "rollup-plugin-node-externals";

export default {
	input: "./packages/core/src/index.ts",
	output: [
		{
			file: "packages/core/dist/stairs.bundle.cjs.js",
			format: "cjs",
		},
		{
			file: "packages/core/dist/stairs.bundle.esm.js",
			format: "es",
		},
	],
	plugins: [
		typescript(),
		resolve(),
		externals({
			devDeps: false,
		}),
		commonjs(),
		strip(),
	],
	external: [],
};
