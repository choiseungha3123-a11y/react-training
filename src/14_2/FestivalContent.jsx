import { useLocation, useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton";

export default function FestivalContent() {
    const location = useLocation();
    const contents = location.state.contents;
    console.log(contents)

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/festival');
    }

    const kakaoMapUrl = `https://map.kakao.com/link/map/${contents?.MAIN_PLACE.replace(',','').replace(' ','')},${contents?.LAT},${contents?.LNG}`;
    console.log(kakaoMapUrl)


    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-full text-2xl font-bold  p-5 mb-5">
                {contents.TITLE}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full h-90 rounded-2xl flex flex-col justify-start items-center overflow-hidden">
                    <img src={contents.MAIN_IMG_NORMAL} alt={contents.TITLE} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2 bg-white shadow-md rounded-lg">
                    <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-2 text-sm">
                        <div className="p-2 md:text-right">축제지역</div>
                        <div className="font-bold md:col-span-5  p-2">{contents.GUGUN_NM}</div>
                        <div className="p-2 md:text-right">주소</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.ADDR1}
                            <a href={kakaoMapUrl} target="_blank"
                                className="bg-amber-300 p-2 rounded-sm mx-4"
                            >카카오지도보기</a>
                        </div>
                        <div className="p-2 md:text-right">축제기간</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.USAGE_DAY_WEEK_AND_TIME}</div>
                        <div className="p-2 md:text-right">참가비</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.USAGE_AMOUNT}</div>
                        <div className="p-2 md:text-right">연락처</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.CNTCT_TEL}</div>
                        <div className="p-2 md:text-right">홈페이지</div>
                        <div className="font-bold md:col-span-5 p-2">
                            <a href={contents.HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
                                {contents.HOMEPAGE_URL}
                            </a>
                        </div>
                        <div className="p-2 md:text-right">오시는 길</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.TRFC_INFO}</div>
                        <div className="p-2 md:text-right">상세내용</div>
                        <div className="font-bold md:col-span-5 p-2">{contents.ITEMCNTNTS.replace(/\n\n\*\*.*?\*\*\n\d{4}\.\d{2}\.\d{2} ~ \d{2}\.\d{2}\n\n/, '')}</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <TailButton caption="목록으로" color="blue" onHandle={handleHome} />
            </div>

        </div>
    )
}
