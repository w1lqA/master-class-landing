import React from 'react'

export const Button = (props) => {
  return (
    <button className={`border rounded-sm ${props.styles}`}> 
        {props.text}
    </button>
  )
}
