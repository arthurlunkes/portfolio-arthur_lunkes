import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import { useLanguage } from '../../contexts/LanguageContext';
import { skills } from '../../data/skills';
import { ui } from '../../data/ui';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id='skills'>
      <SectionTitle title={t(ui.skillsTitle)} />

      <div className='skills__grid'>
        {skills.map((group) => (
          <div key={group.title.en} className='skills__group'>
            <h3 className='skills__group-title'>{t(group.title)}</h3>
            <div className='skills__tags'>
              {group.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
