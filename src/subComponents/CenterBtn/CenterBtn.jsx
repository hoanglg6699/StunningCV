import React from 'react'
import './CenterBtn.css'

const CenterBtn = (props) => {
  return (
    <div className='centerBtn-wrapper'>
        <button id='centerBtn'>
            <div style={{ width: props.click ? 120 : 200, height: props.click ? 120 : 200 }} className="item1"></div>
            <div style={{ width: props.click ? 60 : 100, height: props.click ? 60 : 100 }} className="item2"></div>
            <div style={{ width: props.click ? 5 : 30, height: props.click ? 5 : 30 }} className="item3"></div>
        </button>
    </div>
  )
}

export default CenterBtn