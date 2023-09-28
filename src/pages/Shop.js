import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shop = ({createElementToBasket,cart}) => {
  
    const [product, setProduct] = useState([])
    const handleClick = (el) => {
        createElementToBasket(el)
    }
    useEffect(() => {
        const getProducts = async () => {
            let { data } = await axios("https://my-json-server.typicode.com/VeronikaKan/server/products")
            setProduct(data);
        }
        getProducts()
    }, [])
    console.log(product);
    return (
        <div className='shop'>
        <div className='container'>
        <div className='shop__wrapper' >
         
            {
                product.map((el) => (
                   
                    <div className='shop__card' key={el.id}>
                        <div className='shop__img'>
                            <img src={el.img} />
                        </div>
                        <p className='shop__title'>{el.title}</p>
                        <p className='shop__price'> {el.price}$</p>
                        <button onClick={() => handleClick(el)} className='shop__btn'>Add to cart</button>
                    </div>
                  
                ))
            }
            </div>
        </div>
        </div>
    )
}

export default Shop