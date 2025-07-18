import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(weekday);

export default dayjs;
export type { Dayjs };
