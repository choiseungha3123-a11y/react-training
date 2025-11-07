import zcode from "./data/zcode.json"
import zscode from "./data/zscode.json"
import kind from "./data/kind.json"
import kinddetail from "./data/kinddetail.json"
import stat from "./data/stat.json"

import TailSelect from "../components/TailSelect"
import Tailbutton from "../components/TailButton"
import ChargerCard from "./ChargerCard"

import Loadercat from "../animation_img/Loadercat.json"
import Lottie from 'react-lottie';

import { useEffect, useRef, useState } from "react"

export default function ChargerInfo() {
  // Lottie 애니메이션 설정
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loadercat,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  // 상태변수
  const [tdata, setTdata] = useState([])
  const [zsc, setZsc] = useState(null)
  const [kdd, setKdd] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // select 박스
  const sel1Ref = useRef()
  const sel2Ref = useRef()
  const sel3Ref = useRef()
  const sel4Ref = useRef()

  // 데이터 가져오기
  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const baseUrl = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?`;
    let url = `${baseUrl}serviceKey=${apikey}`;
    url = `${url}&numOfRows=100&pageNo=1`;
    url = `${url}&zcode=${sel1Ref.current.value}&zscode=${sel2Ref.current.value}`;
    url = `${url}&kind=${sel3Ref.current.value}&kinddetail=${sel4Ref.current.value}`;
    url = `${url}&dataType=JSON`;

    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.items.item);
    console.log(data);
    setIsLoading(false);
    console.log(url)
  }


  // 구/군/시 선택
  const handleZcode = () => {
    setZsc(null);
    setTdata([]);
    setIsLoading(false);

    if (sel1Ref.current.value === "")
      setZsc(null);
    else
      setZsc(zscode[sel1Ref.current.value]);
  }

  // 상세종류 선택
  const handlekcode = () => {
    setKdd(null);
    setTdata([]);
    setIsLoading(false);

    console.log(sel3Ref.current.value, kinddetail[sel3Ref.current.value])
    if (sel3Ref.current.value === "")
      setKdd(null);
    else
      setKdd(kinddetail[sel3Ref.current.value]);
  }

  // 초기화 버튼
  const handleCancel = () => {
    sel1Ref.current.value = "";
    sel2Ref.current.value = "";
    sel3Ref.current.value = "";
    sel4Ref.current.value = "";

    setZsc(null);
    setKdd(null);
    setTdata([]);
    setIsLoading(false);
  };

  // 검색 버튼
  const handleSearch = () => {
    if (sel1Ref.current.value === "") {
      alert("시도를 선택하세요");
      sel1Ref.current.focus();
      return;
    }
    if (sel2Ref.current.value === "") {
      alert("구/군/시를 선택하세요");
      sel2Ref.current.focus();
      return;
    }
    if (sel3Ref.current.value === "") {
      alert("시설종류를 선택하세요");
      sel3Ref.current.focus();
      return;
    }
    if (sel4Ref.current.value === "") {
      alert("상세종류를 선택하세요");
      sel4Ref.current.focus();
      return;
    }
    
    setTdata([]) ;
    setIsLoading(false) ;
    getFetchData() ;

  }

  // fetch가 완료되면
  useEffect(() => {
    if (tdata.length == 0) return;

    console.log(tdata)
  }, [tdata]);


  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <h1 className="w-full text-2xl font-bold p-5 mb-4 text-left">
        전기차 충전소 정보
      </h1>
      <div className="w-full h-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 bg-lime-50">
        <TailSelect id='sel1'
                    ref={sel1Ref}
                    title='시도'
                    opk={Object.keys(zcode)}
                    opv={Object.values(zcode)}
                    onHandle={handleZcode} />
        <TailSelect id='sel2'
                    title='구/군/시'
                    ref={sel2Ref}
                    opk={zsc ? Object.values(zsc) : ""}
                    opv={zsc ? Object.keys(zsc) : ""}
                    onHandle={() => { }} />
        <TailSelect id='sel3'
                    title='시설종류'
                    ref={sel3Ref}
                    opk={Object.keys(kind)}
                    opv={Object.values(kind)}
                    onHandle={handlekcode} />
        <TailSelect id='sel4'
                    title='상세종류'
                    ref={sel4Ref}
                    opk={kdd ? Object.values(kdd) : ""}
                    opv={kdd ? Object.keys(kdd) : ""}
                    onHandle={() => { }} />

        <Tailbutton caption="검색" color="blue" onHandle={handleSearch} />
        <Tailbutton caption="초기화" color="gray" onHandle={handleCancel} />
      </div>
      {
        (tdata.length != 0) && 
        <div className="w-full h-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mt-5">
          <ChargerCard color="orange" title="충전소 개수" num={tdata.length} />
          {
            Object.keys(stat).map(scode => <ChargerCard key={stat[scode]+scode}
                                                        color="blue" 
                                                        title={stat[scode]}
                                                        num={tdata.filter(item => item.stat == scode).length} />)
          }

        </div>
      }
      {
        isLoading &&
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-80 z-50">
          <div className="w-1/4 max-w-xs h-64 flex-shrink-0">
            <Lottie options={defaultOptions} />
          </div>
          <p className="text-2xl text-gray-700 font-bold p-5 mb-4 text-center">
            고양이가 충전소를 찾는중...
          </p>
        </div>
      }
    </div>
  )
}
