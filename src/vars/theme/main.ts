import {
  ActionIcon,
  Checkbox,
  CheckIcon,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Input,
  Loader,
  Notification,
  Pagination,
  Paper,
  Radio,
  Slider,
  Switch,
  ThemeIcon,
  Title,
} from "@mantine/core";

import checkboxClasses from "./Checkbox.module.css";
import loaderClasses from "./Loader.module.css";
import notificationClasses from "./Notification.module.css";
import paginationClasses from "./Pagination.module.css";
import paperClasses from "./Paper.module.css";
import radioClasses from "./Radio.module.css";
import sliderClasses from "./Slider.module.css";
import switchClasses from "./Switch.module.css";

export const theme = createTheme({
  autoContrast: true,
  colors: {
    dark: [
      "#fff4dc",
      "#ded3bd",
      "#bcb29e",
      "#9b907e",
      "#796f5f",
      "#584e40",
      "#44382c",
      "#3a2e23",
      "#30241a",
      "#2b2017",
    ],
    "ra-blue": [
      "#eaf5ff",
      "#d6e4f4",
      "#c2d3e9",
      "#aec3de",
      "#99b2d2",
      "#85a1c7",
      "#7190bc",
      "#5a7ba8",
      "#436793",
      "#2c527f",
    ],
    "ra-green": [
      "#e6fcf4",
      "#d1f1e5",
      "#bde6d7",
      "#a8dbc8",
      "#93d0b9",
      "#7fc5ab",
      "#6aba9c",
      "#53a487",
      "#3c8e71",
      "#25785c",
    ],
    "ra-red": [
      "#ffeae9",
      "#fbd2d1",
      "#f7bab8",
      "#f4a2a0",
      "#f08a88",
      "#ec726f",
      "#e85a57",
      "#cf3e3f",
      "#b72127",
      "#9e050f",
    ],
    "ra-yellow": [
      "#fffee1",
      "#fffdcb",
      "#fffbb4",
      "#fffa9e",
      "#fff887",
      "#fff771",
      "#fff55a",
      "#e4da3c",
      "#c8be1e",
      "#ada300",
    ],
  },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "default",
      },
    }),
    Checkbox: Checkbox.extend({
      classNames: {
        input: checkboxClasses.input,
      },
    }),
    Container: Container.extend({
      defaultProps: {
        px: 0,
        py: 0,
      },
    }),
    Input: Input.extend({
      defaultProps: {
        variant: "filled",
      },
    }),
    Loader: Loader.extend({
      classNames: {
        root: loaderClasses.root,
      },
    }),
    Notification: Notification.extend({
      classNames: {
        body: notificationClasses.body,
        icon: notificationClasses.icon,
        root: notificationClasses.root,
      },
    }),
    Pagination: Pagination.extend({
      classNames: {
        control: paginationClasses.control,
      },
      defaultProps: {
        py: "calc(.0625rem * var(--mantine-scale))",
      },
    }),
    Paper: Paper.extend({
      classNames: {
        root: paperClasses.root,
      },
      defaultProps: {
        p: "xl",
      },
    }),
    Radio: Radio.extend({
      classNames: {
        radio: radioClasses.radio,
      },
      defaultProps: {
        icon: CheckIcon,
        radius: 0,
      },
    }),
    Slider: Slider.extend({
      classNames: {
        label: sliderClasses.label,
        root: sliderClasses.root,
        thumb: sliderClasses.thumb,
      },
      defaultProps: {
        px: "calc(var(--slider-size) * 3.05)",
        py: "calc(2.25rem * var(--mantine-scale) + 0.525 * var(--mantine-spacing-xs) + 0.025 * var(--mantine-font-size-xs))",
        radius: 0,
        w: "100%",
      },
    }),
    Switch: Switch.extend({
      classNames: {
        track: switchClasses.track,
      },
      defaultProps: {
        radius: 0,
        withThumbIndicator: false,
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        variant: "default",
      },
    }),
    Title: Title.extend({
      defaultProps: {
        c: "var(--mantine-primary-color-text)",
      },
    }),
  },
  cursorType: "pointer",
  defaultGradient: {
    from: "ra-green.6",
    to: "ra-green.8",
  },
  defaultRadius: 0,
  fontFamily: '"Roboto", sans-serif',
  fontFamilyMonospace: '"Roboto Mono", monospace',
  luminanceThreshold: 0.33,
  primaryColor: "ra-green",
  primaryShade: 6,
  respectReducedMotion: true,
  shadows: {
    lg: "0.75rem -0.75rem var(--mantine-color-shadow)",
    md: "0.5rem -0.5rem var(--mantine-color-shadow)",
    sm: "0.25rem -0.25rem var(--mantine-color-shadow)",
    xl: "0.875rem -0.875rem var(--mantine-color-shadow)",
    xs: "0.125rem -0.125rem var(--mantine-color-shadow)",
  },
  variantColorResolver: (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);

    if (input.variant === "default") {
      return {
        ...defaultResolvedColors,
        background: "none",
        border: "none",
        hover: "none",
      };
    }

    return defaultResolvedColors;
  },
});
