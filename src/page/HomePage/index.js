import React from 'react'
import NavBar from '../../share/NavBar'
import { BannerStyled, MainStyled, ServiceStyled } from './style'
import background from "../../image/banner-main.png";
import Notice from '../../share/Notice';
import About from '../../share/About';
import icon1 from '../../image/befurni.png';
import icon2 from '../../image/behomes.png';
import icon3 from '../../image/bestay.png';
import icon4 from '../../image/bechain.png';
import Activity from '../../share/Activity';
import Blog from '../../share/Blog';
import Symbol from '../../share/Symbol';
import Footer from '../../share/Footer';


export default function HomePage() {
    return (

        <MainStyled>
            <div>
                <NavBar></NavBar>

                <Banner></Banner>
                <div className="notice-home">
                    <Notice></Notice>
                </div>

                <About></About>
                <Service></Service>
                <Activity></Activity>
                <Blog></Blog>
                <Symbol></Symbol>
                <Footer></Footer>
            </div>

        </MainStyled>




    )
}
const Banner = () => {
    return (
        <>

            <BannerStyled>
                <div className="banner" style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <h1 className="title textWhite">EVERY DECISION MAKES A DESTINY</h1>
                        <p className="desc textWhite">Promising start up companies to develop successfully by one right decision.
                            Are you looking for a consultant with fully experience in multiple field?
                            We'd love to see you. Please fill in this form</p>
                        <div className="button"><a>Discover platforms</a></div>
                    </div>
                </div>

            </BannerStyled>

        </>
    )
}

const Service = () => {
    return (
        <>
            <ServiceStyled>
                <div className="service">
                    <div className="container">
                        <p className="subTitle textWhite">OUR EXPERTISE</p>
                        <h1 className="title textWhite">OUR SERVICES</h1>
                        <div className="service-list">
                            <div className="service-item">
                                <img src={icon1}/>
                                <h1 className="subTitle textWhite">BEFURN!</h1>
                                <p className="desc textWhite">Consulting for architectural and interior design, Construction of interior works. Manufacture of wood products.</p>
                            </div>
                            <div className="service-item">
                            <img src={icon2}/>
                                <h1 className="subTitle textWhite">BEHOMES!</h1>
                                <p className="desc textWhite"><p class="service-desc">Real estate business, Real Estate Broker.</p></p>
                            </div>
                            <div className="service-item">
                            <img src={icon3}/>
                                <h1 className="subTitle textWhite">BESTAY!</h1>
                                <p className="desc textWhite">The field of information technology, Blockchain technology projects,Booking platform. Operating the resort villa system</p>
                            </div>
                            <div className="service-item">
                            <img src={icon4}/>
                                <h1 className="subTitle textWhite">BECHAIN!</h1>
                                <p className="desc textWhite">Deploy marketing solutions, Build communication communities. Manufacture of wood products</p>
                            </div>

                        </div>
                    </div>
                </div>
            </ServiceStyled>


        </>
    )
}
