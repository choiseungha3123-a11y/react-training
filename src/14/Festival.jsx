import TailCard from "../components/TailCard"
import { useRef, useEffect, useState } from "react"

export default function Festival() {
    const [tdata, setTdata] = useState([]);
    const [area, setArea] = useState([]);
    const [areaFestival, setAreaFestival] = useState([]);
    const selRef = useRef();

    const handleChange = () => {
        if (selRef.current.value == "") {
            setAreaFestival([]);
            return;
        }

        let tm = tdata.filter(item => item.GUGUN_NM == selRef.current.value);
        setAreaFestival(tm);
    }

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_API_KEY;
        const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
        let url = `${baseUrl}serviceKey=${apikey}`
        url = `${url}&pageNo=1&numOfRows=41&resultType=json`

        //console.log(url)

        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.getFestivalKr.item);
    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if (tdata.length == 0) return; // tdata에 아무것도 없을시 return

        let tm = tdata.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)];
        tm = tm.map(item => <option key={item}
            value={item}>
            {item}
        </option>)
        setArea(tm);
    }, [tdata]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center  bg-blue-50">
            <div className="w-9/10 p-5 h-1/4                        
                          flex flex-col justify-center items-center">
                <h1 className="w-9/10 p-4 text-2xl font-bold text-center
                            text-blue-500">
                    부산축제정보🚤
                </h1>
            </div>
            <div className="w-9/10 flex flex-col items-center">
                <select name="sel1"
                    ref={selRef}
                    className="block py-2.5 px-0 w-full md:w-1/2 lg:w-1/3 text-sm bg-white text-gray-500 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    onChange={handleChange}
                >
                    <option value="">지역선택🔽</option>
                    {area}
                </select>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {
                        areaFestival.map(item => <TailCard key={item.UC_SEQ}
                            imgurl={item.MAIN_IMG_THUMB}
                            title={item.MAIN_TITLE.replace('(한,영, 중간,중번,일)', '')}
                            subtitle={item.TITLE + item.TRFC_INFO}
                            tag={item.USAGE_DAY_WEEK_AND_TIME}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}
