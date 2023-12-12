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
    text: 'labels.portfolio',
    icon: IconPortfolio,
  },
  {
    path: '/team',
    text: 'labels.team',
    icon: IconTeam,
  },
  {
    path: '/contacts',
    text: 'labels.contacts',
    icon: IconContacts,
  },
  {
    path: '/services',
    text: 'labels.services',
    icon: IconServices,
  },
];
