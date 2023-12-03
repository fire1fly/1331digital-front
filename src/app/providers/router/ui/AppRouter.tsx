import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'app/layouts/MainLayout/MainLayout';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';

export const AppRouter = memo(() => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<MainPage />} />
      <Route path="team" element={<p>Команда</p>} />
      <Route path="contacts" element={<p>Контакты</p>} />
      <Route path="services" element={<p>Услуги</p>} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
));
