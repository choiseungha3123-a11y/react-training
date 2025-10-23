import { useState, useEffect } from "react";

// 어제 날짜 가져오기
const getYesterday = () => {
  let yesterday = new Date() ;
  yesterday.setDate(yesterday.getDate() - 1) ;

  //ISO 형식(예: 2025-09-22T09:00:00.000Z)
  return yesterday.toISOString().slice(0, 10) ;
}

export default function BoxOffice() {
    const [boxOfficeList, setboxOfficeList] = useState([]);
    const [info, setInfo] = useState();

    const handleSelectDt = (e) => {
        let dt = e.target.value.replaceAll('-', '');
        getFetchData(dt);
    }

    const handleShowInfo = (mv) => {
        let tm = `[${mv.rankOldAndNew} : ${mv.openDt}] ${mv.movieNm} `;
        tm = `${tm} 상영한 스크린수 : ${parseInt(mv.scrnCnt).toLocaleString()} `;
        tm = `${tm} 상영횟수 : ${parseInt(mv.showCnt).toLocaleString()} `;

        setInfo(tm);
    }

    const getFetchData = (dt) => {
        const apiKey = import.meta.env.VITE_MV_API;
        const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;
        console.log(url)

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
                setboxOfficeList(boxOfficeList);
            })
            .catch(err => console.log(err));
    }

    //컴포넌트 생성시 1번만 실행
    useEffect(() => {
        let dt = getYesterday().replaceAll("-", "");  // let dt or const dt 둘다 사용가능
        getFetchData(dt);
    }, []);

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-9/10 text-2xl font-bold text-center p-5">
                일별 박스오피스
            </h1>
            <div className="w-9/10 flex justify-end">
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4
                           focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="date"
                    max={getYesterday()}
                    value={getYesterday()}
                    onChange={handleSelectDt} />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="col px-6 py-3 text-center">
                            순위
                        </th>
                        <th className="col px-6 py-3 text-center">
                            영화명
                        </th>
                        <th className="col px-6 py-3 text-right">
                            매출액
                        </th>
                        <th className="col px-6 py-3 text-right">
                            관객수
                        </th>
                        <th className="col px-6 py-3 text-right">
                            누적 매출액
                        </th>
                        <th className="col px-6 py-3 text-right">
                            누적 관객수
                        </th>
                        <th className="col px-6 py-3 text-center">
                            증감률
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {boxOfficeList.map(item =>
                        <tr key={item.movieCd}
                            onClick={() => handleShowInfo(item)}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                {item.rank}
                            </th>
                            <td className="px-6 py-4">
                                {item.movieNm}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.salesAmt).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.audiCnt).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.salesAcc).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.audiAcc).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-center font-bold">
                                {item.rankInten > 0 ? <span className="text-red-600">🔺{item.rankInten}</span>
                                    : item.rankInten < 0 ? <span className="text-red-600">🔻{item.rankInten}</span>
                                        : <span className="text-red-600">-</span>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full h-15 p-5 flex justify-center items-center
                                text-lg text-lime-500 font-bold mt-4
                                border border-gray-400 rounded-sm">
                {info}
            </div>
        </div>

    )
}
