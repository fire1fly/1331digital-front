import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './ContactLink.module.scss';

interface ContactLinkProps {
  to: string;
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  type?: string;
  label?: string;
  className?: string;
}

export const ContactLink: FC<ContactLinkProps> = (props) => {
  const {
    to,
    icon: Icon,
    type,
    label,
    className,
    ...otherProps
  } = props;

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={to}
      className={classNames(cls.ContactLink, className)}
      {...otherProps}
    >
      {
        Icon
        && (
          <div className={cls.ContactLink_icon}>
            <Icon />
          </div>
        )
      }
      <div className={cls.ContactLink_c}>
        <div className={cls.ContactLink_c_h}>
          <div className={classNames(cls.ContactLink_label, '_text-upper')}>{type}</div>
          <div className={cls.ContactLink_indicator} />
        </div>
        <div className={classNames(cls.ContactLink_value, '_text-upper')}>{label}</div>
      </div>
    </a>
  );
};
