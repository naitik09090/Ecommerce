import React, { useState } from 'react'
import { product } from '../components/Products.jsx'


const SearchBar = () => {

  const [store, setStore] = useState(product)

  const [data, setData] = useState('')

  const itemPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1)

  const LastItem = currentPage * itemPerPage;
  const FirstItem = LastItem - itemPerPage;
  const currentItems = store.filter((curValue) => {
    return curValue.name.toLowerCase().includes(data)
  }).slice(FirstItem, LastItem)

  const totalPages = Math.ceil(product.length / itemPerPage);

  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value)
  }

  return (
    <div className='container'>
      <h1 className='h1'>ABC Product</h1>
      <input type="text" className='input' placeholder='Search Here..' onChange={getData} />

      {
        currentItems.map((cur) => {
          return (
            <>
              <h1 className='ProductList'>
                <img src={cur.img} />
                <p className='type'>{cur.id}</p>
                <p className='type'>{cur.name}</p>
                <p className='type'>{cur.price}</p>
                <p className='type'>{cur.category}</p>
                <p className='type'>{cur.description}</p>
              </h1>
            </>
          )
        })
      }

      <div>
        {
          pageNumbers.map(num => (
            <button className='btn'
              key={num}
              onClick={() => setCurrentPage(num)}
            >

              {num}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default SearchBar