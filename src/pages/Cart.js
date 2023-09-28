import React from 'react'

const Cart = ({ cart, setCart,removeCart }) => {
let total = cart.reduce((acc,rec) => {
  return acc + (rec.price*rec.count)},0)

const handleRemove = (e) => {
  removeCart()
  localStorage.clear()
}
  const handleAdd = (id) => {
    console.log(id)
    const newCart = cart.map((item) => {
      if (id === item.id) {
        return {
          ...item, count: item.count + 1
        }
      }
      return item;
    })
    console.log(newCart)
    setCart(newCart);
    localStorage.setItem('product', JSON.stringify(newCart))
  }

  const handleSub = (id) => {
    const newCart = cart.map((item) => {
      if (id === item.id) {
        return {
          ...item, count: item.count - 1
        }
      }
      return item;
    }).filter((item) => item.count > 0);
    setCart(newCart);
    localStorage.setItem('product', JSON.stringify(newCart))
  }
  return(
<div className='container'>
    <div className='cart__wrapper'>{
   
      cart? cart.map((el, i)=>
      <div key ={i}className="sm:justify-between sm:mb-6 sm:rounded-lg sm:bg-white sm:p-6 sm:mb-2.5	 sm:shadow-md sm:flex sm:justify-start " >
      <img src={el.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{el.title}</h2>
          <p className="mt-1 text-xs text-gray-700">{el.price}$</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span onClick={() => handleSub(el.id)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={el.count} />
            <span onClick={() => handleAdd(el.id)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </div> 
      )
        :<div>Cart is empty</div>
    }
   
    </div>
   {cart[0]?
    <div className=" mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 cart__center">
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total Price</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{total}$</p>
          </div>
        </div>
        <button onClick={handleRemove} className="mt-6 w-full rounded-md bg-black  py-1.5 font-medium text-white hover:bg-blue-600">Remove Cart</button>
      </div>:<div className='cart__empty'>Cart is empty</div>}
    </div>
  )
  




}

export default Cart