import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { name, title, location, photo, links } = profile;

  return (
    <header id='top' className='hero'>
      <div className='container hero__inner'>
        <div className='hero__content'>
          <p className='hero__greeting'>
            <span className='hero__prompt'>$</span> {t(ui.heroGreeting)}
          </p>
          <h1 className='hero__name'>{name}</h1>
          <p className='hero__title'>{t(title)}</p>
          <p className='hero__location'>📍 {t(location)}</p>

          <div className='hero__actions'>
            <a className='btn btn--primary' href='#projects'>
              {t(ui.heroCtaProjects)}
            </a>
            <a className='btn btn--ghost' href='#contact'>
              {t(ui.heroCtaContact)}
            </a>
            {links.cv && (
              <a className='btn btn--ghost' href={links.cv} target='_blank' rel='noreferrer'>
                {t(ui.heroDownloadCv)}
              </a>
            )}
          </div>

          <div className='hero__socials'>
            <a href={links.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
              GitHub
            </a>
            <a href={links.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`} aria-label='Email'>
              Email
            </a>
          </div>
        </div>

        <div className='hero__photo'>
          {photo ? (
            <img src={photo} alt={name} />
          ) : (
            <div className='hero__photo-placeholder'>
              <span>{t(ui.photoPlaceholder)}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
