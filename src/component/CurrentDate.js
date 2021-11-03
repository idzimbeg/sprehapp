import { getCurrentDate } from "../helpers";

export default function CurrentDate() {
  return <p>{getCurrentDate()}</p>;
}
