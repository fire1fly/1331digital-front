import { ProjectCard } from 'entities/ProjectCard';
import preview1 from 'shared/assets/images/main-project-card-preview-1.png';
import preview2 from 'shared/assets/images/main-project-card-preview-2.png';
import logo1 from 'shared/assets/images/project-logo-example-1.png';
import logo2 from 'shared/assets/images/project-logo-example-2.png';
import logo3 from 'shared/assets/images/project-logo-example-3.png';
import { ProjectCardSlider } from 'features/ProjectCardSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSwiper } from 'swiper/react';
import cls from './PortfolioPage.module.scss';

const projects = [
  {
    id: 1,
    preview: preview1,
    logo: logo1,
    tags: ['design', 'frontend', 'backend'],
  },
  {
    id: 2,
    preview: preview2,
    logo: logo2,
    tags: ['design', 'frontend'],
  },
  {
    id: 3,
    preview: preview1,
    logo: logo3,
    tags: ['design'],
  },
];

const PortfolioPage = () => {
  const swiper = useSwiper();
  return (
    <div className={classNames(cls.page, 'pr-10 pl-[120px]')}>
      <div className={cls.page_row_top}>
        <ProjectCard
          item={projects[0]}
        />
        <ProjectCard
          item={projects[1]}
        />
        <ProjectCard
          item={projects[2]}
        />
      </div>
      <div className={classNames(cls.page_row_bottom, 'mt-4')}>
        <ProjectCardSlider
          items={projects}
          externalSwiper={swiper}
          className={cls.page_pcard}
        />
        <ProjectCardSlider
          items={projects}
          externalSwiper={swiper}
          className={cls.page_pcard}
        />
        <ProjectCardSlider
          items={projects}
          externalSwiper={swiper}
          className={cls.page_pcard}
        />
        <ProjectCardSlider
          items={projects}
          externalSwiper={swiper}
          className={cls.page_pcard}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
