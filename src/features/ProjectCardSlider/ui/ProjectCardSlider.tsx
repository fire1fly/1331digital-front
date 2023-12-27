import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IProjectCard, ProjectCard } from 'entities/ProjectCard';
import Swiper, { Mousewheel, Pagination } from 'swiper';

import { Swiper as SwiperEl, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './ProjectCardSlider.scss';

interface ProjectCardSliderProps {
  className?: string;
  externalSwiper?: Swiper;
  items: IProjectCard[]
}

export const ProjectCardSlider: FC<ProjectCardSliderProps> = (props) => {
  const {
    className,
    externalSwiper,
    items,
  } = props;

  return (
    <div
      onMouseEnter={() => externalSwiper?.mousewheel.disable()}
      onMouseLeave={() => externalSwiper?.mousewheel.enable()}
    >
      <SwiperEl
        modules={[Pagination, Mousewheel]}
        direction="vertical"
        mousewheel
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
      </SwiperEl>
    </div>
  );
};
