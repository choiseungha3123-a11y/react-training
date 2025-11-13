import scode from "./scode.json" ;

export default function SubwayBox({item}) {
    console.log(item)
    console.log(Object.keys(scode))
  return (
    <div>
      <div>
        {item.office} {item.site} {item.city} {item.controlnumber}
      </div>
      <div>
        {
            Object.keys(scode).map(c => item[c])
        }
      </div>
    </div>
  )
}
