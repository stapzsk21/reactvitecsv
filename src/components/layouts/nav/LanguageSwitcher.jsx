import { useTranslation } from "../../functions/translate/TranslationContext";
import { APP_CONSTANTS } from "../../../constants/site.config";

function LanguageSwitcher() {
  const { setLanguage, language } = useTranslation();
  const { languages } = APP_CONSTANTS;

  return (
    <div className="language-switcher">
      {/* Текущий язык */}
      <button className="active">
        {language.toUpperCase()}
      </button>

      {/* Выпадающий список */}
      <div className="language-switcher__dropdown">
        {Object.entries(languages.list).map(([code, enabled]) => 
          enabled && code !== language && (
            <button 
              key={code}
              onClick={() => setLanguage(code)}
              className={language === code ? "active" : ""}
            >
              {code.toUpperCase()}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
