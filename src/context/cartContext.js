import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return {
        cartItems: action.payload,
        totalItems: action.payload.length,
      };
    }
    case "CLEAR_CART": {
      return {
        cartItems: [],
        totalItems: 0,
      }
    }
    case "REMOVE_FROM_CART": {
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - 1,
      }
    }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: null,
    totalItems: 0,
  });
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
