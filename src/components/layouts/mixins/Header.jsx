// src/components/Header.js
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "../../functions/translate/TranslationContext";

import indexHeaderImage from '../../../assets/images/index-header-image.png';
import aboutHeaderImage from '../../../assets/images/about-header-image.png';
import contactsHeaderImage from '../../../assets/images/contacts-header-image.png';

import btnIcon from '../../../assets/images/btn-icon.svg';
import reactIcon from '../../../assets/images/react.svg';

import { APP_CONSTANTS } from '../../../constants/site.config';

import { useEffect } from 'react';




function Header() {
  const { translations } = useTranslation();
  const location = useLocation();

  const { indexHeaderTextItemCaption1, aboutHeaderTextItemCaption2, contactsHeaderTextItemCaption3 } = translations || {};

  const headerContent = {
    '/': { text: indexHeaderTextItemCaption1, image: indexHeaderImage },
    '/about': { text: aboutHeaderTextItemCaption2, image: aboutHeaderImage },
    '/contacts': { text: contactsHeaderTextItemCaption3, image: contactsHeaderImage },
  };

  const currentContent = headerContent[location.pathname] || {
    text: 'Загрузка...',
    image: reactIcon,
  };

  useEffect(() => {
    console.log('render', translations);
  });

  return (
    <header className='page-header'>
      <div className="wrapper">

        <div className="page-header__inner flex">

          <div className="page-header__image">
            <img src={currentContent.image} />
          </div>

          <div className="page-header__info">

            <p className="page-header__caption">{currentContent.text}</p>
            <h1 className='h1-title page-header__title'>{currentContent.text}</h1>

            <div className="page-header__texts flex">
              <p className="page-header__text text">{currentContent.text}</p>
              <p className="page-header__text text">{currentContent.text}</p>
            </div>

            <div className="page-header__buttons">
              <Link to="/register" className='btn btn-main btn-main-arrow'>
                <img src={btnIcon} className='btn-arrow left' />
                <span>Тест</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;
