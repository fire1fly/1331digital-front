import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper';
import { EmployeeCard } from 'entities/Employee';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import cls from './MainPage.module.scss';

const employees = [
  {
    id: '1',
    name: 'Daniel',
    type: 'frontend',
    position: 'Middle Frontend Developer',
    stat: [
      { type: 'case', value: 2 },
      { type: 'experience', value: 21 },
    ],
  },
];

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
        <div className="px-20">
          <EmployeeCard className="w-[325px]" item={employees[0]} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioPage />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default MainPage;
