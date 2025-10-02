import './App.css'
import MyList from './04/MyList'

function App() {  // function은 반드시 return문을 가진다. //img src="/vite.svg" 형태는 public에 vite.svg가 존재하기 때문에 이런식으로 쓸 수 있다.
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {/* <MyClock /> */}
      {/* <MyDiv1 /> */}
      <MyList />
    </div>
  )
}

export default App  // import가 일어나기 위해서는 export가 일어나야 하기 때문
