import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { IEmployee } from 'entities/Employee/model/types/Employee';
import avatarPlaceholder from 'shared/assets/images/employee-avatar-example.png';
import { borderColorVariants, textColorVariants } from 'shared/const/colorVariants';
import { MiniStatCard } from 'shared/ui/MiniStatCard/MiniStatCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy } from 'swiper';
import getStatLabels from '../../lib/getStatLabels';

import cls from './EmployeeCard.module.scss';
import 'swiper/scss';

interface EmployeeCardProps {
  className?: string;
  item: IEmployee;
}

export const EmployeeCard: FC<EmployeeCardProps> = ({ className, item }) => {
  const {
    type,
    name,
    surname,
    avatarURL,
    position,
    stat,
    skills,
  } = item;

  const { i18n } = useTranslation();

  const statElement = stat?.map((item, index) => {
    const statLabels = getStatLabels(item.value);

    return (
      <MiniStatCard
        key={item.type}
        colorType={type}
        value={(
          <>
            {item.value}
            {' '}
            <sup>{statLabels[i18n.language][item.type].valueSup}</sup>
          </>
        )}
        label={statLabels[i18n.language][item.type].label}
      />
    );
  });

  const skillsElement = skills?.concat(skills).map((item, index) => (
    <SwiperSlide
      key={index}
    >
      <div className="relative h-20">
        <item.iconURL className="w-8 h-8" />
        <item.iconURL className="left-0 w-8 h-8 scale-x-[-1] scale-y-[-0.8] blur-[10px]" />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={classNames(
      className,
      'ec relative',
    )}
    >
      <div className={classNames('absolute top-[-6px] left-[-6px] w-full h-full')}>
        <div className={classNames(
          'absolute top-0 left-0 w-[20%] h-[75%] border-t border-l border-dashed',
          borderColorVariants[type],
        )}
        />
        <div className={classNames(
          'absolute bottom-0 left-0 w-[70%] h-[10%] border-b border-l border-dashed',
          borderColorVariants[type],
        )}
        />
        <div className={classNames(
          'absolute top-0 right-0 w-[40%] h-[80%] border-t border-r border-dashed',
          borderColorVariants[type],
        )}
        />
      </div>
      <div className="relative overflow-hidden flex flex-col items-center gap-[30px] bg-white/5">
        <div className={classNames('absolute top-0 left-0 w-full h-full', cls[type])}>
          <div className={classNames(cls.shadow_1)} />
          <div className={classNames(cls.shadow_2)} />
          <div className={classNames(cls.shadow_3)} />
        </div>
        <div className="ec-profile relative">
          <img
            src={avatarURL || avatarPlaceholder}
            className="ec-avatar h-[266px]"
            alt="avatar"
          />
          <div className="ec-profile-info absolute bottom-0 left-0 w-full text-center">
            <div className={classNames(
              'ec-name font-magistral-black text-[17px] leading-tight uppercase',
              textColorVariants[type],
            )}
            >
              {name}
              {' '}
              {surname}
            </div>
            <div className="ec-role font-intro-black text-[13px] text-white">
              {position}
            </div>
          </div>
        </div>
        {
          stat?.length && (
            <div className="ec-stat grid grid-cols-2 gap-10">
              {statElement}
            </div>
          )
        }
        {
          skills?.length && (
            <div className="ec-skills w-full">
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={16}
                loop
                autoplay={{
                  delay: 0,
                }}
                speed={1000}
                className="w-full [&_.swiper-slide]:w-auto [&_.swiper-wrapper]:ease-linear"
              >
                {skillsElement}
              </Swiper>
            </div>
          )
        }
      </div>
    </div>
  );
};
