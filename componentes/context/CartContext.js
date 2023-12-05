// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Crie o contexto
const CartContext = createContext();

// Provedor do contexto que envolve toda a sua aplicação
export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  // Reducer para atualizar o estado do carrinho
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      // Adicione mais cases conforme necessário
      default:
        return state;
    }
  };

  // useReducer para gerenciar o estado do carrinho
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acessar o estado do carrinho e o despachante
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de um CartProvider');
  }
  return context;
};
