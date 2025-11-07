import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-blue-600 text-white shadow-md'>
            <nav className='container h-15 mx-auto flex justify-between items-center'>
              <div className='text-2xl font-bold text-blue-50'>KDT03</div>
              <ul className='flex space-x-4'>
                <li>
                  <Link to="/" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  홈
                  </Link> 
                  </li>
                <li>
                  <Link to="/lotto" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  로또
                  </Link> 
                  </li>
                  <li>
                  <Link to="/box" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  박스오피스
                  </Link> 
                  </li>
                     <li>
                  <Link to="/gal" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  갤러리
                  </Link> 
                  </li>
                     <li>
                  <Link to="/festival" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  축제
                  </Link> 
                  </li>
                  <li>
                  <Link to="/charger" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  충전소
                  </Link> 
                  </li>
                  <li>
                  <Link to="/jotai" className='hover:font-bold hover:bg-blue-50 p-2 border rounded-sm hover:text-blue-900'>
                  조타이
                  </Link> 
                  </li>
              </ul>
            </nav>
          </header>
  )
}
