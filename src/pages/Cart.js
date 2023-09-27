import React from 'react'

const Cart = ({cart}) => {
  console.log(cart);
  return(

    <div className='content'>{

      cart? cart.map((el, i)=> <div key = {i}>{el.title}:{el.count}</div>) :
      <div>Cart is empty</div>
    }
    </div>
  )
  




}

export default Cart