import { Box, Text } from "@mantine/core";
import { ComponentType, Fragment, ReactNode } from "react";

export type TypesetInput<P, K, V> = {
  component: ComponentType<P>;
  property: K;
  rest: JSX.IntrinsicAttributes & P;
  values: { label: string; value: V }[];
};

export function Typeset<
  P,
  K extends keyof P,
  V extends Extract<P[K], ReactNode>,
>({ component: Component, property, rest, values }: TypesetInput<P, K, V>) {
  return (
    <Box
      style={{
        alignItems: "baseline",
        display: "grid",
        gap: "var(--mantine-spacing-md)",
        gridTemplateColumns: "auto auto",
      }}
    >
      {values.map(({ label, value }, index) => (
        <Fragment key={index}>
          <Text c="dimmed" fz="xs" ta="end">
            {label}
          </Text>
          <Component
            style={{
              overflow: "hidden",
              textAlign: "start",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            {...{ [property]: value }}
            {...rest}
          />
        </Fragment>
      ))}
    </Box>
  );
}
