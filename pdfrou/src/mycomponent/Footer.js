import React from 'react'

export const Footer = () => {
  let footerstyle={
   padding:0,
  
    width:"100%"
  }
  
  return (
    <span className='bg-dark text-light px-0 py-1' style={footerstyle}>
    <p className='text-center' >
        Copyright &copy; TheYogaRoot.com
      </p>
    </span>
  )
}
