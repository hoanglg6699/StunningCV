import React from 'react'
import './LogoComponent.css'
import { darkTheme } from '../../components/Themes/Themes'

const LogoComponent = (props) => {
  return (
    <h1
      style={{
        color: `${
          props.theme === "dark" ? darkTheme.text : darkTheme.body
        }`,
      }}
    className='logo'
     >
      HLG
    </h1>
  )
}

export default LogoComponent