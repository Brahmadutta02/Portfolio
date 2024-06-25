import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      {/* <div>
        <button value="all"></button>
        <button value="Full-Stack">Full Stack</button>
      </div> <div class="work-img-container"><img class="work-img" src="https://i.ibb.co/mFgL7Sz/HuD93ZT.png" alt="Smart Dhopa"/></div>
        */}
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="YoutubeDashboard" stackname="Stack:" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="TripPlanner" stackname="Stack:" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="SoilEcommerce" stackname="Stack:" />
        <ProjectBox projectPhoto={TindogImage} projectName="FoodGaleria" stackname="Stack:" />
      </div>

    </div>
  )
}

export default Projects

