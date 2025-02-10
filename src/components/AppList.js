import React from 'react'

export default function AppList({data, AddFavourite}) {
  const new_data = data.slice(0,6)
  return (
    <div className='app_list'>
      {new_data.map((appCard, index) => (
        <div key={index} className='app_card'>
          <div className='app_title'>
              <img className='app_logo' src={appCard.logo} alt="" />
              <div className='app_title_text'>
                  <h4>{appCard.title}</h4>
                  <h6>{appCard.price}</h6>
              </div>
          </div>
          <p className='app_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="buttons">
              <button className='like' onClick={() => {AddFavourite(appCard)}}><img className='liked' src={appCard.liked} alt=""/></button>                
              <a href={appCard.href} className='visit'>Visit</a>
          </div> 
        </div>))}        
    </div>
  )
}
