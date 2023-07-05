import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  DEFAULT = '',
  YELLOW = 'yellow',
  TRANSLUCENT_LIGHT = 'translucent_light',
}
export enum ButtonSize {
  DEFAULT = '',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  startIcon?: React.VFC<React.SVGProps<SVGSVGElement>>,
  endIcon?: React.VFC<React.SVGProps<SVGSVGElement>>,
  textClassnames?: string;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    size = ButtonSize.DEFAULT,
    startIcon: IconStart,
    endIcon: IconEnd,
    textClassnames,
    ...otherProps
  } = props;

  const clsMods: ClassnamesMods = {
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, className, clsMods)}
      {...otherProps}
    >
      {IconStart && <IconStart className={cls.Button_icon} />}
      <div className={classNames(cls.Button_text, textClassnames)}>
        {children}
      </div>
      {IconEnd && <IconEnd className={cls.Button_icon} />}
    </button>
  );
});
