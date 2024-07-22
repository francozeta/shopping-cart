import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'

const Cart = () => {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png'
              alt='LABIALITY RED LIPSTICK'
            />
            <div>
              <strong>Iphone</strong> - 13000
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
