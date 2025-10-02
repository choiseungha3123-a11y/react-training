export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-full md:w-9/10 h-9/10 bg-green-500 text-amber-900
                    text-2xl font-bold m-10 p-10
                    flex flex-col justify-center items-start">
      <h1>{d1} &gt; {d2} &gt; {d3}</h1>
    </div>
  )
}