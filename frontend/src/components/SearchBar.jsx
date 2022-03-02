import React from 'react'

const SearchBar = ({setSearchQuery,style,pHolder}) => {
  return (
    <div className={style}>
    <input onChange={(data)=>setSearchQuery(data.target.value)} type="text" className="form-control" placeholder={pHolder} />
  </div>
  )
}

export default SearchBar