import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import {AiOutlineSearch} from 'react-icons/ai'

const Home = () => {
  const styles = {
    height: '100vh',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    objectFit: "cover"

  }
  return (
    <>
      <Carousel className="mt-9"
        showThumbs={false}
        swipeable={true}
      >
        <div className={`bg-img-1 h-[90vh] bg-cover bg-no-repeat relative`}>
          <p className="para font-serif">Jobs <span className="text-blue-900">fill </span> your pocket, <br /> but <span className="text-blue-900"> adventures</span>  fills <br /> your soul</p>
          <div className="search">
            <input type="text"  className="font-serif text-xs" />
            <button className=""><AiOutlineSearch/></button>
          </div>

          {/* <img src={img1}  style={styles} width={1350}/> */}
        </div>
        <div className={`bg-img-2 h-[90vh] bg-cover`}>
          <p>Explore the world rediscover yourself..</p>
        </div>
        <div className={`bg-img-3 h-[90vh] bg-cover`}>
          <p>To Travel is to live..</p>
          {/* <img src={img3}  style={styles} width={1350}/> */}
        </div>



      </Carousel>

    </>
  )
}

export default Home
