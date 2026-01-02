"use client";

import {
  createPolymorphicComponent,
  Center as MantineCenter,
} from "@mantine/core";
import clsx from "clsx";

import type { BaseCenterInput, CenterInput } from "./types";

import classes from "./styles.module.css";

/** Center component that applies a safe centering style */
export const Center = createPolymorphicComponent<"div", BaseCenterInput>(
  function Center({ className, ...input }: CenterInput) {
    return (
      <MantineCenter className={clsx(classes.center, className)} {...input} />
    );
  },
);
