import MyDiv3 from "./MyDiv3"
// export default function MyDiv2(props) {
export default function MyDiv2({dv1, dv2, dv3}) {
  return (
    <div className="w-full md:w-9/10 h-9/10 bg-green-700 text-white
                    text-2xl font-bold m-10 p-10
                    flex flex-col justify-start items-start">
      {/* <h1>{props.dv1} &gt; {props.dv2}</h1>
      <MyDiv3 d1={props.dv1} d2={props.dv2} d3={props.dv3}/> */}

      <h1>{dv1} &gt; {dv2}</h1>
      <MyDiv3 d1={dv1} d2={dv2} d3={dv3}/>
    </div>
  )
}
