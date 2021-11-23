import React from 'react'

function Card({img}) {
    return (
        <div>
            <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src= {`/${img}.jpg`}
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>Fridge</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                   
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>Globaly Available</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>Modern Look</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="/icons.svg#icon-flag"></use>
                      </svg>
                      <span>2 door</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="/icons.svg#icon-user"></use>
                      </svg>
                      <span>For Family</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$1,000/-</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.5</span>
                      <span className="cardt__footer-text">rating 6</span>
                    </p>
                    
                    <button className="btn btn--green btn--small">Details</button>
        
                  </div>
                </div>
        </div>
    )
}

export default Card
