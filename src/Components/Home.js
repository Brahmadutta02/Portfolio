import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>BRAHMADUTTA DALAI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>
      

      {/* <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>C++</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br />
            I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div> */}
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        {/* <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/> */}
        
      </div>


      <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      {/* <div>
        <button value="all"></button>
        <button value="Full-Stack">Full Stack</button>
      </div> <div class="work-img-container"><img class="work-img" src="https://i.ibb.co/mFgL7Sz/HuD93ZT.png" alt="Smart Dhopa"/></div>
        */}
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="YoutubeDashboard" stackname="Stack:"/>
        <ProjectBox projectPhoto={NewsletterImage} projectName="TripPlanner" stackname="Stack:"/>
        <ProjectBox projectPhoto={RogfreeImage} projectName="SoilEcommerce" stackname="Stack:"/>
        <ProjectBox projectPhoto={TindogImage} projectName="FoodGaleria" stackname="Stack:"/>
      </div>

    </div>
    </div>
  )
}

export default Home