import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css'; 
import image from '../assets/side 1.png';
import plusIcons from '../assets/plus-circle.png';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Header />
            <main className="main-content">
                <div className="content-wrapper">
                    <div className="left-side">
                        <p className="firstline">Grow Your Business Through</p>
                        <p className="secondline">Evic Digital Marketing</p>
                        <p className="thirdline">
                            Scale your revenue profitably with Evic, we are specialists in 
                            performance marketing & creative for online business. Choose
                            Evic as your digital marketing agency and propel your business
                            to new heights.
                        </p>
                        <span className="button">
                            <img src={plusIcons} alt="plusIcons" />
                            <span>Get started</span>
                        </span>
                    </div>

                    <div className="right-side">
                        <div className="circle large"></div>
                        <div className="circle small"></div>
                        <img src={image} alt="Homepage" />
                        <div>
                            <div>
                            <span>SEO</span>|
                            <span>Ads</span>|
                            <span>Saas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
