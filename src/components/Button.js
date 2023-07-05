import React from 'react'

//In Button we are receiving the props from ButtonList
const Button = ({ name }) => {
  return (
    //{name} below is we are receiving props
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button