import { useState } from 'react'

import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'

import Products from './components/Products/Products'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

import useFilter from './hooks/useFilters'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/cart'

const App = () => {
  const [products] = useState(initialProducts)

  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && (<Footer />)}
    </CartProvider>
  )
}

export default App
