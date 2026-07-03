import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { ui } from '../../data/ui';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  // Destaques primeiro, mantendo a ordem original dentro de cada grupo.
  const sorted = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section id='projects'>
      <SectionTitle title={t(ui.projectsTitle)} subtitle={t(ui.projectsSubtitle)} />

      <div className='projects__grid'>
        {sorted.map((project) => (
          <article key={project.name} className='project-card'>
            <div className='project-card__media'>
              {project.image ? (
                <img src={project.image} alt={project.name} />
              ) : (
                <div className='project-card__media-placeholder'>
                  <span>{'</>'}</span>
                </div>
              )}
            </div>

            <div className='project-card__body'>
              <h3 className='project-card__title'>{project.name}</h3>
              <p className='project-card__desc'>{t(project.description)}</p>

              <div className='project-card__tags'>
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              <div className='project-card__links'>
                {project.repoUrl && (
                  <a href={project.repoUrl} target='_blank' rel='noreferrer'>
                    {t(ui.viewCode)} ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                    {t(ui.viewLive)} ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
