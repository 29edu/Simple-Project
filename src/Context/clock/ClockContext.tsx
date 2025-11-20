
import { createContext } from "react";

// 0 is the default value in the context and they are never used, only used when we forget the provider
// The actual value starts from the setState
export const ClockContext = createContext(0);