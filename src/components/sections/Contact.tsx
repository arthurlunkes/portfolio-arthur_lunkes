import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { profile } from '../../data/profile';
import { ui } from '../../data/ui';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  /** Monta o corpo da mensagem a partir dos campos. */
  const buildBody = () => {
    const parts = [];
    if (name) parts.push(`${t(ui.formName)}: ${name}`);
    if (email) parts.push(`${t(ui.formEmail)}: ${email}`);
    parts.push('');
    parts.push(message);
    return parts.join('\n');
  };

  const validate = () => {
    if (!message.trim()) {
      setError(t(ui.formErrorMessage));
      return false;
    }
    setError('');
    return true;
  };

  const sendWhatsapp = () => {
    if (!validate()) return;
    const url = `https://wa.me/${profile.links.whatsapp}?text=${encodeURIComponent(buildBody())}`;
    window.open(url, '_blank', 'noopener');
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = name ? `Contato do portfólio — ${name}` : 'Contato do portfólio';
    const url = `mailto:${profile.links.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildBody())}`;
    window.location.href = url;
  };

  return (
    <Section id='contact'>
      <SectionTitle title={t(ui.contactTitle)} subtitle={t(ui.contactSubtitle)} />

      <form
        className='contact__form'
        onSubmit={(e) => {
          e.preventDefault();
          sendWhatsapp();
        }}
      >
        <div className='contact__row'>
          <label className='contact__field'>
            <span>{t(ui.formName)}</span>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='name'
            />
          </label>
          <label className='contact__field'>
            <span>{t(ui.formEmail)}</span>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
            />
          </label>
        </div>

        <label className='contact__field'>
          <span>{t(ui.formMessage)}</span>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        {error && <p className='contact__error'>{error}</p>}

        <div className='contact__actions'>
          <button type='submit' className='btn btn--primary'>
            💬 {t(ui.formSendWhatsapp)}
          </button>
          <button type='button' className='btn btn--ghost' onClick={sendEmail}>
            ✉️ {t(ui.formSendEmail)}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
