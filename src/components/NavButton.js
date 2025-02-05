import React, { useState } from 'react'
import vector from '../imgs/vector.svg'

export default function NavButton() {
  const [hoverClass, setHoverClass] = useState("nav_btn");
  const [vectorClass, setVectorClass] = useState("vector");
  const [categoryClass, setCategoryClass] = useState("category_list");
  return (
    <div className="category_nav" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <button className={hoverClass}>Categories <img  className={vectorClass} src={vector} alt=""/></button>
        <ul className={categoryClass}>
            <li><a href='#!'>Category1</a></li>
            <li><a href='#!'>Category1</a></li>
            <li><a href='#!'>Category1</a></li>
        </ul>
    </div>    
  )

  function onMouseEnter () {
    setHoverClass(hoverClass + " nav_btn_hovered")
    setVectorClass(vectorClass + " vector_hovered")
    setCategoryClass(categoryClass + " category_list_hovered")
  }

  function onMouseLeave () {
    setHoverClass(hoverClass.replace(" nav_btn_hovered", ""))
    setVectorClass(vectorClass.replace(" vector_hovered", ""))
    setCategoryClass(categoryClass.replace(" category_list_hovered", "")) 
  }
}
