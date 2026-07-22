import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tag from './Tag';
import { useLanguage } from '../../contexts/LanguageContext';
import { Project } from '../../interfaces/content';
import { ui } from '../../data/ui';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/** Junta a capa e as imagens extras em uma lista única, sem repetir. */
export const galleryOf = (project: Project): string[] =>
  Array.from(new Set([project.image, ...(project.images || [])].filter(Boolean) as string[]));

/**
 * Modal de detalhes do projeto: galeria de imagens, descrição longa,
 * destaques e a stack utilizada.
 */
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const images = galleryOf(project);
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  // Esc fecha, setas navegam na galeria; trava o scroll do fundo enquanto aberto.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, prev, next]);

  const title = project.title || project.name;

  // Portal no body: a seção tem `will-change: transform` (scroll reveal), o que
  // criaria um containing block e quebraria o `position: fixed` do modal.
  return createPortal(
    // O fundo é apenas decorativo/click-to-close; o diálogo em si é o painel.
    <div className='modal' role='presentation' onClick={onClose}>
      <div
        className='modal__panel'
        role='dialog'
        aria-modal='true'
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          className='modal__close'
          onClick={onClose}
          aria-label={t(ui.closeAria)}
        >
          <X size={20} aria-hidden='true' />
        </button>

        {images.length > 0 && (
          <div className='modal__gallery'>
            {/* Fundo desfocado da própria imagem: preenche as sobras sem cortar o print. */}
            <span
              className='modal__gallery-bg'
              style={{ backgroundImage: `url(${images[index]})` }}
              aria-hidden='true'
            />
            <img
              className='modal__gallery-img'
              src={images[index]}
              alt={`${title} — ${index + 1}`}
            />

            {images.length > 1 && (
              <>
                <button
                  type='button'
                  className='modal__nav modal__nav--prev'
                  onClick={prev}
                  aria-label={t(ui.prevImageAria)}
                >
                  <ChevronLeft size={22} aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className='modal__nav modal__nav--next'
                  onClick={next}
                  aria-label={t(ui.nextImageAria)}
                >
                  <ChevronRight size={22} aria-hidden='true' />
                </button>
              </>
            )}
          </div>
        )}

        {images.length > 1 && (
          <div className='modal__thumbs'>
            {images.map((src, i) => (
              <button
                key={src}
                type='button'
                className={`modal__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`${t(ui.projectGallery)} ${i + 1}`}
              >
                <img src={src} alt='' />
              </button>
            ))}
          </div>
        )}

        <div className='modal__body'>
          <h3 className='modal__title'>{title}</h3>
          {project.year && <p className='modal__year'>{project.year}</p>}

          <p className='modal__desc'>{t(project.longDescription || project.description)}</p>

          {project.highlights && project.highlights.length > 0 && (
            <>
              <h4 className='modal__subtitle'>{t(ui.projectHighlights)}</h4>
              <ul className='modal__highlights'>
                {project.highlights.map((h) => (
                  <li key={h.en}>{t(h)}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className='modal__subtitle'>{t(ui.projectStack)}</h4>
          <div className='modal__tags'>
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className='modal__links'>
            {project.repoUrl && (
              <a
                className='btn btn--ghost'
                href={project.repoUrl}
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden='true' /> {t(ui.viewCode)}
              </a>
            )}
            {project.liveUrl && (
              <a
                className='btn btn--primary'
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
              >
                <ExternalLink size={16} aria-hidden='true' /> {t(ui.viewLive)}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
