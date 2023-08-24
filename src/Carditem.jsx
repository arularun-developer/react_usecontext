import React, { useEffect, useState } from 'react'



function Carditem({item}) {

   const[ count,setcount] =useState(0);
   console.log("🚀 ~ file: Carditem.jsx:8 ~ Carditem ~ count:", count)

  const[price,setprice] =useState(0);
  console.log("🚀 ~ file: Carditem.jsx:10 ~ Carditem ~ price:", price)
 
 
  const [revenue, setRevenue] = useState(0)
  console.log("🚀 ~ file: Carditem.jsx:13 ~ Carditem ~ revenue:", revenue)
  function increaseQuantity (){
   

     if (count >= 0){
       let total = count + 1
      setRevenue( item.price *total)
      setprice( count + 1)
      setcount(count + 1)
      
     }
  }
  
 const decreaseQuantity = () =>{
 
 
  if (count > 0){
    let total = count - 1
   setRevenue( item.price *total)
   setprice(count -1)
   setcount(count - 1)
   
  }
  
 }
    


 
  return (
    <>
         <div class="container text-center border border-3 mt-2">
          <div class="row">
          <div class="col-6 mt-3">
          <img src={item.thumbnail} alt={item.title} className='mt-5'/>
      </div>
      <div class="col-6 mt-5 ">
           <h3 className='fw-bold'>{item.title}</h3>
         <p className='fw-lighter fs-4 pt-3'><strong>{item.description}</strong></p>
        <p className='fw-bold fs-3  pt-3'>Price: ${item.price}</p>
        <p className='fs-3 pt-3'>Quantity: {item.quantity}{count}</p> 
      
      <button className='btn btn-primary btn-lg mb-3  btn-lg mt-3 ' onClick={increaseQuantity}>+</button>
      <button className='btn btn-danger btn-lg  ms-2  mb-3  mt-3' onClick={decreaseQuantity}>-</button>
     
     
      </div>
      </div>
      <div className='total border border-3 mb-2 me-3 '>
        <p className='fs-3'>Total Quantity: {price}</p>
   
       < p className='fs-3'>Total Amount : ${revenue}</p>

     </div>
     </div>
     
  
    

  
     
    
   
    </>
     
   
   

  )
  }
export default Carditem ;