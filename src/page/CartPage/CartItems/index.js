import React from 'react'
import { useCartContext } from '../../../hooks/useCartContext'
import './styles.css'

const CartItems = ({item}) => {
  const { dispatch } = useCartContext();

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={item.img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>

        {/* <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div> */}

        <div className="price">
          <h3>{item.price}₹</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove"
             onClick={() => removeItem(item.id)}></i>
        </div>
      </div>

      <hr />
    </>
  )
}

export default CartItems