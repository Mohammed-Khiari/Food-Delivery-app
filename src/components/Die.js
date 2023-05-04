import React from 'react'

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld? '#59e391' : 'white'
  } 
  return (
    <div className='die-face' style = {styles} onClick={props.holdDice}>

        <h2>{props.value}</h2>
    </div>
  )
}

export default Die  