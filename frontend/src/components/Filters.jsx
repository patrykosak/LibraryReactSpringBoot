import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'
import FilterButton from './FilterButton';

const Filters = ({setFilteringPublishingHouse,setFilteringCategory}) => {
    const [categories, setCategories] = useState([]);
    const [publishingHouses, setPublishingHouses] = useState([]);

    const clear = () => {
      setFilteringPublishingHouse("")
      setFilteringCategory("")
    }

    const fetchFilters = async () =>{
        axios.get("http://localhost:8090/categories").then((response)=>{
            setCategories(response.data)
            console.log(categories)
        })
        axios.get("http://localhost:8090/publishinghouses").then((response)=>{
            setPublishingHouses(response.data)
            console.log(publishingHouses)
        })
    }
    useEffect(()=>{
        fetchFilters();
    },[])
  return (
    <>
        <Accordion defaultActiveKey="0" className='m-4'>
  <Accordion.Item eventKey="0">
    <Accordion.Header onClick={()=>{clear()}}>Kategorie</Accordion.Header>
    <Accordion.Body className='d-flex'>
        {categories.map((category,index)=>{
           return <FilterButton task={setFilteringCategory} key={index} name={category.name} index={index} item={category.name}/>
        })}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header onClick={()=>{clear()}}>Wydawnictwa</Accordion.Header>
    <Accordion.Body className='d-flex'>
        {publishingHouses.map((publisingHouse,index)=>{
            return <FilterButton task={setFilteringPublishingHouse} key={index} name={publisingHouse.name} index={index} item={publisingHouse.name} />
        })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </>
  )
}

export default Filters