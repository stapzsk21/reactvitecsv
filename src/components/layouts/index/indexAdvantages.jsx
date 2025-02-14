// src/pages/Home.js
import { useTranslation } from '../../functions/translate/TranslationContext';


function IndexAdvantages() {
  const { translations } = useTranslation();
  const { indexHeaderTextItemCaption1 } = translations || {};

  return (
    <section>
        <h2>{indexHeaderTextItemCaption1}</h2>
        <p>{indexHeaderTextItemCaption1}</p>
        <button>{indexHeaderTextItemCaption1}</button>
    </section>
  );

}

export default IndexAdvantages;
