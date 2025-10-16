import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MyClock from './02/MyClock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList' 
import MyToggle from './05/Mytoggle'
import Lotto from './06/Lotto'

function App() {  // function은 반드시 return문을 가진다. //img src="/vite.svg" 형태는 public에 vite.svg가 존재하기 때문에 이런식으로 쓸 수 있다.
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />     
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <Lotto />  
      </main>
      <Footer />
    </div>
  )
}

export default App  // import가 일어나기 위해서는 export가 일어나야 하기 때문
