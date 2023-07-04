import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AngleShapedButton.module.scss';

interface AngleShapedButtonProps {
  className?: string;
}

export const AngleShapedButton: FC<AngleShapedButtonProps> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <button type="button" className={classNames(cls.Button, 'btn', className)}>
      <div className={classNames(cls.Button_shape, cls._top)} />
      <div className={classNames(cls.Button_text, '_text-upper')}>
        {children}
      </div>
      <div className={classNames(cls.Button_shape, cls._bottom)} />
    </button>
  );
};
