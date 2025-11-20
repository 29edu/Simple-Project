import { useContext } from "react";
import { ClockContext } from "../../Context/clock/ClockContext";

export default function Second() {
  const seconds = useContext(ClockContext);

  return <h1>Clock 2: {seconds}</h1>;
}
