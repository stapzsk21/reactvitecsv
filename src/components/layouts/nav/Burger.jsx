// src/pages/Home.js
import { useTranslation } from '../../functions/translate/TranslationContext';
import { useBurger } from '../../../context/BurgerContext';

function Burger() {
  const { translations } = useTranslation();
  const { isMenuOpen, toggleMenu } = useBurger();
  const { indexHeaderTextItemCaption1 } = translations || {};

  return (
    <div className="nav-group flex hide-on-desk">
      <div 
        id="navBar" 
        className={`navbar-burger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="navbar-burger__item"></div>
        <div className="navbar-burger__item"></div>
        <div className="navbar-burger__item"></div>
      </div>
    </div>
  );
}

export default Burger;
