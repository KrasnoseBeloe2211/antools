import React from 'react'

export default function NewToolsList({data, AddFavourite}) {
    const new_data = data.slice(6,10);
  return (
    <div className='newtools_list'>
        {new_data.map((appCard, index) => (
        <div className='app_card newtool_card' key={index}>
            <div className='app_title'>
              <img className='app_logo' src={appCard.logo} alt="" />
              <div className='app_title_text'>
                  <h4>{appCard.title}</h4>
                  <h6>{appCard.price}</h6>
              </div>
          </div>
          <p className='app_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="buttons newtool_btns">
              <button className='like' onClick={() => {AddFavourite(appCard)}}><img className='liked' src={appCard.liked} alt=""/></button>                
              <a href={appCard.href} className='visit'>Visit</a>
          </div> 
        </div>))}
    </div>
  )
}
