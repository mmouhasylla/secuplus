import React, { useState } from 'react';

const ContactForm = () => {
  // Déclarez des états pour gérer les valeurs des entrées
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Déclarez un état pour gérer les erreurs et les soumissions
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.message) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log('Formulaire soumis avec succès :', formData);
      // Vous pouvez envoyer les données au serveur ici via fetch ou axios
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contactez-nous</h2>
      {submitted ? (
        <p>Merci pour votre message !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
