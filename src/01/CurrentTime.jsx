// export default function Hellodate () {
//     const divStyle = {
//         backgroundColor : "black",
//         color : "white",
//         padding : "10px"
//     }
//     return (
//         <div style={divStyle}>
//             현재시간 : 
//             <span style={{color : "yellow", fontWeight : "bold"}}>
//                 {new Date().toLocaleTimeString()}
//             </span>
//         </div>
//     )
// }
// export default function CuremtTime() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);
 
//   const H = time.getHours();
//   const M = time.getMinutes();
//   const S = time.getSeconds();

//   return (
//     <div>
//       <h1>{H}:{M}:{S}</h1>
//     </div>
//   );
// }
export default function CurrentTime() {
    let ct = new Date() ;
    return (
        <div className="w-1/3 bg-black text-white
                        text-center m-5 p-5
                        font-bold text-2xl">
            {ct.toLocaleTimeString()}
        </div>
    )
}