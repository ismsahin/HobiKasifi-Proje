import React from 'react'

import AnasayfaSlider from "./anasayfa/anasayfaSlider"
import HobiCesit from './anasayfa/HobiCesit'
import HobiOneri from './anasayfa/HobiOneri'

const anasayfa = () => {
  return (
    <div className='sm:w-9/12 mx-auto'>
        <AnasayfaSlider/>
        <HobiCesit/>
        <HobiOneri/>
        

    </div>
  )
}

export default anasayfa