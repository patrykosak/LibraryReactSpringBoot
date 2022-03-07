import React from 'react'

const News = ({news}) => {
  return (
    <div className='m-4'>
    <h1>{news.title}</h1>
    <hr />
    <h3>{news.date}</h3>
    <pre>
    <p>{news.content}</p>
    </pre>
    </div>
  )
}

export default News