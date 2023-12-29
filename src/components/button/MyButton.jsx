import React from 'react'
import './MyButton.css'

const MyButton = ({title, type, style}) => {

  return (
    <button
        className='myButton'
        type={type}
        style={{...style}}
    >{title}</button>
  )
}

export default MyButton