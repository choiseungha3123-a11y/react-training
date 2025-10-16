const BALLCOLOR = [
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-purple-400',
  'bg-gray-400',
]

export default function TailBall({n}) {
  return (
    <div className={`w-20 h-20 rounded-full 
                    text-xl font-bold
                    text-white ${BALLCOLOR[Math.floor(n/10)]}
                    m-2
                    flex justify-center items-center`}>
        {n}

    </div>
  )
}
