import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import SushiForm from '../components/SushiForm.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <SushiForm addFunds={props.addFunds}/>
      <div className="belt">
        {
          props.allSushi
          .slice(props.sushiIndex, (props.sushiIndex+4 < props.allSushi.length) ? props.sushiIndex+4 : props.allSushi.length)
          .map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer