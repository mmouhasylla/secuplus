import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/contactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log("Formulaire soumis");
    console.log(data.nom, data.prenom, data.objet, data.telephone, data.email, data.message);

    const templateParams = {
      nom: data.nom,
      prenom: data.prenom,
      objet: data.objet,
      telephone: data.telephone,
      email: data.email,
      message: data.message,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage(t('contactForm.successMessage'));
          setTimeout(() => setSuccessMessage(''), 5000);
          reset();
        },
        (err) => {
          console.log('FAILED...', err);
          setSuccessMessage(t('contactForm.errorMessage'));
          setTimeout(() => setSuccessMessage(''), 5000);
        },
      );
  };

  return (
    <div className='ContactForm'>
      <h2>{t('contactForm.title')}</h2>

      {successMessage && (
        <div className="alert alert-success">
          {successMessage}
        </div>
      )}

      <form id={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='formRow'>
          <input
            type='text'
            name='nom'
            {...register('nom', { required: t('contactForm.errors.lastNameRequired') })}
            className='formInput'
            placeholder={t('contactForm.placeholders.lastName')}
          />
          <input
            type='text'
            name='prenom'
            {...register('prenom', { required: t('contactForm.errors.firstNameRequired') })}
            className='formInput'
            placeholder={t('contactForm.placeholders.firstName')}
          />
        </div>
        <div className='formRow'>
          <input
            type='text'
            name='objet'
            {...register('objet', { required: t('contactForm.errors.subjectRequired') })}
            className='formInput'
            placeholder={t('contactForm.placeholders.subject')}
          />
        </div>
        <div className='formRow'>
          <input
            type='tel'
            name='telephone'
            {...register('telephone')}
            className='formInput'
            placeholder={t('contactForm.placeholders.phone')}
          />
          <input
            type='email'
            name='email'
            {...register('email', {
              required: t('contactForm.errors.emailRequired'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('contactForm.errors.emailInvalid')
              }
            })}
            className='formInput'
            placeholder={t('contactForm.placeholders.email')}
          />
        </div>
        {errors.email && <span className="error-message">{errors.email.message}</span>}
        <div className='formRow'>
          <textarea
            rows={4}
            name='message'
            {...register('message', { required: t('contactForm.errors.messageRequired') })}
            className='formInput'
            placeholder={t('contactForm.placeholders.message')}
          />
        </div>
        <button className='submit-btn' type='submit'>{t('contactForm.submitButton')}</button>
      </form>
    </div>
  );
};

export default ContactForm;