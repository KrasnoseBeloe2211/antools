import React, { useState } from 'react'
import search from '../imgs/search.svg'

export default function Search() {  
  const [searchAnim, setSearchAnim] = useState("search_img")

  return (
    <div className='searching_tools'>
            <h1 className='welcome_title'>Awesome tools for
            Designer & Developer<b className='dot'>.</b></h1>
            <p className='welcome_par'>Antool is a web collection of information on paid or free Design and Development tools</p>
            <div  className='search_field'>
              <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='search_input_field'>
                <img className={searchAnim} src={search} alt="" />
                <input className='search_input' placeholder='find more than 430+ tools...'/>
              </div>              
              <button id='s_btn' className='search_btn'>Search</button>
            </div>
    </div>
  )

  function onMouseEnter () {
    setSearchAnim(searchAnim + ' search_hovered');
  }

  function onMouseLeave () {
    setSearchAnim(searchAnim.replace(' search_hovered', ''));
  }

}
