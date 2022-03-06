import React from 'react'

const MyBorrowRow = ({borrow}) => {
  return (
    <>
    <tr>
  <td>{borrow?.book?.title}</td>
  <td>{borrow?.deadline}</td>
  <td>{borrow?.status}</td>
</tr>  
</>
  )
}

export default MyBorrowRow