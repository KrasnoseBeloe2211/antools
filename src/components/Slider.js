import React from 'react'

import arrow_right from "../imgs/arrow_slider.png"

export default function Slider({sliders}) {
  return (
    <div className='slider_sec'>
        <div className='container'>
            <div className='slider'>
                <div className='active_slider'>
                    <button className='scard_switcher'><img className='arrow_s arrow_left' src={arrow_right}/></button>
                    <div className='s_cards'>
                        {sliders.map((sCard, index) => (
                            <div key={index} className='slider_card'>
                                <div className='scard_photo'>
                                    <img className='author_p' src={sCard.photo} alt=""/>
                                    <div className='author_text' >
                                        <h3>{sCard.author_name}</h3>
                                        <p>{sCard.job}</p>
                                    </div>
                                </div>
                                <p className='s_paragraph'>{sCard.paragraph}</p>
                            </div>
                        ))}
                    </div>                   
                    <button className='scard_switcher'><img className='arrow_s arrow_right' src={arrow_right}/></button>
                </div>
                <div className='pointers_slider'>
                    <img className='pointer'/>
                    <img className='pointer'/>
                    <img className='pointer'/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
