import React from 'react'
import { AboutStyled } from './style'
import aboutImg from '../../image/about.png'

export default function About() {
  return (
    <div>
        <AboutStyled>
            <div className="about">
                <div className="container">
                    <div className="about-text">
                        <p className="subTitle">WE ARE BEHOLDING</p>
                        <h1 className="title textBlue">STAND BY YOU EVERY STEP OF YOUR BUSINESS</h1>
                        <p className="desc textBlue">BeHolding is a venture capital firm and investment platform founded in 2022 by
.... . BeHolding offers investors worldwide exclusive access to startup and
expansion investment opportunities that are sourced from Vietnam and curated
through a streamlined due diligen ce process that allows investors to VCs create
personalized VC portfolios led by some of the biggest entrepreneurs in the
country.</p>
                    <div className="button"><a className="about-link">Read More</a></div>
                    </div>
                    <div className="about-img"><img src={aboutImg}></img></div>
                </div>
            </div>
        </AboutStyled>
    </div>
  )
}
