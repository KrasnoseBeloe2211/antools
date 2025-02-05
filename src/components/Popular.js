import React from 'react'
import AppList from './AppList'


export default function Popular({data, AddFavourite}) {

  return (
    <div className='most_popular_sec'>
        <div className='pop_title'>
            <h1>Most Popular Tools</h1>
            <p>
                Tools for the best Designers and Developers
                most popularly used in the world
            </p>
        </div>
        <AppList AddFavourite={AddFavourite} data={data}/>        
    </div>
  )
}
