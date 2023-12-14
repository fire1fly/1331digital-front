import { memo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { MainLayout } from 'app/layouts/MainLayout/MainLayout';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { ProjectLayout } from 'app/layouts/ProjectLayout/ProjectLayout';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
    </Route>
    <Route path="/project/:id" element={<ProjectLayout />}>
      <Route path="frontend" element={<Text tag="h1" color={TextColor.red_1}>Фронтенд</Text>} />
      <Route path="design" element={(<Text tag="h1" color={TextColor.red_1}>Дизайн</Text>)} />
      <Route path="backend" element={<Text tag="h1" color={TextColor.red_1}>Бэкенд</Text>} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
