import {
  Box,
  Container,
  MantineProvider,
  useMantineColorScheme,
} from "@mantine/core";
import { Preview } from "@storybook/react";
import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

import { Center, Paper, theme } from "../src";

import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.layer.css";

import "../src/styles.css";

type Parameters = {
  preview?: {
    layout?: boolean;
  };
};

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
    (Story, context) => {
      const parameters = context.parameters as Parameters;
      const layout = parameters.preview?.layout ?? true;

      const dark = useDarkMode();

      return (
        <MantineProvider
          defaultColorScheme={dark ? "dark" : "light"}
          forceColorScheme="dark" // Only dark mode is supported at the moment
          theme={theme}
        >
          <Box h="100%" id="preview" w="100%">
            {layout ? (
              <Box h="100%" px="xl" py="xl" w="100%">
                <Container h="100%" w="100%">
                  <Paper h="100%" w="100%">
                    <Center>
                      <Story />
                    </Center>
                  </Paper>
                </Container>
              </Box>
            ) : (
              <Story />
            )}
          </Box>
        </MantineProvider>
      );
    },
  ],
  parameters: {
    controls: {
      disableSaveFromUI: true,
      expanded: true,
    },
    layout: "fullscreen",
  },
} satisfies Preview;
