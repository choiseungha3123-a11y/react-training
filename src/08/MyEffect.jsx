import { useState, useEffect } from "react"
import Tailbutton from "../components/TailButton";

export default function Myeffect() {
  const [isActive, setisActive] = useState([]);
  const [tag, setTag] = useState([]);

  const handleClick = () => {
    setisActive(!isActive) ;
    console.log("handleClick" , isActive);
  }

  const handleShow = () => {
    if (isActive) 
      setTag(<h1>상태 on</h1>) ;
     else 
      setTag(<h1>상태 off</h1>) ;
  }

  useEffect(() => {
    // 컴포넌트 생성시 한번 실행
  console.log("컴포넌트가 생성");
  }, []);

  useEffect(() => {
    // state값이 변경될 때
   console.log("useEffect 상태가 변경될 때", isActive);
  });

  useEffect(() => {
    //상태가 변경될때 마다
    console.log("useEffect 상태가 변경될 때", isActive);
    });

  return (
    <div className="w-full h-full flex justify-center items-center">
        {
           isActive ? <Tailbutton color="blue" caption="useEffect" onHandle={handleClick} />
                    : <Tailbutton color="orange" caption="useEffect" onHandle={handleClick} />        
        }
        <Tailbutton color="lime" caption="태그변경" onHandle={handleShow} />
    </div>
  )
}
