import { RsbuildConfig } from "@rsbuild/core";
import { StorybookConfig } from "storybook-react-rsbuild";

export default {
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-rslib",
    "storybook-dark-mode",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: "storybook-react-rsbuild",
  rsbuildFinal: (config): RsbuildConfig => ({
    ...config,
    dev: { ...config.dev, assetPrefix: process.env.STORYBOOK_BASE_PATH },
    output: { ...config.output, assetPrefix: process.env.STORYBOOK_BASE_PATH },
    server: { ...config.server, base: process.env.STORYBOOK_BASE_PATH },
  }),
  staticDirs: ["../stories/assets"],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      propFilter: () => true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      tsconfigPath: "tsconfig.json",
    },
  },
} satisfies StorybookConfig;
