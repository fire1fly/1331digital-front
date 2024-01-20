import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { EmployeeCard } from 'entities/Employee';

import htmlIcon from 'shared/assets/icons/html.svg';
import figmaIcon from 'shared/assets/icons/figma.svg';
import reactIcon from 'shared/assets/icons/react.svg';
import reduxIcon from 'shared/assets/icons/redux.svg';
import vueIcon from 'shared/assets/icons/vue.svg';
import webstormIcon from 'shared/assets/icons/webstorm.svg';
import nodejsIcon from 'shared/assets/icons/node-js.svg';
import wordpressIcon from 'shared/assets/icons/wordpress.svg';
import cls from './EmployeesPage.module.scss';

interface EmployeesPageProps {
  className?: string;
}

const employees = [
  {
    id: '1',
    name: 'Daniel',
    type: 'design',
    position: 'Middle Frontend Developer',
    stat: [
      { type: 'case', value: 2 },
      { type: 'experience', value: 21 },
    ],
    skills: [
      { label: 'HTML 5', iconURL: htmlIcon },
      { label: 'Figma', iconURL: figmaIcon },
      { label: 'React', iconURL: reactIcon },
      { label: 'Redux', iconURL: reduxIcon },
      { label: 'Vue', iconURL: vueIcon },
      { label: 'webstorm', iconURL: webstormIcon },
      { label: 'NodeJS', iconURL: nodejsIcon },
      { label: 'Wordpress', iconURL: wordpressIcon },
    ],
  },
];

export const EmployeesPage: FC<EmployeesPageProps> = ({ className }) => (
  <div className="pl-[120px]">
    <Swiper
      direction="horizontal"
      modules={[Mousewheel]}
      speed={500}
      keyboard
      mousewheel
      className={cls.page_slider}
    >
      <SwiperSlide>
        <EmployeeCard className="w-[325px]" item={employees[0]} />
      </SwiperSlide>
    </Swiper>
  </div>
);
