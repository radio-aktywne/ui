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
      bundle: false,
      dts: {
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
