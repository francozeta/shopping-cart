import { useState, useId } from 'react'
import './Filters.css'

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  console.log('MINPRICE:', minPriceFilterId, 'CATEGORY:', categoryFilterId)

  const hanleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
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
          />
          <span>${minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select name='category' id={categoryFilterId}>
            <option value='all'>All</option>
            <option value='laptops'>Laptpos</option>
            <option value='smartphones'>Smartphones</option>
          </select>
        </div>

      </section>
    </>
  )
}
