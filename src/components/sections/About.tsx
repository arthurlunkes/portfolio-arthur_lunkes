import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { LocalizedText } from '../../interfaces/content';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

interface Highlight {
  value: string;
  label: LocalizedText;
}

const highlights: Highlight[] = [
  { value: '9+', label: { pt: 'anos em TI', en: 'years in IT' } },
  { value: '15+', label: { pt: 'projetos no GitHub', en: 'projects on GitHub' } },
  { value: 'Fullstack', label: { pt: 'backend · frontend · DevOps', en: 'backend · frontend · DevOps' } },
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id='about'>
      <SectionTitle title={t(ui.aboutTitle)} />

      <div className='about__grid'>
        <p className='about__text'>{t(profile.summary)}</p>

        <div className='about__highlights'>
          {highlights.map((h) => (
            <div key={h.value} className='about__stat'>
              <span className='about__stat-value'>{h.value}</span>
              <span className='about__stat-label'>{t(h.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
