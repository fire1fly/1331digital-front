import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export const App = () => (
  <div className={classNames('app')}>
    <Suspense fallback="">
      <div className="content-page">
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
