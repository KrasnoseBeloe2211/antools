import React, { useState, useEffect } from 'react'

import arrow_right from "../imgs/arrow_slider.png"

let position = 0;
export default function Slider({sliders}) {      
    let width = -sliders.length * 850    
    console.log(width)
    const [styleS, SetStyleS] = useState({transform : `translateX(${position}px)`,
    display: "flex",
    transition : "all 0.3s ease-in-out"
  }); 
  const [arrowActRight, SetarrowActRight] = useState("arrow_s arrow_right")
  const [arrowActLeft, SetarrowActLeft] = useState("arrow_s arrow_left") 
  function SetNewPositionRight () {  
    position-=850      
    if (position===width) {
        position +=850
    } 
    return position
  }
  function SetNewPositionLeft () {      
    if (position !== 0) {
        position+=850 
    }
    return position
  }
  function NextSlide () {   
    SetStyleS({transform : `translateX(${SetNewPositionRight()}px)`,
    display: "flex",
    transition : "all 0.3s ease-in-out"})   
    console.log(position) 
  }
  function PrevSlide () {
    SetStyleS({transform : `translateX(${SetNewPositionLeft()}px)`,
    display: "flex",
    transition : "all 0.3s ease-in-out"    
    }) 
  }
  return (
    <div className='slider_sec'>
        <div className='container'>
            <div className='slider'>
                <div className='active_slider'>
                    <button onClick={(e) => {e.stopPropagation(); PrevSlide();}} className='scard_switcher'><img className={arrowActLeft} src={arrow_right}/></button>
                    <div className='s_cards'>
                        <div style={styleS} >
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
                        
                    </div>                   
                    <button onClick={(e) => {e.stopPropagation(); NextSlide();}} className='scard_switcher'><img className={arrowActRight} src={arrow_right}/></button>
                </div>
                <div className='pointers_slider'>
                    {sliders.map((pointer, index) => (
                        <div key={index} className='pointer'></div>
                    ))}
                    
                </div>                
            </div>
        </div>        
    </div>
  )}
