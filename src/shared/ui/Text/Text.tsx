import {
  ElementType, FC, HTMLAttributes, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextColor {
  white = 'white',
  yellow_1 = 'yellow_1',
  red_1 = 'red_1',
  blue_1 = 'blue_1',
  purple_1 = 'purple_1',
  purple_2 = 'purple_2',
  purple_3 = 'purple_3',
  purple_4 = 'purple_4',
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  tag: ElementType;
  color?: TextColor;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    children,
    className,
    tag: Tag,
    color = TextColor.white,
    ...otherProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[color]]: true,
  };

  return (
    <Tag className={classNames(cls.Text, className, mods)} {...otherProps}>
      {children}
    </Tag>
  );
});
