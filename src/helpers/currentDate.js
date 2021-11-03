import * as dayjs from "dayjs";

export default function getCurrentDate() {
    return dayjs().format("HH:mm");
}