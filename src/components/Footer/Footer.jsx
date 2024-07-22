import { useCart } from '../../hooks/useCart'
import useFilter from '../../hooks/useFilters'
import './Footer.css'

const Footer = () => {
  const { filters } = useFilter()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {/* <h4>Prueba Tecnica React ⚛️</h4>
      <span>@francozeta</span>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
      {/*       {
        JSON.stringify(filters, null, 2)
      } */}
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}

export default Footer
