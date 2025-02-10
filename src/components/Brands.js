import React from 'react'
import microsoft from '../imgs/microsoft.png'
import google from '../imgs/google.png'
import slack from '../imgs/slack_logo.png'
import wordpress from '../imgs/wordpress.png'

export default function Brands() {
  return (
    <div className='brands_sec'>
        <div className='brands'>
            <h6>Trusted more than 150+ brand</h6>
            <div className='brand_list'>
                <img src={microsoft} alt=''/>
                <img src={google} alt=''/>
                <img src={slack} alt=''/>
                <img src={wordpress} alt=''/>
            </div>
        </div>
    </div>
  )
}
