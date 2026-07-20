import type { ComponentType, CSSProperties, JSX, ReactNode } from "react";

import { Box, Text } from "@mantine/core";
import { Fragment } from "react";

export type VariantsInput<P, K, V> = {
  align?: CSSProperties["alignItems"];
  component: ComponentType<P>;
  property: K;
  rest: JSX.IntrinsicAttributes & P;
  values: { label: string; value: V }[];
};

export function Variants<
  P,
  K extends keyof P,
  V extends Extract<P[K], ReactNode>,
>({
  align = "center",
  component: Component,
  property,
  rest,
  values,
}: VariantsInput<P, K, V>) {
  return (
    <Box
      style={{
        alignItems: align,
        display: "grid",
        gap: "var(--mantine-spacing-lg)",
        gridTemplateColumns: "auto auto",
      }}
    >
      {values.map(({ label, value }, index) => (
        <Fragment key={index}>
          <Text c="dimmed" fz="xs" ta="end">
            {label}
          </Text>
          <Component {...rest} {...{ [property]: value }} />
        </Fragment>
      ))}
    </Box>
  );
}
