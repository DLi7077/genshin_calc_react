import React from 'react'
import StatLabel from './StatLabel'
/**
 * @brief generates a statBox
 * @param title {string} - title of the statbox
 * @param subStats {string []} - list of stats to add
 * @return {div} containing substats as StatLabels, with Title on top
 */
export default function StatBox({title, statList}) {
  console.log(statList)
  function generateStatBox(){
    console.log('in statbox')
    return (
      statList.map(stat=>{
        return <StatLabel value ={stat} key  ={title+stat}/>
      })
    );
  }
  return (
    <div className='characterBox'>
      <div className= 'title'>{title}</div>
      <div className=  'statBox'>
        {generateStatBox()}
      </div>
    </div>
  )
  
}