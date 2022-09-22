import React, { useContext }  from "react";
import { IoIosCart } from "react-icons/io";
import { CartContext } from "../Component/Cart";

const Dump = (props) => {

  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  // const { totalItem} = useContext(CartContext);
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "15px",
          height: "15px",
          borderRadius: "5px",
          fontSize: "10px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-2px",
          right: "-6px",
        }}
      >
        {props.count}
      </span>
      <IoIosCart style={{color: "#fff", fontSize:"35px"}} />
    </div>
  );
};

export default Dump;