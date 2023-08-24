import React, { useContext } from 'react'
 import { CartContext } from './App'
import Carditem from './Carditem'


function Cardpage() {
    const { carditem} = useContext(CartContext)
    
  return (
    <div>
        {
            carditem.map((item) =>(
              <Carditem key={item.id} item={item} />
              
            ))
               
        }
      

    </div>
  )
}

export default Cardpage