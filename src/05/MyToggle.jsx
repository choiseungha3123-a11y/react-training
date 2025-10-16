import MyTogglebox from "./Mytogglebox"

export default function MyToggle() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className="w-9/10 grid 
                             grid-cols-1 
                             md:grid-cols-2 
                             lg:grid-cols-3 gap-6">
        <MyTogglebox color="blue"/>
        <MyTogglebox color="orange"/>
        <MyTogglebox color="lime"/>
      </div>
    </div>
  )
}
