import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { borderColorVariants, textColorVariants } from 'shared/const/colorVariants';

interface MiniStatCardProps {
  className?: string;
  value: ReactNode;
  label: ReactNode;
  colorType: string;
}

export const MiniStatCard: FC<MiniStatCardProps> = (props) => {
  const {
    className,
    value,
    label,
    colorType,
  } = props;

  return (
    <div className={classNames(
      'relative inline-block px-4 py-5 border border-dotted',
      borderColorVariants[colorType],
      className,
    )}
    >
      <div className={classNames(
        'absolute z-[-1] -top-[5px] -left-[5px]',
        'border border-solid border-[#372e4b]',
        'shadow-lg shadow-[#241e35] w-full h-full',
      )}
      />
      <div className="relative z-[2] text-center">
        <div className={classNames(
          'font-intro-black text-[29px] uppercase leading-none',
          '[&_sup]:text-[40%]',
          textColorVariants[colorType],
        )}
        >
          {value}
        </div>
        <div className="font-intro-black text-[13px] text-white leading-none">
          {label}
        </div>
      </div>
    </div>
  );
};
