import React from 'react'
import NewToolsList from './NewToolsList'

export default function NewTools({data, AddFavourite}) {
  return (
    <div className='container'>
        <div className='newtools_sec'>
            <div className="title_newtools">
                <h1>Newcomer Tools</h1>
                <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                <a className='search_btn explore_btn' href='#!'>Explore more</a>
            </div>
            <NewToolsList data={data} AddFavourite={AddFavourite}/>
        </div>
    </div>
    
  )
}
