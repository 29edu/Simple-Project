import { useContext } from "react";
import { ClockContext } from "../../Context/clock/ClockContext";

export default function Third() {
  const seconds = useContext(ClockContext);

  return <h1>Clock 3: {seconds}</h1>;
}
