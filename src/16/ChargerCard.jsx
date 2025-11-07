
export default function ChargerCard({color, title, num}) {
    const bgColor = {
        "blue" : "bg-blue-100",
        "orange" : "bg-orange-100"
    }
  return (
    <div className={`w-full ${bgColor[color]}
                     border border-gray-200 rounded-md
                     flex flex-col justify-center items-center`}>
      <p className="text-sm text-gray-400">
        {title}
      </p>
      <p className="text-2xl font-bold">
        {num}
      </p>
    </div>
  )
}
