import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'app/layouts/MainLayout/MainLayout';
import { NotFoundPage } from 'pages/NotFoundPage';

export const AppRouter = memo(() => {
  console.log('temp');
  // const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {/* {
        Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                  {route.element}
                </div>
              </Suspense>
            )}
          />
        ))
      } */}
      <Route path="/" element={<MainLayout />}>
        <Route path="portfolio" element={<p>Портфолио</p>} />
        <Route path="team" element={<p>Команда</p>} />
        <Route path="contacts" element={<p>Контакты</p>} />
        <Route path="services" element={<p>Услуги</p>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
});
