import iconTelegram from 'shared/assets/icons/icon-telegram-red.svg';
import iconMail from 'shared/assets/icons/icon-message-red.svg';

export interface Contact {
  to: string;
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  type?: string;
  label?: string;
}

export const contactList: Contact[] = [
  {
    to: 'https://t.me/Web_pautov',
    icon: iconTelegram,
    type: 'telegram',
    label: '@1331support',
  },
  {
    to: 'mailto:support@1331.digital',
    icon: iconMail,
    type: 'e-mail',
    label: '@1331support',
  },
];
