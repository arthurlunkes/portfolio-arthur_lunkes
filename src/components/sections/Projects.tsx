import React, { useState } from 'react';
import { CodeXml, ExternalLink, Images, Maximize2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Tag from '../ui/Tag';
import ProjectModal, { galleryOf } from '../ui/ProjectModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { Project } from '../../interfaces/content';
import { projects } from '../../data/projects';
import { ui } from '../../data/ui';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  // Destaques primeiro, mantendo a ordem original dentro de cada grupo.
  const sorted = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section id='projects'>
      <SectionTitle title={t(ui.projectsTitle)} subtitle={t(ui.projectsSubtitle)} />

      <div className='projects__grid'>
        {sorted.map((project) => {
          const images = galleryOf(project);

          return (
            <article key={project.name} className='project-card'>
              <button
                type='button'
                className='project-card__media'
                onClick={() => setSelected(project)}
                aria-label={`${project.title || project.name} — ${t(ui.viewDetails)}`}
              >
                {project.image ? (
                  <>
                    {/* Fundo desfocado da própria imagem — prints verticais e
                        dashboards largos aparecem inteiros, sem corte. */}
                    <span
                      className='project-card__media-bg'
                      style={{ backgroundImage: `url(${project.image})` }}
                      aria-hidden='true'
                    />
                    <img className='project-card__img' src={project.image} alt={project.name} />
                  </>
                ) : (
                  <div className='project-card__media-placeholder'>
                    <CodeXml size={38} aria-hidden='true' />
                  </div>
                )}

                <span className='project-card__zoom'>
                  <Maximize2 size={16} aria-hidden='true' />
                </span>

                {images.length > 1 && (
                  <span className='project-card__count'>
                    <Images size={14} aria-hidden='true' />
                    {images.length}
                  </span>
                )}
              </button>

              <div className='project-card__body'>
                <h3 className='project-card__title'>{project.title || project.name}</h3>
                <p className='project-card__desc'>{t(project.description)}</p>

                <div className='project-card__tags'>
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                <div className='project-card__links'>
                  <button
                    type='button'
                    className='project-card__details'
                    onClick={() => setSelected(project)}
                  >
                    {t(ui.viewDetails)} <Maximize2 size={14} aria-hidden='true' />
                  </button>

                  {project.repoUrl && (
                    <a href={project.repoUrl} target='_blank' rel='noreferrer'>
                      <FontAwesomeIcon icon={faGithub} aria-hidden='true' /> {t(ui.viewCode)}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                      <ExternalLink size={14} aria-hidden='true' /> {t(ui.viewLive)}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
};

export default Projects;
