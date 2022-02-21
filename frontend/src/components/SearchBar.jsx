import React from 'react'

const SearchBar = ({setSearchQuery}) => {
  return (
    <div class="input-group  mt-3 m-auto w-50">
    <input onChange={(data)=>setSearchQuery(data.target.value)} type="text" class="form-control" placeholder="Szukaj książki" />
  </div>
  )
}

export default SearchBar