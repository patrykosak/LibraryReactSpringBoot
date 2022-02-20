import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import axios, { Axios } from 'axios'
import FilterButton from './FilterButton';

const Filters = () => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () =>{
        axios.get("http://localhost:8090/categories").then((response)=>{
            setCategories(response.data)
            console.log(categories)
        })
    }
    useEffect(()=>{
        fetchCategories();
    },[])
  return (
    <>
        <Accordion defaultActiveKey="0" className='m-4'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Kategorie</Accordion.Header>
    <Accordion.Body>
        {categories.map((category,index)=>{
           return <FilterButton name={category.name} index={index} item={category.name}/>
        })}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </>
  )
}

export default Filters