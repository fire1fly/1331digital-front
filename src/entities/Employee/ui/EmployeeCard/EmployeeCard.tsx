import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { IEmployee } from 'entities/Employee/model/types/Employee';
import avatarPlaceholder from 'shared/assets/images/employee-avatar-example.png';
import { textColorVariants } from 'shared/const/colorVariants';
import { MiniStatCard } from 'shared/ui/MiniStatCard/MiniStatCard';
import getStatLabels from '../../lib/getStatLabels';

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

  return (
    <div className={classNames(
      className,
      'ec overflow-hidden pb-10 flex flex-col items-center gap-[30px] bg-white/5',
    )}
    >
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
        stat && (
          <div className="ec-stat grid grid-cols-2 gap-10">
            {statElement}
          </div>
        )
      }
      {/* <div className="ec-skills">
        <img src="./assets/static/employee-skills.png" alt="icon" />
      </div> */}
    </div>
  );
};
