// 1. useState를 import 한다.   
import { useState } from "react";
export default function MyListCard({title, imgUrl, content}) {
    //2. useState를 선언한다.
    const [scnt , setScnt] = useState(0); // cnt는 변수, setScnt는 cnt를 변경하는 함수 변수의 초깃값 0을 넣어준다.
    const [dcnt , setDcnt] = useState(0); // cnt는 변수, setDcnt는 cnt를 변경하는 함수 변수의 초깃값 0을 넣어준다.  
    let cnt = 0; 
    const handleClick = () => {
        cnt = cnt + 1; // cnt++ 도 가능 // cnt는 변수이기 때문에 화면에 업데이트 되지 않는다.   
        setScnt(scnt + 1); // setScnt를 호출할 때마다 cnt가 +1씩 변경된다.   
        console.log(`${title} click : ${cnt}`) // UseState(장치)를 사용하지 않으면 화면에 업데이트 되지 않음.
    }
    
    const handleClick2 = () => {
        setDcnt(dcnt + 2); // setDcnt를 호출할 때마다 cnt가 +2씩 변경된다.  
    }

    return (
    <div className="w-full flex justify-start items-start 
                    p-5
                    border-1 border-gray-400">
        <div className="w-1/3">
            <img src={imgUrl} alt={title} />
        </div>
        <div>
        <div className="w-2/3 h-44 flex flex-col justify-between">
            <div>
                <h1 className="font-bold text-2xl p-1">{title}</h1>
                <p className="text-gray-500">{content}</p>
            </div>
        </div>
            <div className="font-bold">
             <div className="flex justify-center items-baseline cursor-pointer hover:text-red-500"
                 onClick={handleClick}> 
                 ❤ 좋아요 {scnt}
             </div>
             <div className="flex justify-center items-baseline cursor-pointer hover:text-red-500"
                 onClick={handleClick2}> 
                 💀 싫어요 {dcnt}
             </div>  
            </div>
        </div>
    </div>
  ) 
}
