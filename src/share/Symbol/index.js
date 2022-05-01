import React from 'react'
import { SymbolStyled } from './style'
import icon1 from '../../image/partner1.png'
import icon2 from '../../image/partner2.png'
import icon3 from '../../image/partner3.png'
import icon4 from '../../image/partner4.png'
import icon5 from '../../image/partner5.png'
import icon6 from '../../image/partner6.png'
export default function Symbol() {
  return (
    <div>
      <SymbolStyled>
          <div className="symbol">
              <div className="container">
                  <div className="symbol-text">
                      <p className="text subTitle">PAYMENT METHODS.</p>
                      <p className="text title">CURRENT INVESTMENT FUNDS OF PARTNERS</p>
                  </div>

                  <div className="symbol-icon">
                      <a to="/">
                        <img src={icon1}></img>
                      </a>

                      <a to="/">
                        <img src={icon2}></img>
                      </a>

                      <a to="/">
                        <img src={icon3}></img>
                      </a>

                      <a to="/">
                        <img src={icon4}></img>
                      </a>

                      <a to="/">
                        <img src={icon5}></img>
                      </a>

                      <a to="/">
                        <img src={icon6}></img>
                      </a>

                  </div>

              </div>
          </div>
      </SymbolStyled>
    </div>
  )
}
