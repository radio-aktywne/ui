import { createPolymorphicComponent, Grid as MantineGrid } from "@mantine/core";
import { clsx } from "clsx";

import type {
  BaseMasterDetailLayoutInput,
  MasterDetailLayoutInput,
} from "./types";

import classes from "./styles.module.css";

/** Layout with master and detail panels */
export const MasterDetailLayout = createPolymorphicComponent<
  "div",
  BaseMasterDetailLayoutInput
>(function MasterDetailLayout({
  classNames,
  columns = 12,
  grow = true,
  gutter = "md",
  justify = "center",
  ...input
}: MasterDetailLayoutInput) {
  return (
    <MantineGrid
      classNames={{
        col: clsx(
          classes.col,
          classNames && "col" in classNames && classNames.col,
        ),
        container: clsx(
          classes.container,
          classNames && "container" in classNames && classNames.container,
        ),
        inner: clsx(
          classes.inner,
          classNames && "inner" in classNames && classNames.inner,
        ),
        root: clsx(
          classes.root,
          classNames && "root" in classNames && classNames.root,
        ),
      }}
      columns={columns}
      grow={grow}
      gutter={gutter}
      justify={justify}
      {...input}
    />
  );
});
