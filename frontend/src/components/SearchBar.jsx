import React from 'react'

const SearchBar = ({setSearchQuery}) => {
  return (
    <div className="input-group  mt-3 m-auto w-50">
    <input onChange={(data)=>setSearchQuery(data.target.value)} type="text" className="form-control" placeholder="Szukaj książki" />
  </div>
  )
}

export default SearchBar