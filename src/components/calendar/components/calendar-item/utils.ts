import type { Dayjs } from "dayjs";

export function splitIntoDailyParts(start: Dayjs, end: Dayjs) {
  const startMidnight = start.startOf("day");
  const endMidnight = end.startOf("day");

  const daysDifference = endMidnight.diff(startMidnight, "day");

  const numberOfMidnightsBetween = end.isSame(endMidnight)
    ? Math.max(daysDifference - 1, 0)
    : daysDifference;
  const midnightsBetween = [...Array(numberOfMidnightsBetween).keys()].map(
    (i) => startMidnight.add(i + 1, "day"),
  );

  const splits = [start, ...midnightsBetween, end];

  return splits.slice(0, -1).map((split, i) => ({
    end: splits[i + 1]!,
    start: split,
  }));
}
