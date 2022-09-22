import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import  arrow  from "../Images/arrow.png";
import  cart from "../Images/cart.png";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="Dump-More"> 
            <img src="./images/arrow.png" alt="arrow" style={{width:"2px", height:"2px"}}/>
            <h3>Dump More</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Dump Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in dump cart
          </p>
        </section>
      </>
    );
  }
  
  return (
    <>
      <header>
        <div className="Dump More">
          <img src="../Images/arrow.png" alt="arrow" className="arrow-icon" style={{width:"12px", height:"12px"}}/>
          <h3>Dump More</h3>
        </div>

        <div className="cart-icon">
          <img src={cart} alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Dump Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in Dump cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          {/* <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3> */}
          <button>Sell</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Dump Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;