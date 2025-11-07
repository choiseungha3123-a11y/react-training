import JotaiBt from "./JotaiBt"
import { useState, useEffect } from "react"


export default function JotaiCnt() {
    const [cnt, setCnt] = useState(0)
    const [dbcnt, setDbCnt] = useState(0)

    useEffect(() => {
        setDbCnt(cnt * 2)
    }, [cnt])


    return (
        <div className='w-full max-w-3xl mx-auto'>
            <h1 className="mt-10 text-3xl font-bold text-center">
                전역 상태관리
            </h1>

            <div className='w-full bg-amber-50 border-amber-300
                            flex flex-col justify-start items-center
                            p-4 my-8 text-2xl font-bold'>
                <div>
                    count : {cnt}
                </div>
                <div>
                    double count : {dbcnt}
                </div>
            </div>
            <JotaiBt cnt={cnt} setCnt={setCnt} />
           
        </div>
    )
}
