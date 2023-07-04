import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';
import { MainHeader } from 'widgets/MainHeader';
import cls from './MainLayout.module.scss';

export const MainLayout: FC = () => (
  <div className={classNames(cls.MainLayout, cls._bg_pattern_1)}>
    <Sidebar />

    <div className={cls.MainLayout_page}>
      <MainHeader />
      <Outlet />
    </div>
  </div>
);
