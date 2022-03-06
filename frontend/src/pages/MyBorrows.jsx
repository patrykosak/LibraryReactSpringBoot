import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MyBorrowRow from '../components/MyBorrowRow'
import AuthContext from '../contexts/AuthContext'

const MyBorrows = () => {
    const[borrows,setBorrows]=useState([])

    const {email} = useContext(AuthContext)

    const fetchData = async () => {

        await axios.get(`http://localhost:8090/borrows/user/${email}`).then(res=>{
            console.log(res)    
        setBorrows(res.data)
        })

    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    <div style={{overflowX:"auto"}} className='container '>
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
                        <th scope="col">Termin oddania</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {borrows.map((borrow,index)=>(
                        <MyBorrowRow key={index} borrow={borrow} /> 
                    ))}
                </tbody>
            </table>
        </div>
    </div>

</>
  )
}

export default MyBorrows