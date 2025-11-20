import { useContext } from "react";
import { ClockContext } from "../../Context/clock/ClockContext";

export default function First() {
  const seconds = useContext(ClockContext); // access context value

  return <h1>Clock 1: {seconds}</h1>;
}
