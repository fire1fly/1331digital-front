import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const ProjectLayout: FC = () => (
  <div>
    <h1>Экран проекта</h1>
    <Outlet />
  </div>
);
