import TailCard from "../components/TailCard"
import { useRef, useEffect, useState } from "react"

export default function Festival() {
    const [tdata, setTdata] = useState([]);
    const [area, setArea] = useState([]);

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_API_KEY;
        const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
        let url = `${baseUrl}serviceKey=${apikey}`
        url = `${url}&pageNo=1&numOfRows=41&resultType=json`

        //console.log(url)

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    }

    useEffect(() => {
        getFetchData();
    },[]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-9/10 p-5 h-1/4
                          bg-amber-50
                          flex flex-col justify-center items-center">
                <h1 className="w-9/10 p-4 text-2xl font-bold text-center
                            text-blue-500">
                    부산축제정보🚤
                </h1>
            </div>
            <div className="mt-4 w-9/10 h-3/4 overflow-y-auto
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    tdata.map(item => <TailCard key={item.galContentId}
                        imgurl={item.MAIN_IMG_THUMB}
                        title={item.TITLE}
                        subtitle={item.SUBTITLE}
                        tag={item.USAGE_DAY_WEEK_AND_TIME}
                    />)
                }
            </div>
        </div>
    )
}
