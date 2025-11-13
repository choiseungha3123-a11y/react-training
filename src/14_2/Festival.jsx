import TailCard from "../components/TailCard"
import { useRef, useEffect, useState, use } from "react"
import { Link } from "react-router-dom";

import { Suspense } from "react";

import { useAtom } from "jotai";
import { festivalFetchData, selGuAtom } from "./atomFestival";

export default function Festival() {
  return (
  <Suspense fallback="<div>로딩중...</div>">
    <FestivalContent />
  </Suspense>
  );
}




function FestivalContent() {
    const [tdata] = useAtom(festivalFetchData);
    const [gu, selGu] = useAtom(selGuAtom);
    const [area, setArea] = useState([]);
    const [areaFestival, setAreaFestival] = useState([]);
    const selRef = useRef();

    const handleChange = () => {
        selGu(selRef.current.value);
    }

    useEffect(() => {
        if (!gu) {
            setAreaFestival([]);
        } else {
            let tm = tdata.filter(item => item.GUGUN_NM == gu);
            setAreaFestival(tm);
        }
    }, [gu, tdata])

    useEffect(() => {
        if (tdata.length == 0) return;

        let tm = tdata.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();
        tm = tm.map(item => <option key={item}
            value={item}>
            {item}
        </option>)
        setArea(tm)
    }, [tdata]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center  bg-blue-50">
            <div className="w-9/10 p-5 h-1/4                        
                          flex flex-col justify-center items-center">
                <h1 className="w-9/10 p-4 text-2xl font-bold text-center
                            text-blue-500">
                    부산축제정보🚤
                </h1>

                <div className="w-9/10 flex flex-col items-center">
                    <select name="sel1"
                            ref={selRef}
                            value={gu}
                            className="block py-2.5 px-0 w-full md:w-1/2 lg:w-1/3 text-sm bg-white text-gray-500 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            onChange={handleChange}
                    >
                        <option value="">지역선택🔽</option>
                        {area}
                    </select>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {
                    areaFestival.map((item, idx) => <Link to="/festival/contents"
                        state={{ contents: item }}
                        key={item.UC_SEQ + idx}>
                        <TailCard key={item.UC_SEQ}
                                    imgurl={item.MAIN_IMG_THUMB}
                                    title={item.TITLE}
                                    subtitle={<>{item.SUBTITLE}<br /><br />{item.TRFC_INFO}</>}
                                    tag={item.USAGE_DAY_WEEK_AND_TIME}
                        />
                    </Link>
                    )
                }
            </div>
        </div>
    )
}
