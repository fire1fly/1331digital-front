import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './providers/router';

export const App = () => (
  <div className="app">
    <Suspense fallback={<PageLoader />}>
      <AppRouter />
    </Suspense>
  </div>
);
