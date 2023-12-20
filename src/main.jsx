import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import English from './i18n/english/Global.json'
import Spanish from './i18n/spanish/Global.json'
import French from './i18n/french/Global.json'

export const changeLanguage = (language) => {
  i18next.changeLanguage(language);
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    en: {
      Global: English
    },
    fr: {
      Global: French
    },
    es: {
      Global: Spanish
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
