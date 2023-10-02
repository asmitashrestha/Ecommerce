import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Home = () => {
  const styles = {
    height: '100vh',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"10px",
    objectFit:"cover"
    
  }
  return (
    <>
    <Carousel className="mt-5" 
    showThumbs={false}
    swipeable={true}
    >
      <div className={`bg-img-1 h-[90vh] bg-cover bg-no-repeat`}>
        <p>Plan your vacation with us..</p>
        <input type="text" /> 
        <button>Search</button>
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
