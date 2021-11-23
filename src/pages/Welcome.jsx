
import { Link } from 'react-router-dom';

export default function Welcome() {


  return (

    <header className='header'>
      <div className='header__left'>
        <figure className='header__left-item'>
          <img src='/game.jpg' alt='img of a game' className='header__left-item-photo'></img>
        </figure>
        <div className="btn__container">
            <Link to='/game'><button className='btn btn__white'>PLAY GAME</button></Link>

        </div>
      </div>
      <div className='header__right' >
        <figure className='header__right-item'>
          <img src='/shop.jpg' alt='img of a shopping cart' className='header__right-item-photo'></img>
        </figure>
        <div className="btn__container">
        <Link to='/shop'><button className='btn btn__white'>SHOP NOW</button></Link>
        </div>
      </div>
    </header>
  )
}


