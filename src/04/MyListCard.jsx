
export default function MyListCard({title, imgUrl, content}) {
    
    return (
    <div className="w-full flex justify-start items-start 
                    p-5
                    border-1 border-gray-400">
        <div className="w-1/3">
            <img src={imgUrl} alt={title} />
        </div>
        <div>
        <div className="w-2/3 h-44 flex flex-col justify-between">
            <div>
                <h1 className="font-bold text-2xl p-1">{title}</h1>
                <p className="text-gray-500">{content}</p>
            </div>
        </div>
        <div>
            <div className="flex justify-end font-bold">❤ 좋아요 0</div>
        </div>
        </div>
    </div>
  )
}
