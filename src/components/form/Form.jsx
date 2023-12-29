import React from 'react'
import './Form.css'
import { useTranslation } from 'react-i18next'
import MyButton from '../button/MyButton'
import MyInput from '../input/MyInput'

const Form = () => {

  const [t, i18n] = useTranslation("Global")

  const handleSubmit = (e) => {
    //previene que el navegador recargue la página
    e.preventDefault()
  }

  const inputStyle = {
    // width: '350px',
    height: '40px'
  };

  const inputStyleText = {
    // width: '350px',
    height: '250px'
  };

  const buttonStyle = {
    width: "100px",
    backgroundColor: "#00a1fe",
    color: "white"
  }

  return (
    <div className='formContainer'>
        <form className='form' action='' method='POST' onSubmit={handleSubmit}>
            <h1 className='formTitle'>{t("form.title")}</h1>
            <MyInput
              placeholder={t("form.name")}
              value={""}
              onChange={()=>{}}
              type="text"
              name="name"
              style={inputStyle}
            />
            <MyInput
              placeholder={t("form.email")}
              value={""}
              onChange={()=>{}}
              type="email"
              name="email"
              style={inputStyle}
            />
            <MyInput
              placeholder={t("form.message")}
              value={""}
              onChange={()=>{}}
              type="text"
              name="message"
              style={inputStyleText}
            />
            <MyButton
              title={t("form.button-title")}
              type="submit"
              style={buttonStyle}
            />
        </form>
    </div>
  )
}

export default Form