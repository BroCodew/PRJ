import React from 'react'
import NavBar from '../../share/NavBar'

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


export default function AboutPage() {
    return (
        <>
            <NavBar></NavBar>
            <About></About>
            <Notice></Notice>
            <Activity></Activity>
            <Symbol></Symbol>
            <Footer></Footer>
        </>
        
        


    )
}