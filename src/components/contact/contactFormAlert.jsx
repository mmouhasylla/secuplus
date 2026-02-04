import { useState } from 'react';

const [disabled, setDisabled] = useState(false);
const [alertInfo, setAlertInfo] = useState({
  display: false,
  message: '',
  type: '',
});

// Shows alert message for form submission feedback
const toggleAlert = (message, type) => {
  setAlertInfo({ display: true, message, type });

  // Hide alert after 5 seconds
  setTimeout(() => {
    setAlertInfo({ display: false, message: '', type: '' });
  }, 5000);
};

// Function called on submit that uses emailjs to send email of valid contact form
const onSubmit = async (data) => {
  // Destrcture data object
  const { name, email, subject, message } = data;
  try {
    // Disable form while processing submission
    setDisabled(true);

    // Define template params
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    // Use emailjs to email contact form data
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    );

    // Display success alert
    toggleAlert('Form submission was successful!', 'success');
  } catch (e) {
    console.error(e);
    // Display error alert
    toggleAlert('Uh oh. Something went wrong.', 'danger');
  } finally {
    // Re-enable form submission
    setDisabled(false);
    // Reset contact form fields after submission
    reset();
  }
};

{alertInfo.display && (
  <div
    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
    role='alert'
  >
    {alertInfo.message}
    <button
      type='button'
      className='btn-close'
      data-bs-dismiss='alert'
      aria-label='Close'
      onClick={() =>
        setAlertInfo({ display: false, message: '', type: '' })
      } // Clear the alert when close button is clicked
    ></button>
  </div>
)}