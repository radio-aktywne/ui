import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      autoExternal: {
        dependencies: false,
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
      bundle: true,
      dts: {
        bundle: true,
      },
      experiments: {
        advancedEsm: true,
      },
      format: "esm",
      syntax: "esnext",
    },
  ],
  output: {
    copy: [
      {
        from: "src/assets",
        to: "assets",
      },
    ],
    distPath: {
      root: "build",
    },
    target: "web",
  },
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "src/index.ts",
    },
  },
});
