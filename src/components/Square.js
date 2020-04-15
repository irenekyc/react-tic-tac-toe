import React from 'react'

const square = (props)=>{
    return (
        <span className="square" onClick = {props.onClick}>
            {props.value}
        </span>
    )
}

export default square