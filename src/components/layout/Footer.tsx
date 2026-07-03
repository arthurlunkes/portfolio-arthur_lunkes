import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container footer__inner'>
        <div className='footer__links'>
          <a href={profile.links.github} target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a href={profile.links.linkedin} target='_blank' rel='noreferrer'>
            LinkedIn
          </a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </div>
        <p className='footer__meta'>
          © {year} {profile.name} · {t(ui.footerBuilt)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
