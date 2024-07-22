import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Function to add a product to the cart
  const addToCart = product => {
    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // one way would be use Structured Clone to make a deep copy of the cart array
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // If the product is not in the cart
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
