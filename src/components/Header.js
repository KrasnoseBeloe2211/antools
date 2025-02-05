import React from 'react'
import logo from '../imgs/logo.svg'
import NavButton from './NavButton'

export default function Header() {
  return (
    <div className='container'>
         <div className='header'>        
            <img src={logo} alt="" />
            <nav>
                <ul  className='header_nav'>
                    <li>
                        <a href='#!'>Home</a>
                    </li>
                    <li>
                        <NavButton/>
                    </li>
                    <li>
                        <a href='#!'>My Collections</a>
                    </li>
                    <li>
                        <a href='#!'>Blog</a>
                    </li>
                </ul>
            </nav>
            <div className="login_sign">
                <a className='login_btn' href='#!'>Login</a>
                <a className='sign_gtn' href='#!'>Sign up</a>
            </div>        
        </div>
    </div>
   
  )
}

