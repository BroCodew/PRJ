import React from 'react'
import { FooterStyled } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitterSquare,faTelegram,faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import {faAnglesRight,faLocationDot,faEnvelopeOpenText,faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons'
import background from "../../image/footer-circle.png";

export default function Footer() {
  return (
    <div>
        <FooterStyled>
            <div className="footer" style={{ backgroundImage: `url(${background})` }}>

                <div className="container">
                    <div className="footer-list">
                        <div className="footer-item textWhite">
                            <h1 className="inform">ABOUT COMPANY</h1>
                            <p>We are the best world Information
                                Technology Company. Providing the highest
                                quality in hardware & Network solutions.</p>
                            <div className="list-icon">
                               <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                               <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                               <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                               <FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon>
                               
                            </div>

                        </div>
                        <div className="footer-item textWhite">
                            <h1 className="inform">OTHER LINKS</h1>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>About Us</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>Services</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>Contact</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>News</a></div>
                        </div>
                        <div className="footer-item textWhite">
                            <h1 className="inform">HELP</h1>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>Standart account</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>Demo account</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>ECN account</a></div>
                            <div><a> <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>Islamic acount</a></div>
                        </div>
                        <div className="footer-item textWhite">
                            <h1 className="inform">CONTACTS</h1>
                            <div><a> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>2nd Floor, HL Tower Building, No. 6/82 Duy Tan Street,
                            Dich Vong Hau Ward, Cau Giay District,Hanoi City, Vietnam</a></div>
                            <div><a> <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>demo@24gmail.com</a></div>
                            <div><a> <FontAwesomeIcon icon={faSquarePhoneFlip}></FontAwesomeIcon>(+84) 98 20471231</a></div>
                        </div>
                    </div>
                </div>
            </div>

        </FooterStyled>
    </div>
  )
}
