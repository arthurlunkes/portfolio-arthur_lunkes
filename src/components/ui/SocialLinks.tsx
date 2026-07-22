import React from 'react';
import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSalesforce,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { profile } from '../../data/profile';

interface SocialLinksProps {
  /** `hero` mostra rótulos; `footer` é a versão compacta do rodapé. */
  variant?: 'hero' | 'footer';
}

/**
 * Links sociais do perfil. Ícones de marca vêm do Font Awesome (o Lucide não
 * fornece logos); os demais ícones do site são do Lucide.
 */
const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'hero' }) => {
  const { links } = profile;
  const cls = `social-links social-links--${variant}`;

  return (
    <div className={cls}>
      <a
        className='social-links__item'
        href={links.github}
        target='_blank'
        rel='noreferrer'
        aria-label='GitHub'
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </a>

      <a
        className='social-links__item'
        href={links.linkedin}
        target='_blank'
        rel='noreferrer'
        aria-label='LinkedIn'
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span>LinkedIn</span>
      </a>

      <a
        className='social-links__item social-links__item--whatsapp'
        href={`https://wa.me/${links.whatsapp}`}
        target='_blank'
        rel='noreferrer'
        aria-label={`WhatsApp ${links.whatsappDisplay}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>{links.whatsappDisplay}</span>
      </a>

      <a className='social-links__item' href={`mailto:${links.email}`} aria-label='Email'>
        <Mail size={18} aria-hidden='true' />
        <span>Email</span>
      </a>

      {links.trailhead && (
        <a
          className='social-links__item'
          href={links.trailhead}
          target='_blank'
          rel='noreferrer'
          aria-label='Trailhead'
        >
          <FontAwesomeIcon icon={faSalesforce} />
          <span>Trailhead</span>
        </a>
      )}

      <a
        className='social-links__item'
        href={links.instagram}
        target='_blank'
        rel='noreferrer'
        aria-label='Instagram'
      >
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </a>
    </div>
  );
};

export default SocialLinks;
