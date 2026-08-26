// @ts-nocheck
import React from 'react';

import './Hero.css';
import developer from './../../../public/animation/developer.json';
import Lottie from 'lottie-react';
function Hero() {
   
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <img src="./me-modified.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Full Stack Developer | Laravel & React js specialist.</h1>
        <p className='sub-title'>I'm Souhaib, a passionate web developer with a focus on creating modern, responsive, and user-friendly websites. I enjoy turning ideas into reality using code and constantly strive to improve my skills in web technologies.</p>
     <div className="all-icons flex">
     
     <div className="all-icons flex">

  <a
    className="icon icon-instagram"
    href="https://www.instagram.com/souhaibanejar/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  ></a>

  <a
    className="icon icon-github"
    href="https://github.com/souhaib2003"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  ></a>

  <a
    className="icon icon-linkedin"
    href="https://www.linkedin.com/in/souhaib-anejar-8535492b2/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  ></a>

</div>
     </div>

      </div>
      

      <div className=' right-section  animation'>
        <Lottie style={{height : 355}} animationData={developer}/></div>
    </section>
  )
}
export default Hero ;
