import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ContactLink } from 'shared/ui/ContactLink/ContactLink';
import { AngleShapedButton } from 'shared/ui/AngleShapedButton/AngleShapedButton';
import { Link } from 'react-router-dom';
import cls from './MainHeader.module.scss';
import { contactList } from '../model/contacts';

interface MainHeaderProps {
  className?: string;
}

export const MainHeader: FC<MainHeaderProps> = ({ className }) => {
  const links = contactList.map((item) => (
    <ContactLink
      key={item.to}
      to={item.to}
      icon={item.icon}
      type={item.type}
      label={item.label}
    />
  ));

  return (
    <header className={cls.Header}>
      <div className={cls.Header__inner}>
        <div className={cls.Header_bar_conts}>
          {links}
        </div>
        <div className="h_btn_bar">
          <Link to="/form">
            <AngleShapedButton>Заполнить форму</AngleShapedButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
