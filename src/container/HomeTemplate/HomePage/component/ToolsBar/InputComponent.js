import React from 'react'

export default function InputComponent() {
  return (
  <div className="search__container d-flex">
       
        <div className='input__search__icon'>
          <i class="fas fa-search"></i>
        </div>       
        
        
        <div className='input_group'>
            <input placeholder='Search your destination'/>
        </div>
  
  </div>

  )
}
