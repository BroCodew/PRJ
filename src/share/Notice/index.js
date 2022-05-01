import React from 'react';
import { NoticeStyled } from './style';


export default function Notice() {
  return (
    <div>
      <NoticeStyled>
          <div className="notice">
              <div className="container">
                  <div className="notice-list">
                      <div className="notice-item">
                          <p className="number">40+</p>
                          <p className="desc" >AUM</p>

                      </div>
                      <div className="notice-item active">
                          <p className="number textWhite">1800</p>
                          <p className="desc textWhite">Portfolio Campanies</p>

                      </div>
                      <div className="notice-item">
                          <p className="number">20+</p>
                          <p className="desc">Registered Members</p>

                      </div>
                      <div className="notice-item">
                          <p className="number">40+</p>
                          <p className="desc">ROE</p>

                      </div>

                  </div>
              </div>

          </div>
      </NoticeStyled>
    </div>
  )
}
