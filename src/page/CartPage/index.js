import React, { useEffect } from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import { products } from '../../dummyData' 
import { Container } from 'react-bootstrap'
import CartItems from './CartItems'

const CartPage = () => {
  const { cartItems, dispatch } = useCartContext();
  useEffect(() => {
    dispatch({
      type: "SET_CART",
      payload: products, 
    })
  }, [])
  
  return (
    <>
      <Container>
        { cartItems &&
          cartItems.map((item) => (
            <CartItems item={item} key={item.id} ></CartItems>
          ))
        }
      </Container>
    </>
  )
}

export default CartPage