import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import market from '../assets/market.png'
import { useState } from 'react'

export default function FoodCard({ data }) {
    const [isActive, setIsActive] = useState(false); // false면 접혀있는 상태, true면 펼쳐진 상태

    const handleClick = () => {
        setIsActive(!isActive); // false면 true로, true면 false로 변경       
    }
    return (
        <div className="w-full h-44  flex justify-start items-start
                    border border-gray-300
                    rounded-sm">
            <div className="w-1/5 px-5 py-2 flex justify-center">
                <img src={data['구분'] === "광역지원센터" ? busan :
                    data['구분'] === "푸드뱅크" ? bank : market}
                    alt={data['구분']}
                    className="w-9/10 h-1/2" />
            </div>
            <div className="w-4/5 h-full flex flex-col justify-between px-5 py-2">
                <div>
                    <h1 className="text-xl font-bold text-gray-700">
                        {data['사업장명']}
                    </h1>
                    <h2 className="text-lg font-bold text-gray-700">
                        {data['운영주체명']}
                    </h2>
                    <p className="text-md text-gray-500">
                        {data['사업장 소재지']}
                    </p>
                </div>
                <div className="w-full h-10 bg-blue-950 text-white cursor-pointer"
                    onClick={handleClick}>
                    {isActive &&
                        <ul className="w-9/10 flex flex-row justify-center items-start space-x-2">
                            <li className="flex"> ☎ : {data['연락처(대표번호)']}</li>
                            <li className="flex"> 📠 : {data['팩스번호']}</li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}