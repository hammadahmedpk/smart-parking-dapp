import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box';
import LandingImg from '../media/images/home-landing.png';
import FeatsIcon01 from '../media/images/feat1.png';
import FeatsIcon02 from '../media/images/feat2.png';
import FeatsIcon03 from '../media/images/feat3.png';
import '../media/css/home.css';

export default function Home() 
{
    return(
        <div>
            <Header />
                <Box className="HomeContainer">
                    <Box className="homeLandingBox">
                        <div className="homeLandingTxt">
                            <h1 className="text-[45px] font-bold">Park. <span style={{color: "var(--secondary)"}}>Pay.</span> And, Be On Your <span style={{color: "var(--primary)"}}>Way!</span></h1><br/><br/>
                            <h2 className="text-[25px]" style={{fontFamily: "Comfortaa"}}>We are a company aiming to take pain out of parking!</h2>
                        </div>
                        <div className="homeLandingImg">
                            <Slide direction="right">
                                <img className="w-[500px]" src={LandingImg} />
                            </Slide>
                        </div>
                    </Box>
                    <Box className="homeSection3">
                        <div className="homeSection3-item1">
                            <div className="homeSection3-img">
                                <Fade>
                                    <img src={FeatsIcon01} />
                                </Fade>
                            </div>
                            <div className="homeSection3-txt">
                                <h2 className="text-[25px] font-bold">Contactless Booking</h2>
                                <p className="text-[16px]">ParkIt is a fast, cashless and contactless parking solution, which provides the utmost convenience to its customers by functioning digitally.</p>
                            </div>
                        </div>
                        <div className="homeSection3-item1">
                            <div className="homeSection3-img">
                                <Fade>
                                    <img src={FeatsIcon02} />
                                </Fade>
                            </div>
                            <div className="homeSection3-txt">
                                <h2 className="text-[25px] font-bold">Easy On Pocket</h2>
                                <p>With ParkIt, you can create a fully automated parking payment service that will reduce staffing costs and eliminate the need for cash collection.</p>
                            </div>
                        </div>
                        <div className="homeSection3-item1">
                            <div className="homeSection3-img">
                                <Fade>
                                    <img src={FeatsIcon03} />
                                </Fade>
                            </div>
                            <div className="homeSection3-txt">
                                <h2 className="text-[25px] font-bold">Time Efficient</h2>
                                <p>With ParkIt, you can book your parking spaces ahead of time and easily search for your parking spot without the hassle of being in lines for hours.</p>
                            </div>
                        </div>
                    </Box>
                </Box>
            <Footer />
        </div>
    );
}