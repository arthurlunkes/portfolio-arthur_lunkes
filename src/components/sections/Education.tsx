import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { education } from '../../data/education';
import { certificates } from '../../data/certificates';
import { ui } from '../../data/ui';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id='education'>
      <SectionTitle title={t(ui.educationTitle)} />

      <div className='edu__list'>
        {education.map((item) => (
          <div key={item.institution} className='edu__card'>
            <div className='edu__icon'>🎓</div>
            <div>
              <h3 className='edu__course'>{t(item.course)}</h3>
              <p className='edu__institution'>{item.institution}</p>
              <p className='edu__period'>{item.period}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className='edu__subtitle'>{t(ui.certificatesTitle)}</h3>
      {certificates.length === 0 ? (
        <p className='edu__empty'>{t(ui.certificatesEmpty)}</p>
      ) : (
        <div className='edu__certs'>
          {certificates.map((cert, i) => (
            <a
              key={`${cert.title.en}-${i}`}
              className='edu__cert'
              href={cert.url || '#'}
              target={cert.url ? '_blank' : undefined}
              rel='noreferrer'
            >
              {cert.image && <img src={cert.image} alt={t(cert.title)} />}
              <div className='edu__cert-body'>
                <h4>{t(cert.title)}</h4>
                <p>
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Education;
