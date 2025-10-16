import { useState } from "react"
import Tailbutton from "../components/Tailbutton"

const BoxStyle = {
  blue : {
    on : "bg-blue-200",
    off : "bg-blue-100"
  },
  orange : {
    on : "bg-orange-200",
    off : "bg-orange-100" 
  },
  lime : {
    on : "bg-lime-200",
    off : "bg-lime-100"
  }
}

export default function Mytogglebox({color}) {
  const [isActive, setIsActive] = useState(false) ;
 
  const boxstyle = BoxStyle[color] ;

  const handleClick = () => {
    setIsActive(prev => !prev) ;
  }
  return (
    <div className={`w-full h-50 
                    flex flex-col justify-center items-center
                   ${isActive ? boxstyle.on : boxstyle.off}`}>
      <h1 className="text-xl font-bold mb-5">
        {color} 토글 박스
        </h1>
        <p className={`text-sm 
                      ${isActive ? "text-green-500" : "text-red-500"} 
                      font-bold mb-4`}>
          현재 상태 : {isActive ? "on" : "off"}
        </p>              
      <Tailbutton color={color} caption={color} onHandle={handleClick} />  
    </div>
  )
}
