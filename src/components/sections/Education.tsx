import React from 'react';
import { CalendarDays, ExternalLink, GraduationCap, MapPin, Monitor, Users } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { education } from '../../data/education';
import { certificates } from '../../data/certificates';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

const Education: React.FC = () => {
  const { t, lang } = useLanguage();
  const trailhead = profile.trailhead;
  const numberFmt = new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US');

  return (
    <Section id='education'>
      <SectionTitle title={t(ui.educationTitle)} />

      <div className='edu__list'>
        {education.map((item) => (
          <div key={item.institution} className='edu__card'>
            <div className='edu__icon'>
              <GraduationCap size={26} aria-hidden='true' />
            </div>
            <div>
              <h3 className='edu__course'>{t(item.course)}</h3>
              <p className='edu__institution'>{item.institution}</p>
              <p className='edu__period'>
                <CalendarDays size={14} aria-hidden='true' /> {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      {trailhead && (
        <>
          <h3 className='edu__subtitle'>{t(ui.trailheadTitle)}</h3>
          <a
            className='trailhead'
            href={trailhead.url}
            target='_blank'
            rel='noreferrer'
            aria-label={t(ui.trailheadCta)}
          >
            <div className='trailhead__head'>
              <FontAwesomeIcon icon={faSalesforce} className='trailhead__logo' aria-hidden='true' />
              <div>
                <p className='trailhead__rank'>{trailhead.rank}</p>
                <p className='trailhead__handle'>salesforce.com/trailblazer/arthurlunkes</p>
              </div>
              <ExternalLink className='trailhead__external' size={18} aria-hidden='true' />
            </div>

            <div className='trailhead__stats'>
              <div>
                <strong>{numberFmt.format(trailhead.badges)}</strong>
                <span>{t(ui.trailheadBadges)}</span>
              </div>
              <div>
                <strong>{numberFmt.format(trailhead.points)}</strong>
                <span>{t(ui.trailheadPoints)}</span>
              </div>
              <div>
                <strong>{numberFmt.format(trailhead.trails)}</strong>
                <span>{t(ui.trailheadTrails)}</span>
              </div>
              <div>
                <strong>{numberFmt.format(trailhead.superbadges)}</strong>
                <span>{t(ui.trailheadSuperbadges)}</span>
              </div>
            </div>
          </a>
        </>
      )}

      <h3 className='edu__subtitle'>{t(ui.certificatesTitle)}</h3>
      {certificates.length === 0 ? (
        <p className='edu__empty'>{t(ui.certificatesEmpty)}</p>
      ) : (
        <div className='edu__certs'>
          {certificates.map((cert, i) => {
            const inPerson = cert.mode === 'in-person';

            return (
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
                  <p className='edu__cert-issuer'>
                    {cert.issuer} · {cert.date}
                  </p>
                  <div className='edu__cert-meta'>
                    <span
                      className={`edu__cert-mode edu__cert-mode--${inPerson ? 'in-person' : 'remote'}`}
                    >
                      {inPerson ? (
                        <Users size={13} aria-hidden='true' />
                      ) : (
                        <Monitor size={13} aria-hidden='true' />
                      )}
                      {t(inPerson ? ui.modeInPerson : ui.modeRemote)}
                    </span>
                    {inPerson && cert.place && (
                      <span className='edu__cert-place'>
                        <MapPin size={13} aria-hidden='true' />
                        {cert.place}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default Education;
