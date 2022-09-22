import React, { useContext }  from "react";
import { IoIosCart } from "react-icons/io";

const Dump = ({count}) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "18px",
          height: "18px",
          borderRadius: "9999px",
          fontSize: "10px",
          border: "1px solid #fff",
          textAlign: "center",
          top: "-2px",
          right: "-6px",
          color: "white"
        }}
      >
        {count}
      </span>
      <IoIosCart style={{color: "#fff", fontSize:"35px"}} />
    </div>
  );
};

export default Dump;