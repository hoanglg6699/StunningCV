import React from 'react'
import './Introduce.css'

const Introduce = (props) => {
  return (
    <div className={props.click ? 'introduce-active' : 'introduce'}>

    </div>
  )
}

export default Introduce