import IconPortfolio from 'shared/assets/icons/icon-portfolio.svg';
import IconTeam from 'shared/assets/icons/icon-team.svg';
import IconContacts from 'shared/assets/icons/icon-contacts.svg';
import IconServices from 'shared/assets/icons/icon-services.svg';

export interface SidebarLinkType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarLinksList: SidebarLinkType[] = [
  {
    path: '/',
    text: 'Портфолио',
    icon: IconPortfolio,
  },
  {
    path: '/team',
    text: 'Команда',
    icon: IconTeam,
  },
  {
    path: '/contacts',
    text: 'Контакты',
    icon: IconContacts,
  },
  {
    path: '/services',
    text: 'Услуги',
    icon: IconServices,
  },
];
