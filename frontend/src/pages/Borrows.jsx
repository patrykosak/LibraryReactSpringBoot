import React from 'react'
import BorrowRow from '../components/BorrowRow'

const Borrows = () => {

  return (
    <>
    <div className='container '>
        <div className='py-4'>
            <div className="table-title">
                <div className="row mb-1">
                    <div className="col-9">
                        <h2><b>Wypożyczenia</b></h2>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Książka</th>
                        <th scope="col">Uczeń</th>
                        <th scope="col">Data zamówienia</th>
                        <th scope="col">Termin oddania</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                <BorrowRow />
                </tbody>
            </table>
        </div>
    </div>

</>
  )
}

export default Borrows