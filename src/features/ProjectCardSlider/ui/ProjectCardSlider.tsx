import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IProjectCard, ProjectCard } from 'entities/ProjectCard';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './ProjectCardSlider.scss';

interface ProjectCardSliderProps {
  className?: string;
  items: IProjectCard[]
}

export const ProjectCardSlider: FC<ProjectCardSliderProps> = (props) => {
  const {
    className,
    items,
  } = props;

  return (
    <Swiper
      modules={[Pagination]}
      direction="vertical"
      className={classNames(className, 'ProjectCardSlider')}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}

    >
      {
        items.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <ProjectCard
              item={item}
              className="ProjectCardSlider-card"
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
