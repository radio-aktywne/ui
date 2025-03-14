import { MantineProvider, useMantineColorScheme } from "@mantine/core";
import { Preview } from "@storybook/react";
import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

import { theme } from "../src";

import "@mantine/core/styles.layer.css";

export default {
  decorators: [
    (Story) => {
      const dark = useDarkMode();
      const { setColorScheme } = useMantineColorScheme();

      useEffect(() => {
        setColorScheme(dark ? "dark" : "light");
      }, [dark, setColorScheme]);

      return <Story />;
    },
    (Story) => {
      const dark = useDarkMode();

      return (
        <MantineProvider
          defaultColorScheme={dark ? "dark" : "light"}
          theme={theme}
        >
          <Story />
        </MantineProvider>
      );
    },
  ],
  parameters: {
    controls: {
      disableSaveFromUI: true,
      expanded: true,
    },
    layout: "centered",
  },
} satisfies Preview;
