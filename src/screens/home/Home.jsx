import React from 'react'
import './Home.css'
import roTrabajando from '../../assets/images/roTrabajando.jpg'
import logoNegro from '../../assets/images/logoNegro.png'
import nombreNegro from '../../assets/images/nombreNegro.png'
import { useTranslation } from 'react-i18next'

function Home() {

  const [t, i18n] = useTranslation("Global")

  return (
    <div className='homeContainer'>
        <div className='home'>
            <div className='imageContainer'>
                <img className='image' src={roTrabajando}/>
            </div>
            <div className='welcomeHome'>
              <h1 className='title'>{t("home.welcome")}</h1>
              <div className='logoContainer'>
                <img className='logoNegro' src={logoNegro}/>
                <img className='nombreNegro' src={nombreNegro}/>
              </div>
              <h3 className='subtitle'>{t("home.space")}</h3>
            </div>
        </div>
        <div className='sections'>
          <h1>{t("common.accept")}</h1>
          
        </div>
        <div className='form'>{t("form.form")}</div>
    </div>
  )
}

export default Home