import { FC, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import IconArrow from 'shared/assets/icons/icon-angle-down.svg';
import { useTranslation } from 'react-i18next';
import { useClickAway } from 'shared/lib/hooks/useClickAway';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

interface ILanguage {
  label: string;
  value: string;
}

const languages: ILanguage[] = [{ label: 'ru', value: 'ru-RU' }, { label: 'en', value: 'en-US' }];

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initLang = languages.find((lang) => lang.value === i18n.language);
  const [language, setLanguage] = useState<ILanguage>(initLang || languages[0]);

  const handleList = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef(null);

  useClickAway(() => setIsOpen(false), ref);

  const handleLangSwitch = (lang: ILanguage) => {
    i18n.changeLanguage(lang.value);
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className={classNames(cls.LangSwitcher, className)}>
      <div
        className="p-4 flex items-center gap-3 bg-[#2d263d]"
        onClick={handleList}
      >
        <span
          className={classNames(cls.LangSwitcher_label, 'font-magistral-black text-base text-white _text-upper')}
        >
          {language.label}
        </span>
        <div className={cls.LangSwitcher_arrow} />
      </div>
      { isOpen
        ? (
          <div className={classNames(cls.LangSwitcher_list, 'bg-[#2d263d]')}>
            {
              languages.map((lang) => (
                <div
                  key={lang.label}
                  className={`
                    p-4 flex justify-center
                    font-magistral-black text-base text-white _text-upper
                    hover:bg-white/5
                  `}
                  onClick={() => handleLangSwitch(lang)}
                >
                  {lang.label}
                </div>
              ))
            }
          </div>
        )
        : null}
    </div>
  );
};
