import React, { useEffect } from 'react'
import './preLoader.css'
import {preLoaderAnim} from '../../animations'
const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim();
    },[])
  return (
    <div className='preloader'>
           <div className='texts-container'>
                <span>Developer,</span>
                <span>Curator,</span>
                <span>Vibe.</span>
           </div>
    </div>
  )
}

export default PreLoader