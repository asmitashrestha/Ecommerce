import img1 from '../assets/img1.jpg'
import { BiLocationPlus } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Availablepackage = () => {
    return (
        <div className="contains  mt-12 grid grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-1">
            {/* <h1 className=' mt-5 text-2xl bold font-mono justify-center text-center text-blue-800'>Special Packages</h1> */}
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                <div className="box p-3">
                    <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                    <div className="mt-7 relative left-3 ">
                        <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                        <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                        <div className="flex justify-between">
                            <Link to='/package'>View Details</Link>
                            <p className='mr-7'>$120.00</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>




    )
}

export default Availablepackage
