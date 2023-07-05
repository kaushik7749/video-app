import React from 'react'
import Button from './Button'

//Keep all the buttons name in below in the array as HW
//const list = ["All", "Gaming"]

const ButtonList = () => {
  return (
    //In all the Button I will be passing prop and add a name
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Comedy"/>
      <Button name="Thoughts"/>
      <Button name="Motivation"/>
      <Button name="Sports"/>
      <Button name="Chess"/>
      <Button name="Movies"/>
    </div>
  )
}

export default ButtonList