import { useState, useEffect } from "react"
export default function MyClockTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId)
    }, []);
    return (
        <div className="w-128 bg-black  text-white
                        text-center m-5 p-5 rounded-xl
                        font-bold text-2xl">
            현재시각 : {currentTime.toLocaleTimeString()}
        </div>
  )
}