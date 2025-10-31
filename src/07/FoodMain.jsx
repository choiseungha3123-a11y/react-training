import FoodCard from "./FoodCard"
import Tailbutton from "../components/TailButton"
import fooddata from "./fooddata.json"
import { useState } from "react"

// 카테고리
// const categories = [
//   ...new Set(fooddata.map(item => item["운영주체 분류"].replaceAll(" ", "")))
// ] ;
// console.log("categories", categories)

export default function FoodMain() {
    const [foodData, setfoodData] = useState(fooddata);

    const handleshowAll = () => {
    console.log("all");
    setfoodData(fooddata);
    }

    const handleShowCategory = (ct) => {
    console.log(ct)
    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(" ", "") === ct) ;
    setfoodData(tm);
    }
  

  return (
    <div className="w-full h-full mt-10
                    flex flex-col justify-start items-center">
      <div className="w-9/10 border border-blue-300 p-5 my-5
                      flex justify-center items-center">
          <Tailbutton color="lime" caption="전체" onHandle={()=>{}} />
          {
          categories.map(item => <Tailbutton key={item} 
                                                  color="blue" 
                                                  caption={item} 
                                                  onHandle={()=> handleShowCategory(item)} />)
          }
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          { foodData.map((item, idx) => <FoodCard key={item["연락처(대표번호)"] + idx} 
          data={item} />) }
      </div>
    </div>
    )
}