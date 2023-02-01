import Carousel from 'react-bootstrap/Carousel';
import first from '../images/240_F_77711294_BA5QTjtgGPmLKCXGdtbAgZciL4kEwCnx.jpg'
import second from '../images/240_F_428958869_FmnbeD1BUuVqG1zMdxPx9L3W5VXDgE5l.jpg'
import third from '../images/240_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg'
import fourth from '../images/240_F_391347204_XaDg0S7PtbzJRoeow3yWO1vK4pnqBVQY.jpg'


function Testimonial() {
  return (
    <>
    <div className='bg-light '>
    <h4 className='text-center text-primary mt-3 mb-5 '>Testimony</h4>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto rounded"
          src={first} alt="testimony"
        />
       <div className=' w-75 mx-auto'>
          <h5 className='text-primary h6 mt-2 text-center fw-bold'>John Ogbonna</h5>
          <p className='text-secondary mx-auto'>Outswift laundry is one of the best that I have navigated. It saves me the walking, parking, getting change,
             waiting to use a dryer in a launderette and folding of clothes. I'm glad I found it.</p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-75 mx-auto rounded"
          src={second}
          alt="Second slide"
        />

          <div className='text-center w-75 mx-auto'>
          <h5 className='text-primary h6 mt-2 text-center'>Damilola Oyinloye</h5>
          <p className='text-secondary mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-75 mx-auto rounded"
          src={third}
          alt="Third slide"
        />

       <div className='text-center w-75 mx-auto'>
          <h3 className='text-primary text-center h6 mt-2'>Faith odoma</h3>
          <p className='text-secondary mx-auto'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
       </div>
      </Carousel.Item>

      <Carousel.Item>
  <img
    className="d-block  w-75 mx-auto rounded"
    src={fourth}
    alt="fourth slide"
  />
 <div className='text-center w-75 mx-auto'>
    <h3 className='text-primary text-center h6 mt-2'>Mattew Tobi</h3>
    <p className='text-secondary mx-auto'>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
 </div>
</Carousel.Item>

      
    </Carousel>
    </div>
    </>
  );
}

export default Testimonial;