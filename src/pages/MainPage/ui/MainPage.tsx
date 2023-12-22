import { ProjectCard } from 'entities/ProjectCard';
import preview1 from 'shared/assets/images/main-project-card-preview-1.png';
import preview2 from 'shared/assets/images/main-project-card-preview-2.png';
import logo1 from 'shared/assets/images/project-logo-example-1.png';
import logo2 from 'shared/assets/images/project-logo-example-2.png';
import logo3 from 'shared/assets/images/project-logo-example-3.png';
import { ProjectCardSlider } from 'features/ProjectCardSlider';
import { useEffect } from 'react';
import cls from './MainPage.module.scss';

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

const MainPage = () => {
  useEffect(() => {
    const response = fetch(`${__API__}projects`).then((response) => response.json()).then((json) => console.log(json));
  }, []);

  return (
    <div className={cls.MainPage}>
      <h1>{__API__}</h1>
      <div className={cls.MainPage_row_top}>
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
      <div className={cls.MainPage_row_bottom}>
        <ProjectCardSlider
          items={projects}
          className={cls.MainPage_pcard}
        />
        <ProjectCardSlider
          items={projects}
          className={cls.MainPage_pcard}
        />
        <ProjectCardSlider
          items={projects}
          className={cls.MainPage_pcard}
        />
        <ProjectCardSlider
          items={projects}
          className={cls.MainPage_pcard}
        />
      </div>
    </div>
  );
};

export default MainPage;
