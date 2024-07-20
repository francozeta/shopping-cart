import './Filters.css'
import { useId } from 'react'
import useFilter from '../../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilter()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const hanleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <>
      <section className='filters'>

        <div>
          <label htmlFor={minPriceFilterId}>Price</label>
          <input
            type='range'
            name='price'
            id={minPriceFilterId}
            min='0'
            max='1000'
            onChange={hanleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select name='category' id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value='beauty'>Beauty</option>
            <option value='fragrances'>Fragrances</option>
            <option value='furniture'>Furniture</option>
            <option value='groceries'>Groceries</option>
          </select>
        </div>

      </section>
    </>
  )
}
