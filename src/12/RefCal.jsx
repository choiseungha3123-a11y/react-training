import Tailbutton from "../components/TailButton";
import { useRef, useEffect } from "react";


export default function RefCal() {
    // input 요소 ref 연결
    const txt1Ref = useRef() ;
    const txt2Ref = useRef() ;
    const txt3Ref = useRef() ;
    const opRef = useRef() ;

    //첫번째 input에 포커스가 놓이면
    const handleTxt1 = (e) => {
        txt1Ref.current.value = "" ;
        txt2Ref.current.value = "" ;
        txt3Ref.current.value = "" ;
        opRef.current.value = "+" ;
    }
    //버튼이 눌러지면
    const handleClick = (e) => {
        e.preventDefault() ;  
        
        let num1 = txt1Ref.current?.value ?? "" ;
        let num2 = txt2Ref.current?.value ?? "" ;

        let op = opRef.current?.value ?? "+" ;

        let num3 = 0 ;
        switch (op) {
            case "+" : num3 = Number(num1) + Number(num2) ; break ;
            case "-" : num3 = Number(num1) - Number(num3) ; break ;
            case "*" : num3 = Number(num1) * Number(num3) ; break ;
            case "/" : Number(num2) == 0 ? num3 = "오류" : num3 = Number(num1) / Number(num3) ; break ;
        }

        txt3Ref.current.value = num3 ;
    }

    // 컴포넌트가 생성
    useEffect(() => {
        txt1Ref.current.focus() ;
    }, [])

  return (
    <div className="w-full h-full flex justify-center items-center mt-20">
      <form className="w-9/10 flex justify-center bg-amber-100 p-5">
        <input type="number" name="txt1"
                    onFocus={handleTxt1}
                    ref={txt1Ref}
                    className="p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 border text-base "/>
        <select     ref={opRef}
                    className="p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 border text-base ">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="txt2"
                    ref={txt2Ref} 
                    className="p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 border text-base "/>
        
        <Tailbutton color="blue"
                    caption="="
                    onHandle={handleClick} />
        <input type="text" name="txt3" readOnly
                    ref={txt3Ref} 
                    className="p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 border text-base "/>
        </form>
    </div>
  )
}
