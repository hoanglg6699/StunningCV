import React from 'react'
import { NavLink } from 'react-router-dom'
import { PowerBtn } from '../../components/AllSvgs'
import './PowerButton.css'

const PowerButton = () => {
  return (
    <button className='power-Btn'>
        <NavLink to={'/'}> 
            <PowerBtn width={30} height={30} fill='currentColor' />
        </NavLink>
    </button>
  )
}

export default PowerButton