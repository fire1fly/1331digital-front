import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper';
import { EmployeeCard } from 'entities/Employee';

import cls from './MainPage.module.scss';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import { EmployeesPage } from '../EmployeesPage/EmployeesPage';

const MainPage = () => (
  <div className={cls.page}>
    <Swiper
      direction="horizontal"
      modules={[Mousewheel, Keyboard]}
      speed={500}
      keyboard
      className={cls.page_slider}
      mousewheel
    >
      <SwiperSlide>
        <EmployeesPage />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioPage />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default MainPage;
