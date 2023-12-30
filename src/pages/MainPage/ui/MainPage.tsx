import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import cls from './MainPage.module.scss';

const MainPage = () => (
  <div className={cls.page}>
    <Swiper
      direction="horizontal"
      modules={[Mousewheel, Keyboard]}
      speed={500}
      keyboard
      className={cls.page_slider}
      mousewheel
      onWheel={(e) => e.stopPropagation()}
    >
      <SwiperSlide>
        <PortfolioPage />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioPage />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default MainPage;
