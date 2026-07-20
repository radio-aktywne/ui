"use client";

import {
  ActionIcon,
  Checkbox,
  CheckboxIndicator,
  CheckIcon,
  Container,
  createTheme,
  defaultVariantColorsResolver,
  Input,
  Loader,
  Modal,
  Notification,
  Pagination,
  Paper,
  parseThemeColor,
  Radio,
  RadioIndicator,
  rem,
  Slider,
  Switch,
  ThemeIcon,
  Title,
} from "@mantine/core";

import { constants } from "../../constants";
import checkboxClasses from "./Checkbox.module.css";
import checkboxIndicatorClasses from "./CheckboxIndicator.module.css";
import loaderClasses from "./Loader.module.css";
import modalClasses from "./Modal.module.css";
import notificationClasses from "./Notification.module.css";
import paginationClasses from "./Pagination.module.css";
import paperClasses from "./Paper.module.css";
import radioClasses from "./Radio.module.css";
import radioIndicatorClasses from "./RadioIndicator.module.css";
import sliderClasses from "./Slider.module.css";
import switchClasses from "./Switch.module.css";

export const theme = createTheme({
  autoContrast: constants.theme.autoContrast,
  colors: constants.theme.colors,

  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "transparent",
      },
    }),

    Checkbox: Checkbox.extend({
      classNames: {
        icon: checkboxClasses.icon,
        input: checkboxClasses.input,
      },
    }),

    CheckboxIndicator: CheckboxIndicator.extend({
      classNames: {
        icon: checkboxIndicatorClasses.icon,
        indicator: checkboxIndicatorClasses.indicator,
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

    Modal: Modal.extend({
      classNames: {
        content: modalClasses.content,
        header: modalClasses.header,
        title: modalClasses.title,
      },

      defaultProps: {
        centered: true,

        overlayProps: {
          backgroundOpacity: 0.5,
          blur: 10,
        },

        shadow: "md",
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
        icon: radioClasses.icon,
        radio: radioClasses.radio,
      },

      defaultProps: {
        icon: CheckIcon,
        radius: 0,
      },
    }),

    RadioIndicator: RadioIndicator.extend({
      classNames: {
        icon: radioIndicatorClasses.icon,
        indicator: radioIndicatorClasses.indicator,
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
    const parsed = parseThemeColor({ color: input.color, theme: input.theme });
    const resolved = defaultVariantColorsResolver(input);

    if (input.variant === "default") {
      resolved.border = `${rem(1)} solid transparent`;
    } else if (
      input.variant === "light" &&
      parsed.isThemeColor &&
      parsed.shade === undefined
    ) {
      resolved.color = `var(--mantine-color-${parsed.color}-text)`;
    } else if (
      input.variant === "outline" &&
      parsed.isThemeColor &&
      parsed.shade === undefined
    ) {
      resolved.border = `${rem(1)} solid var(--mantine-color-${parsed.color}-filled)`;
      resolved.color = `var(--mantine-color-${parsed.color}-filled)`;
    } else if (
      input.variant === "subtle" &&
      parsed.isThemeColor &&
      parsed.shade === undefined
    ) {
      resolved.color = `var(--mantine-color-${parsed.color}-text)`;
    } else if (
      input.variant === "transparent" &&
      parsed.isThemeColor &&
      parsed.shade === undefined
    ) {
      resolved.color = `var(--mantine-color-${parsed.color}-filled)`;
    }

    return resolved;
  },
});
