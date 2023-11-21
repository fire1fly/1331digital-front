import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IProjectCard, ProjectCard } from 'entities/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './ProjectCardSlider.module.scss';
import 'swiper/scss';

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
    // @ts-ignore
    <Swiper
      direction="vertical"
      className={classNames(cls.ProjectCardSlider, className)}
    >
      {
        items.map((item) => (
          <SwiperSlide key={item.id}>
            <ProjectCard
              item={item}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
