import TrafficNav from "./TrafficNav"
import TrafficInfo from "./TrafficInfo";

import { useState, useEffect } from "react"

export default function Traffic() {
  //전체데이터
  const [tdata, setTdata] = useState([]) ;

  //대분류데이터
  const [c1, setC1] = useState([]) ;
  const [selectC1, setSelectC1] = useState() ;

  //중분류데이터
  const [c2, setC2] = useState([]) ;
  const [selectC2, setSelectC2] = useState() ;

  //사고데이터
  const [tInfo, setTinfo] = useState([]) ;

  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

         const baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&service';
         let url = `${baseUrl}Key=${apiKey}`;
         console.log(url)

         const resp = await fetch(url);
         const data = await resp.json();
         setTdata(data.data) ;
  }

  useEffect(() => {
    getFetchData() ;
  } , []); // useEffect('~', []) 컴포넌트 처음 한 번만 실행 | useEffect('~', [tdata]) tdata가 바뀔 때마다 실행

  //대분류
  useEffect(()=>{
    console.log(tdata)
    if (tdata.length == 0) return  ;

    let tm = tdata.map( item => item["사고유형대분류"]) ;
    tm = [...new Set(tm)] ; // ...은 배열이나 객체의 내용을 전개
    setC1(tm) ; // 상태 변수 C1의 값을 tm으로 바꾸고, 그 상태를 사용하는 컴포넌트가 다시 렌더링(re-rendering) 화면에 C1을 이용하는 부분이 있다면 tm 값으로 업데이트되어 새로 표시

    console.log(tm)
  }, [tdata]); 

  //중분류
  useEffect(() => {
    console.log("대분류 ", selectC1)
    if (c1.length == 0) return  ;

    let tm = tdata.filter( item => item["사고유형대분류"] == selectC1)
    tm = tm.map(item => item["사고유형중분류"]) ;
    tm = [...new Set(tm)] ;
    setC2(tm) ;
    setTinfo([]) ;

    console.log(tm)
  } , [selectC1]) ;

  //사고자료
  useEffect(() => {
    if (!selectC1 || !selectC2 ) return ;
    let tm = tdata.filter( item => item["사고유형대분류"] == selectC1 && 
                                    item["사고유형중분류"] ==  selectC2
    )

    setTinfo(tm);

  } , [selectC2])

  //사고 데이터가 결정되면
  useEffect(() => {
    console.log(tInfo)
  } , [tInfo]) ;

  return (
    <div className="w-full flex flex-col justify-start items-center mt-10">
      { c1 && 
        <TrafficNav title="대분류" category = {c1}  selectC= {selectC1} setSelectC={setSelectC1}/> 
      }
      { c2 && 
        <TrafficNav title="중분류" category = {c2}  selectC= {selectC2} setSelectC={setSelectC2}/> 
      }
      {
        tInfo && tInfo.map(item => <TrafficInfo key={item["도로종류"]} 
                                                        infoData = {item} />)
        
      }
    </div>
  )
}