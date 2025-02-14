// src/components/Footer.js
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from './functions/translate/TranslationContext';

import { APP_CONSTANTS } from '../constants/site.config';

import logo from '../assets/images/react.svg';
import footerEmail from '../assets/images/footer-email.svg';
import footerLocation from '../assets/images/footer-location.svg';
import footerCopy from '../assets/images/footer-copy.svg';
import docsIcon from '../assets/images/docs-icon.svg';

function Footer() {
  const { translations } = useTranslation();
  const location = useLocation();
  const { navMain, navAbout, navContacts, navLogin, navRegister } = translations || {};



  return (
    <footer className='footer'>
      <div className="wrapper">

        <div className="footer-wrapper flex">

          <div className="footer-wrapper__top flex">
            <div className="footer-wrapper__logo">
              <Link className='nav-logo' to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="footer-wrapper__lists flex">
              <ul className='footer-list flex'>
                <li className={`footer-list__item ${location.pathname === '/' ? 'active' : ''}`}><Link className='footer-list__link' to="/">{navMain}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/about' ? 'active' : ''}`}><Link className='footer-list__link' to="/about">{navAbout}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/contacts' ? 'active' : ''}`}><Link className='footer-list__link' to="/contacts">{navContacts}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/login' ? 'active' : ''}`}><Link className='footer-list__link' to="/login">{navLogin}</Link></li>
              </ul>
              <ul className='footer-list flex'>
                <li className={`footer-list__item ${location.pathname === '/' ? 'active' : ''}`}><Link className='footer-list__link' to="/">{navMain}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/about' ? 'active' : ''}`}><Link className='footer-list__link' to="/about">{navAbout}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/contacts' ? 'active' : ''}`}><Link className='footer-list__link' to="/contacts">{navContacts}</Link></li>
                <li className={`footer-list__item ${location.pathname === '/login' ? 'active' : ''}`}><Link className='footer-list__link' to="/login">{navLogin}</Link></li>
              </ul>
            </div>
            <div className="footer-wrapper__info flex">
              <div className="footer-info email flex">
                <img src={footerEmail} className='footer-email' />
                <p className='js--url-to-mail'>{APP_CONSTANTS.companyData.email}</p>
              </div>
              <div className="footer-info address flex">
                <img src={footerLocation} className='footer-item__icon' />
                <span>{APP_CONSTANTS.companyData.adres}</span>
              </div>
              <div className="footer-info copy flex">
                <img src={footerCopy} className='copy-icon' />
                <p className="footer-copy">
                  <span className="footer-ssl">Все права защищены. </span>
                  <span className="footer-copyright">2017-2025 {APP_CONSTANTS.companyData.title}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-wrapper__docs flex">
            <div className="docs-list">
              <div className="docs-list__item">
                <img src={docsIcon} alt="logo" className='docs-icon' />
                <span className="docs-list__text">Пoльзoвaтельcкoе coглaшение</span>
              </div>
              <div className="docs-list__item">
                <img src={docsIcon} alt="logo" className='docs-icon' />
                <span className="docs-list__text">Зaявление o pacкpытии pиcкoв</span>
              </div>
              <div className="docs-list__item">
                <img src={docsIcon} alt="logo" className='docs-icon' />
                <span className="docs-list__text">Противодействие отмыванию денег</span>
              </div>
              <div className="docs-list__item">
                <img src={docsIcon} alt="logo" className='docs-icon' />
                <span className="docs-list__text">Политика в отношении конфликта интересов</span>
              </div>
              <div className="docs-list__item">
                <img src={docsIcon} alt="logo" className='docs-icon' />
                <span className="docs-list__text">Политика вывода и возврата средств</span>
              </div>
            </div>
          </div>

          <div className="footer-company">
            <div className="footer-company-info">
              <p className="footer-company-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="footer-company-content">
              <p className="footer-info bottom small-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores perspiciatis praesentium laudantium quia assumenda, ut distinctio nemo est libero excepturi velit! Doloremque earum nisi sit vero cumque cum necessitatibus sint?</p>
            </div>
            <div className="footer-company-refusal">
              <p className="footer-info refusal small-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, et assumenda! Magnam dolor doloremque libero, dignissimos iure, veritatis quam illo cum aperiam aliquam modi! Nemo at soluta tempora dolore eligendi.</p>
            </div>
          </div>

        </div>

      </div>
      
      
    </footer>
  );
}

export default Footer;
