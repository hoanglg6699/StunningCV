import React, { useRef, useState } from 'react'
import './SoundBar.css'
import music from "../../assets/audio/Intro2022-SkyDecade.mp3"
import { Tooltip } from 'antd';
import "antd/lib/tooltip/style/index.css";

const SoundBar = (props) => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
            ref.current.volume = 0.1;
        }else{
            ref.current.pause();
        }
    }
  return (
    <Tooltip title={"Intro2022 - Sơn Tùng MTP"}>
        <div className='soundBar' onClick={() => handleClick()}>
            <span style={{animationPlayState: `${click ? 'running' : 'paused'}`}} className='soundBar-play'/>
            <span style={{animationPlayState: `${click ? 'running' : 'paused'}`}} className='soundBar-play'/>
            <span style={{animationPlayState: `${click ? 'running' : 'paused'}`}} className='soundBar-play'/>
            <span style={{animationPlayState: `${click ? 'running' : 'paused'}`}} className='soundBar-play'/>
            <span style={{animationPlayState: `${click ? 'running' : 'paused'}`}} className='soundBar-play' />
    
            <audio src={music} ref={ref} loop />
        </div>
    </Tooltip>
  )
}

export default SoundBar