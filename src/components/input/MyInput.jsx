import React from 'react'
import './MyInput.css'

const MyInput = ({placeholder, value, onChange, type, name, style}) => {
  return (
    <label className='labelInput'>
        <input
            className='myInput'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            style={{...style}}
        />
    </label>
  )
}

export default MyInput