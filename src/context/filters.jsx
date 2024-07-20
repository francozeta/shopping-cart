import { useState, createContext } from 'react'
// 1. Create the context - this is the one we have to consume
export const FiltersContext = createContext()

// 2. Create the Provider component - this is the one we have to provide
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
