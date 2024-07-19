import { useState } from 'react'

import { products as initialProducts } from '../mocks/products.json'

import Products from '../components/Products/Products'
import Header from '../components/Header'
import { Filters } from '../components/Filters/Filters'

const App = () => {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0

  })
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header>
        <Filters onChange={setFilters} />
      </Header>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
