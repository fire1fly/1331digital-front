import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import designImage from 'shared/assets/images/techtag-design.png';
import frontendImage from 'shared/assets/images/techtag-html.png';
import backendImage from 'shared/assets/images/techtag-php.png';
import { useTranslation } from 'react-i18next';
import { IProjectCard } from '../model/types';
import cls from './ProjectCard.module.scss';

const tagsConf: Record<string, string> = {
  design: designImage,
  frontend: frontendImage,
  backend: backendImage,
};

const classesMods: Record<string, string> = {
  _c_2: cls._c_2,
  _c_3: cls._c_3,
  _design: cls._design,
  _frontend: cls._frontend,
  _backend: cls._backend,
};

interface ProjectCardProps {
  className?: string;
  item: IProjectCard
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const {
    className,
    item,
  } = props;

  const {
    preview,
    logo,
    tags,
  } = item;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ProjectCard, className)}>
      <div className={classNames(cls.ProjectCard_backframe, classesMods[`_c_${tags?.length}`])}>
        {
          tags?.map((tag) => (
            <div
              key={tag}
              className={classesMods[`_${tag}`]}
            />
          ))
        }
      </div>
      <div className={classNames(cls.ProjectCard_frame)}>
        <img
          src={preview}
          className={classNames(cls.ProjectCard_preview)}
          alt="project preview"
        />
        <div className={classNames(cls.ProjectCard_backdrop)} />

        <div className={classNames(cls.ProjectCard_inner)}>
          <div className={classNames(cls.ProjectCard_techtags, 'techtags')}>
            {
              tags?.map((tag) => (
                <div
                  key={tag}
                  className={classNames(cls.ProjectCard_techtags_tag, 'techtags-tag')}
                >
                  <img src={tagsConf[tag]} alt="tag" />
                </div>
              ))
            }
          </div>

          <div className={classNames(cls.ProjectCard_logo)}>
            <img
              src={logo}
              alt="project logo"
            />
          </div>

          <div className={classNames(cls.ProjectCard_bottom)}>
            <div className={classNames(cls.ProjectCard_info)}>
              <div
                className={classNames(cls.ProjectCard_type, 'uppercase', '_c-yellow-1')}
              >
                {t('workType.siteturnkey')}
              </div>
              <div className={classNames(cls.ProjectCard_sub)}>
                {t('labels.pages')}
                : 86
              </div>
            </div>

            {/* TODO: pagination */}
          </div>

          <Button
            theme={ButtonTheme.YELLOW}
            size={ButtonSize.M}
            className={classNames(cls.ProjectCard_btn, '_text-upper')}
          >
            Посмотреть
          </Button>
        </div>
      </div>
    </div>
  );
};
