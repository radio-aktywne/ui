import type { RsbuildConfig } from "@rsbuild/core";
import type { StorybookConfig } from "storybook-react-rsbuild";

export default {
  addons: ["@storybook/addon-docs", "storybook-addon-rslib"],
  core: {
    disableTelemetry: true,
  },
  framework: "storybook-react-rsbuild",
  rsbuildFinal: (config): RsbuildConfig => ({
    ...config,
    dev: {
      ...config.dev,
      assetPrefix: process.env.STORYBOOK_BASE_PATH,
    },
    output: {
      ...config.output,
      assetPrefix: process.env.STORYBOOK_BASE_PATH,
    },
    server: {
      ...config.server,
      base: process.env.STORYBOOK_BASE_PATH,
    },
  }),
  staticDirs: ["../stories/assets"],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.ts",
    "../stories/**/*.stories.tsx",
  ],
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      propFilter: () => true,
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath: "tsconfig.json",
    },
  },
} satisfies StorybookConfig;
