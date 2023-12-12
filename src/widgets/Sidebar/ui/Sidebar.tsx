import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import logoImage from 'shared/assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { sidebarLinksList } from '../model/sidebarLinks';
import { SidebarLink } from './SidebarLink';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <aside className={cls.Sidebar}>
      <div className={cls.Sidebar_shape} />

      <div className={cls.Sidebar__inner}>
        <div className={classNames(cls.Sidebar_logo, cls.Sidebar__logo)}>
          <img src={logoImage} alt="logo 1331Digital" />
        </div>

        <nav className={cls.Sidebar_nav}>
          {
            sidebarLinksList.map((link) => (
              <SidebarLink
                key={link.path}
                link={link}
              />
            ))
          }

          <div className={cls.Sidebar_f}>
            <button type="button" className={classNames(cls.Sidebar_outbtn)}>
              <div className={cls.Sidebar_outbtn_backdrop} />
              <div className={cls.Sidebar_outbtn_space}>
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
                <div className={cls.item} />
              </div>
              <div className={classNames('btn-text', '_text-upper')}>{t('feedback')}</div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};
