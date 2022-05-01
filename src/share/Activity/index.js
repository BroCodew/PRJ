import React from 'react'
import { ActivityStyled } from './style'
import activityImg from '../../image/active.png'

export default function Activity() {
  return (
    <div>
        
        <ActivityStyled>
            <nav className="management">
                <div className="management-container container">
                    <div className="text">
                        <p className="text subTitle">WHY CHOOSE US</p>
                        <h1 className="text title">MANAGEMENT CONSULTING ACTIVITIES</h1>

                        <div >
                            <div className="text-number">
                                <p className="text-list subTitle"><span className="text-one">01.</span>FINANCIAL SERVICES SUPPORT ACTIVITIES N.E.C.</p>
                                <p>Investment consulting activities (excluding legal advice on
                                finance, accounting, auditing, tax and securities).</p>
                            </div>
                            
                            <div className="text-number">
                                <p className="text-list subTitle"><span className="text-two">02.</span>ORGANIZATION OF INTRODUCTION AND TRADE</p>
                                <p>BeHolding is a fund management company, holding capital and
                                investing capital in companies in the ecosystem to generate profits.</p>
                            </div>

                            
                            <div className="text-number">
                                <p className="text-list subTitle"><span className="text-three">03.</span>VISION</p>
                                <p>Investment consulting activities (excluding legal advice on
                                finance, accounting, auditing, tax and securities).</p>
                            </div>   

                            <div className="text-number">
                                <p className="text-list subTitle"><span className="text-four">04.</span>MISSION</p>
                                <p>IContribute to building a complete and professional ecosystem, bringing value to investors.</p>
                            </div>    
                            

                            

                        </div>

                        
                    </div>
                    <div className="activity-img"><img src={activityImg}></img></div>
                </div>
            </nav>
        </ActivityStyled>
    </div>
  )
}
