import { useState } from "react"
import TailBall from "../components/TailBall"
import Tailbutton from "../components/Tailbutton"

export default function Lotto() {
  const [tags, setTags] = useState([]) // const [num, setNum] = useState(0)으로 해도 됨

  const handleClick = () => { // 버튼 클릭시 실행되는 함수
    let nums  = new Set([])  // 중복되지 않는 숫자를 저장하는 Set 객체 생성

    while (nums.size < 7) { // nums배열의 길이가 7보다 작을 때까지 반복 -> 로또 번호 7개 생성
      let n = Math.floor(Math.random()*45 + 1) ; // 1~45까지의 랜덤 숫자 생성
      // set에서 추가
      nums.add(n) ; // Set 객체에 숫자 추가 (중복된 숫자는 자동으로 제거됨)
      }

    nums = Array.from(nums); // Set 객체를 배열로 변환
    let bonus = nums.pop(); // 마지막 숫자를 보너스 번호로 분리

    nums.sort((a,b) => a-b) // 오름차순 정렬
    console.log(nums, bonus);

    // 태그 만들기
    let tm = nums.map(item => <TailBall n={item} key={item} />) // map함수를 사용하여 각 숫자에 대해 TailBall 컴포넌트를 생성
    tm = [...tm, <div className="w-20 h-20
                                  text-4xl font-bold       
                                  flex justify-center items-center"
                                  key="plus">+</div>] // 보너스 번호에 대한 TailBall 컴포넌트 추가
    tm = [...tm, <TailBall n={bonus} key={bonus} />] // 보너스 번호에 대한 TailBall 컴포넌트 추가

    setTags(tm) // 상태 업데이트 -> 화면에 태그들이 렌더링됨
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-24 space-x-4">
        {tags}
      </div>  
      <div className="mt-10">
        <Tailbutton color = "button"
                    caption="로또번호생성"
                    onHandle={handleClick}/>
      </div>
    </div>
  )
}
