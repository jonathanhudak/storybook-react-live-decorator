import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";

const plugins = [
  peerDepsExternal({ includeDependencies: true }),
  commonjs(),
  babel({ exclude: "node_modules/**" })
];

export default [
  {
    input: "src/index.jsx",
    output: {
      file: "index.js",
      format: "cjs"
    },
    plugins
  },
  {
    input: "src/index.jsx",
    output: {
      file: "index.esm.js",
      format: "esm"
    },
    plugins
  }
];
