import { useEffect, useState } from "react";
import { ClockContext } from "./ClockContext.tsx";


type ChildrenProps = {
    children: React.ReactNode;
}

export function ClockProvider({children} : ChildrenProps) {
    const [seconds, setSeconds] = useState<number>(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return(
        <ClockContext.Provider value={seconds}>
            {children}
        </ClockContext.Provider>
    )
}