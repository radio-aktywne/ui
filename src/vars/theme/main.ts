"use client";

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

import { constants } from "../../constants";
import checkboxClasses from "./Checkbox.module.css";
import loaderClasses from "./Loader.module.css";
import notificationClasses from "./Notification.module.css";
import paginationClasses from "./Pagination.module.css";
import paperClasses from "./Paper.module.css";
import radioClasses from "./Radio.module.css";
import sliderClasses from "./Slider.module.css";
import switchClasses from "./Switch.module.css";

export const theme = createTheme({
  autoContrast: constants.theme.autoContrast,
  colors: constants.theme.colors,

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

  cursorType: constants.theme.cursorType,
  defaultGradient: constants.theme.defaultGradient,
  defaultRadius: constants.theme.defaultRadius,
  fontFamily: constants.theme.fontFamily,
  fontFamilyMonospace: constants.theme.fontFamilyMonospace,
  luminanceThreshold: constants.theme.luminanceThreshold,
  primaryColor: constants.theme.primaryColor,
  primaryShade: constants.theme.primaryShade,
  respectReducedMotion: constants.theme.respectReducedMotion,
  shadows: constants.theme.shadows,

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
