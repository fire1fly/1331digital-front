import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
