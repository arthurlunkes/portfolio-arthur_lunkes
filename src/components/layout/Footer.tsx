import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { useLanguage } from '../../contexts/LanguageContext';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container footer__inner'>
        <SocialLinks variant='footer' />
        <p className='footer__meta'>
          © {year} {profile.name} · {t(ui.footerBuilt)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
