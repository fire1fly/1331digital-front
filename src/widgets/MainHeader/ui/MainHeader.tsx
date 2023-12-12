import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ContactLink } from 'shared/ui/ContactLink/ContactLink';
import { AngleShapedButton } from 'shared/ui/AngleShapedButton/AngleShapedButton';
import { Link } from 'react-router-dom';
import { LangSwitcher } from 'entities/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './MainHeader.module.scss';
import { contactList } from '../model/contacts';

interface MainHeaderProps {
  className?: string;
}

export const MainHeader: FC<MainHeaderProps> = ({ className }) => {
  const { t } = useTranslation();

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
        <div className="flex items-center gap-8">
          <Link to="/form">
            <AngleShapedButton>{t('labels.toFillForm')}</AngleShapedButton>
          </Link>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
