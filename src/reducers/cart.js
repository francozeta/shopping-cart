/* export const cartInitialState = [] */
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Update local storage on state change
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    // Create a new array to avoid mutating the original state
    // Handle actions here based on the type
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // one way would be use Structured Clone to make a deep copy of the cart array
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        state.slice(productInCartIndex + 1)
      ]
      updateLocalStorage(newState)
      return newState
    }
    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
