import React from 'react'
import Search from './Search'
import illustration from '../imgs/Illustration.png'

export default function Welcome() {
  return (
    <div className='container'>
      <div className='welcome_section'>
        <Search/>
        <img id='illust1' src={illustration} alt=''/>        
      </div>
    </div>
    
  )
}
