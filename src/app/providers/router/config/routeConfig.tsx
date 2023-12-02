import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  TEAM = 'team',
  CONTACTS = 'contacts',
  SERVICES = 'services',
  NOT_FOUND = 'notFound'
}

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  nested?: Record<AppRoutes, AppRoutesProps>
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TEAM]: 'team',
  [AppRoutes.CONTACTS]: 'contacts',
  [AppRoutes.SERVICES]: 'services',
  [AppRoutes.NOT_FOUND]: '*',
};

// export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
//   [AppRoutes.MAIN]: {
//     path: RoutePath.main,
//     element: <MainPage />,
//   },
//   [AppRoutes.NOT_FOUND]: {
//     path: RoutePath.notFound,
//     element: <NotFoundPage />,
//   },
// };
