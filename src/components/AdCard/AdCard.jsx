import React from 'react'
import "./adcard.scss"
import cr7 from '../../assets/images/long-photo-ronaldo.png'

const AdCard = () => {
  return (
    <div className='adcard'>
        <div className="adText">
            <b> Make bets Profitably </b>
            <p>
                Predict in multiple matches and win up to $100,000
            </p>
        </div>
        <div className="adImage">
          <img src={cr7} alt="/" className='image' />
        </div>
    </div>
  )
}

export default AdCard