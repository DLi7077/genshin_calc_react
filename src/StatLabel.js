import React from 'react'

export default function StatLabel(prop) {
  return (
    <div className='statLabel'>
      <div className='statLabelText'>{prop.value}</div>
      <input className= 'statLabelInput' type= 'number'></input>
    </div>
  )
}
