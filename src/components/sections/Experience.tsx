import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { experience } from '../../data/experience';
import { ui } from '../../data/ui';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id='experience'>
      <SectionTitle title={t(ui.experienceTitle)} subtitle={t(ui.experienceSubtitle)} />

      <ol className='timeline'>
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className='timeline__item'>
            <span className='timeline__dot' />
            <div className='timeline__card'>
              <div className='timeline__head'>
                <h3 className='timeline__role'>{t(job.role)}</h3>
                {job.current && <span className='timeline__badge'>{t(ui.currentBadge)}</span>}
              </div>
              <p className='timeline__company'>
                {job.company} · <span>{job.location}</span>
              </p>
              <p className='timeline__period'>{t(job.period)}</p>
              <ul className='timeline__bullets'>
                {job.bullets.map((b, bi) => (
                  <li key={bi}>{t(b)}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
