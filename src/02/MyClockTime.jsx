export default function MyClockTime() {
    return (
        <div className="w-128 
                        text-center m-5 p-5
                        font-bold text-2xl">
            현재시각 : {new Date().toLocaleTimeString()}
        </div>
  )
}