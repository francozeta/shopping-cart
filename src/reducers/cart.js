export const cartInitialState = []
/* export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [] */

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  // Create a new array to avoid mutating the original state
  // Handle actions here based on the type
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        // one way would be use Structured Clone to make a deep copy of the cart array
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }
      // If the product is not in the cart
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }
  return state
}
