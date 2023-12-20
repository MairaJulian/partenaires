import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logoBlanco.png'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '../../main'

const NavBar = () => {

    const [t, i18n] = useTranslation("Global")

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value
        changeLanguage(selectedLanguage)
    }

  return (
        <nav className='navBar'>
            <div className='box'>
                <img src={logo} className='logo'/>
            </div>
            <div className='box'>
                <ul className='menu'>
                    <li>{t("navBar.history")}</li>
                    <li>{t("navBar.services")}</li>
                    <li>{t("navBar.patterns-in-pdf")}</li>
                    <li>{t("navBar.your-ideal-color")}</li>
                    <li>{t("navBar.blog")}</li>
                    <li>{t("navBar.contact")}</li>
                </ul>
            </div>
            <div className='box'>
                <div className='language'>
                    <select className='select' onChange={handleLanguageChange} value={i18n.language}>
                        <option className='idioma' value="" disabled selected>{t("navBar.language")}</option>
                        <option value="es">{t("navBar.spanish")}</option>
                        <option value="fr">{t("navBar.french")}</option>
                        <option value="en">{t("navBar.english")}</option>
                    </select>
                </div>
            </div>
        </nav>
  )
}

export default NavBar