import Tailbutton from "../components/TailButton"

export default function TrafficNav({title, category, selectC, setSelectC}) {
  return (
    <div className='w-full h-20 flex justify-between items-center py-2 px-4  bg-blue-100'>
        <div className="text-xl font-bold">
            교통사고 {title}
        </div>
        <div className="flex justify-end gap-5">
            {
                category.map(item => <Tailbutton    key={item}
                                                    color={selectC === item ? "red" : "blue"}
                                                    caption={item}
                                                    onHandle={() => setSelectC(item)} 
                            />)
            }
        </div>
    </div>
  )
}
