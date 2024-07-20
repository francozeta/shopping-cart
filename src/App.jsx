import { useState } from 'react'

import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'

import Products from './components/Products/Products'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

import useFilter from './hooks/useFilters'

const App = () => {
  const [products] = useState(initialProducts)

  const { filters, filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && (<Footer filters={filters} />)}
    </>
  )
}

export default App
