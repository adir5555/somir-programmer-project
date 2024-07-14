
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';
import './swaip.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import ShopMenu from '../../../../Hooks/ShopMenu/ShopMenu';


const SwiperA = () => {

  const [menu] = ShopMenu();

  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <div className="">
          {
            menu.slice(0, 4).map(car => <SwiperSlide key={car._id}>

              <div className="cardd ">

                <img className='imas' src={car.image} alt="" />
              </div>
              
            


            </SwiperSlide>
            )
          }
        </div>



      </Swiper>
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes" />
      </figure> */}
    </div>
  );
};

export default SwiperA;