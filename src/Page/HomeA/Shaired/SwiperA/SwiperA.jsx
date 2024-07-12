
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
          menu.slice(0, 4).map(card => <SwiperSlide key={card._id}>

            <div className="cardd">
              
                <img className='imas' src={card.image} alt="" />
            

            </div>
          </SwiperSlide>)
        }
      </div>



      </Swiper>
    </div>
  );
};

export default SwiperA;