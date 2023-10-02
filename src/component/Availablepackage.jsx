import img1 from '../assets/img1.jpg'
import { BiLocationPlus } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.jpg'

const Availablepackage = () => {
    return (
        <div className="contains  mt-12 grid grid-cols-1  lg:grid lg:grid-cols-4 lg:gap-1">
            {/* <h1 className=' mt-5 text-2xl bold font-mono justify-center text-center text-blue-800'>Special Packages</h1> */}
            <div className='container relative left-3 right-3  mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>
            <div className='container relative left-3 right-3 mb-2 rounded-md border-2 border-black h-30 '>
                <img src={img1} alt="img" className='p-1' />
                <div className="detail">
                    <p> <BiLocationPlus /> Lumbini,kapilvastu</p>
                    <p><BsStarFill />7 days package</p>
                    <Link to='/package'>View Details</Link>
                    <p>$120.00</p>
                </div>
            </div>

        </div>




    )
}

export default Availablepackage
