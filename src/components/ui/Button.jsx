import React from 'react'

export const Button = (props) => {
  return (
    <a href={props.href} className={`border rounded-sm ${props.styles}`}> 
        {props.text}
    </a>
  )
}
