// src/pages/Register.js
import { useTranslation } from '../components/functions/translate/TranslationContext';
import { handleFormSubmit } from '../components/functions/forms/FormHandler';

function Register() {
  const { translations } = useTranslation();
  const { email, firstName, lastName, password, confirmPassword, phone, submit } = translations.register || {};

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="email" placeholder={email} required />
      <input type="text" placeholder={firstName} required />
      <input type="text" placeholder={lastName} required />
      <input type="password" placeholder={password} required />
      <input type="password" placeholder={confirmPassword} required />
      <input type="tel" placeholder={phone} required />
      <button type="submit">{submit}</button>
    </form>
  );
}

export default Register;
