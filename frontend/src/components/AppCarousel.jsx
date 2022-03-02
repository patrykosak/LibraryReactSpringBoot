import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppCarousel = () => {
  return (
    <>
    <Carousel className='m-4'>
  <Carousel.Item>
  <Link to="/books">
    <img
      className="d-block w-100"
      src="https://www.roffeypark.ac.uk/wp-content/uploads/2018/06/the-7-best-books-to-improve-influencing-skills-2-scaled.jpg"
      height={500}
      alt="Książki"
    />
    </Link>
    <Carousel.Caption>
      <h3>Wypożycz książkę</h3>
      <p>Czytanie sieje. Ponowne czytanie to żniwa.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Link to="/statue">
    <img
      className="d-block w-100"
      src="https://przychodnia.szpitalzelazna.pl/wp-content/uploads/2018/07/regulamin-1.jpg"
      height={500}
      alt="Regulamin"
    />
  </Link>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default AppCarousel