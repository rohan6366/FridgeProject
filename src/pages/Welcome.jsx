import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {


  return (

    <header className='header'>
      <div className='header__left'>
        <figure className='header__left-item'>
          <img src='/game.jpg' className='header__left-item-photo'></img>
        </figure>
        <div className="btn__container">
            <Link to='/game'><a className='btn btn__white'>PLAY GAME</a></Link>

        </div>
      </div>
      <div className='header__right' >
        <figure className='header__right-item'>
          <img src='/shop.jpg' className='header__right-item-photo'></img>
        </figure>
        <div className="btn__container">
        <Link to='/shop'><a className='btn btn__white'>SHOP NOW</a></Link>
        </div>
      </div>
    </header>
  )
}


