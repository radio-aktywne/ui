import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      autoExtension: true,
      bundle: false,
      dts: {
        autoExtension: true,
        bundle: false,
      },
      format: "esm",
      syntax: "esnext",
    },
  ],
  output: {
    distPath: {
      root: "build",
    },
    target: "web",
  },
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "src/**/*",
    },
  },
});
