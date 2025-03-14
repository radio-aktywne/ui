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
