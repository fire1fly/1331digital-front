import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { SidebarLinkType } from '../model/sidebarLinks';

interface SidebarLinkProps {
  link: SidebarLinkType
}

export const SidebarLink: FC<SidebarLinkProps> = ({ link }) => {
  const {
    path,
    text,
    icon: Icon,
  } = link;

  const { t } = useTranslation();

  return (
    <Link to={path} className={cls.Sidebar_link}>
      <div className={cls.Sidebar_link_shape} />
      <div className={cls.Sidebar_link_icon}>
        <Icon />
      </div>
      <div className={cls.Sidebar_link_label}>{t(text)}</div>
    </Link>
  );
};
