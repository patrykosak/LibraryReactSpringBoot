import React, { useEffect, useState } from 'react'
import BorrowRow from '../components/BorrowRow'
import axios from 'axios'
import AppPagination from '../components/AppPagination';
import Select from 'react-select'; 
import SearchBar from '../components/SearchBar';

const Borrows = () => {
    const[borrows, setBorrows] = useState([]);
    const[pageNumber, setPageNumber] = useState(0)
    const[info,setInfo] = useState([]);
    const[status,setStatus] = useState("")
    const[searchQuery,setSearchQuery] = useState("")

    const options = [
        {value:1, label:"W trakcie realizacji",},
        {value:2, label:"Wypożyczona"},
        {value:3, label:"Zwrócona"}
    ]

    const fetchData = async () => {
        axios.get(`http://localhost:8090/borrows?pageNumber=${pageNumber}&pageSize=4&status=${status}&searchQuery=${searchQuery}`).then(res=>{
        console.log(res)    
        setBorrows(res.data.content)
            setInfo(res.data)
            console.log(borrows)
        })        
    }

    useEffect(()=>{
        fetchData()
    },[pageNumber,status,searchQuery])

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
            <Select
                  className='mb-3'
                  onChange={(e) => setStatus(e.label)}
                  options={options}
                  placeholder={"status"}
                />
                <SearchBar style="input-group mb-3 mt-3 m-auto " pHolder="Szukaj wypożyczeń" setSearchQuery={setSearchQuery}/>
            <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Książka</th>
                        <th scope="col">Uczeń</th>
                        <th scope="col">Data zamówienia</th>
                        <th scope="col">Termin oddania</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {borrows.map((borrow,index)=>(
                        <BorrowRow fetchData={fetchData} key={index} borrow={borrow} /> 
                    ))}
                <AppPagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
                </tbody>
            </table>
        </div>
    </div>

</>
  )
}

export default Borrows