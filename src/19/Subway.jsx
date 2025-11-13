import sarea from "./sarea.json"
import scode from "./scode.json"
import SubwayBox from "./SubwayBox"

import TailSelect from "../components/TailSelect"
import { useRef, useState } from "react"

export default function Subway() {
    const selRef = useRef()
    const [data, setData] = useState([])
    let dt = new Date().toISOString().slice(0, 10).replace('-', '') ;

    const getFetchData = async () => {
        // http://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=인증키&pageNo=1&numOfRows=5&resultType=JSON&controlnumber=날짜시간&areaIndex=201193
        const apikey = import.meta.env.VITE_API_KEY;
        const baseUrl = '/6260000/IndoorAirQuality/getIndoorAirQualityByStation?'
        let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=5&resultType=JSON&controlnumber=${dt}&areaIndex=${selRef.current.value}`

        console.log(url)
        const resp = await fetch(url)
        const data = await resp.json()
       
        let tm = data.response.body.items.item ;
        tm = tm.sort((a, b) => {})

        setData(tm) ;
    }

    const handleSelect = () => {
        console.log(selRef.current.value)
        if(!selRef.current.value ) return ;
        getFetchData();
    }

    return (
        <div className="w-9/10 flex flex-col justify-start mt-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <h1 className="w-full p-5 text-2xl font-bold text-center">
                    부산 실내공기질 정보
                </h1>
                <TailSelect id="selArea"
                    ref={selRef}
                    title="부산지하철역"
                    opk={sarea.map(item => item["코드"])}
                    opv={sarea.map(item => item["측정소"])}
                    onHandle={handleSelect} />
            </div>
            {/* <SubwayBox /> */}
        </div>
    )
}
