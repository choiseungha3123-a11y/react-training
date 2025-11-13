import { useLocation, useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton"

export default function ChargerDetail() {
    const location = useLocation();
    // 데이터가 없을 경우를 대비해 안전하게 접근
    const contents = location.state?.contents;

    const navigate = useNavigate();
    const handleHome = () => {
    navigate(`/chargerinfo`);
  }

    // 데이터가 제대로 넘어오지 않았을 경우 처리
    if (!contents) {
        return (
            <div className="w-full flex flex-col justify-start items-center p-10">
                <h1 className="text-2xl font-bold text-red-600">오류: 충전소 정보를 찾을 수 없습니다.</h1>
                <p className="mt-4 text-gray-600">검색 페이지로 돌아가 다시 시도해주세요.</p>
                <div className="w-full flex justify-center items-center mt-5">
                    <TailButton caption="검색페이지로" color="blue" onHandle={handleHome} />
                </div>
            </div>
        );
    }

    // API 필드명 (lat, lng)을 사용하여 카카오맵 URL 생성
    const kakaoMapUrl = `https://map.kakao.com/link/map/${contents.statNm},${contents.lat},${contents.lng}`;

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-full text-2xl font-bold p-5 mb-5">
                {contents.statNm}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 이미지를 표시할 필드가 API 데이터에 없으므로, 상세 정보 섹션만 표시합니다. */}
                <div className="md:col-span-3 bg-white shadow-md rounded-lg p-6">
                    <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-2 text-sm">
                        <div className="p-2 md:text-right font-semibold">충전소명</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.statNm}</div>

                        <div className="p-2 md:text-right font-semibold">주소</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.addr}</div>

                        <div className="p-2 md:text-right font-semibold">상세주소</div>
                        <div className="font-bold md:col-span-5 p-2">
                            {contents.addrDetail}
                            <a href={kakaoMapUrl} target="_blank" rel="noopener noreferrer"
                                className="bg-amber-300 p-2 rounded-sm mx-4 font-normal hover:bg-amber-400 transition"
                            >카카오지도보기</a>
                        </div>

                        <div className="p-2 md:text-right font-semibold">사용가능 시간</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.useTime}</div>

                        <div className="p-2 md:text-right font-semibold">운영기관 전화번호</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.busiCall}</div>

                        <div className="p-2 md:text-right font-semibold">운영기관</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.busiNm}</div>

                        <div className="p-2 md:text-right font-semibold">충전 방식</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.method}</div>

                        <div className="p-2 md:text-right font-semibold">충전기 제조사</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.maker}</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <TailButton caption="목록으로" color="blue" onHandle={handleHome} />
            </div>
        </div>
    )
}