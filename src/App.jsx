import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MyClock from './02/MyClock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList' 
import MyToggle from './05/Mytoggle'
import Lotto from './06/Lotto'
import Foodmain from './07/Foodmain'
import MyEffect from './08/Myeffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import RefCal from './12/RefCal'
import Gallery from './13/Gallery'
import Festival from './14/Festival'
import RouteMain from './15/RouteMain'
import FestivalContents from './14/FestivalContents'
import ChargerInfo from './16/ChargerInfo'

function App() {  // function은 반드시 return문을 가진다. //img src="/vite.svg" 형태는 public에 vite.svg가 존재하기 때문에 이런식으로 쓸 수 있다.
  return (
    <BrowserRouter>
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />     
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <Routes>
          <Route path='/' element={<MyClock />} />
          <Route path='/lotto' element={<Lotto />} />
          <Route path='/box' element={<BoxOffice />} />
          <Route path='/gal' element={<Gallery />} />
          <Route path='/festival' element={<Festival />} />
          <Route path='/festival/contents' element={<FestivalContents />} />
          <Route path='/charger' element={<ChargerInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App  // import가 일어나기 위해서는 export가 일어나야 하기 때문
