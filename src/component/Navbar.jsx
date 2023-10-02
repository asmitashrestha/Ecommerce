import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navs">
      <div className="navbar">
       <Link to='/' className='relative top-3 left-3 text-3xl text-blue-700 font-bold no-underline justify-items-center hover:text-white hover:bg-blue-700 hover:rounded hover:p-1'>Ghumfir</Link>
      </div>
      <div className="navbar">
        <Link to='/login' className='posts'>Login</Link>
        <Link to='/postjob' className='post'>Post a trip</Link>
      </div>
    </div >
  )
}

export default Navbar