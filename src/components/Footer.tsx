import React from 'react';
import './Footer.css'; 
import part from '../assets/part.png';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import part4 from '../assets/part4.png';
import part5 from '../assets/part5.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>PARTNERS</p>
            </div>
            <div className="footer-images">
                <img src={part} alt="Image 1" />
                <img src={part1} alt="Image 2" />
                <img src={part2} alt="Image 3" />
                <img src={part4} alt="Image 4" />
                <img src={part5} alt="Image 5" />
            </div>
        </footer>
    );
}

export default Footer;
