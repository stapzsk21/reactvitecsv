// src/pages/About.js
import { useTranslation } from '../components/functions/translate/TranslationContext';

function About() {
  const { translations } = useTranslation();
  const { title, description } = translations.about || {};

  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default About;
