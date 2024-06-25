import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName, stackname}) => {
  const desc = {
    FoodGaleriaDesc : "Developed a food ordering website featuring restaurant and menu management, allowing users to easily select food options. Implemented seamless order placement with secure checkout. Incorporated a user review and rating system for restaurants and dishes to ensure quality feedback and user engagement.",
    FoodGaleriaStack : "HTML5, CSS3, JavaScript",
    TindogWebsite : "https://devanshsahni.github.io",

    SoilEcommerceDesc : " In this project, developed an e-commerce website for a client, specializing in soil e-commerce. Users can browse and choose from a wide range of soil products with detailed descriptions and images. Convenient cart functionality was added to manage selected products.",
    SoilEcommerceStack : "React, Express",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    TripPlannerDesc:"Built a user-friendly travel booking website for a client designed to enhance the experience for tourists. For travelers to book their entire itinerary for one place. Users can browse and select their desired travel destinations. Through an integrated API, travelers can choose their preferred hotels and restaurants based on their specific tastes and requirements. Google Map API was used to get hotel and restaurant data and directions.  A secure login system ensures that users can create and manage their accounts with ease, providing a personalized booking experience. It allowed the user to book the all itineraries for a particular place.",
    TripPlannerStack:"HTML5, CSS3, JavaScript, TailwindCSS, Flask",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    YoutubeDashboardDesc:"Designed and implemented a YouTube dashboard characterized by a sleek, tab-based interface. Designed a responsive navigation bar, sidebar, and right pane. API call was made for fetching the analytics data, trending hashtags, videos, and channel URLs.",
    YoutubeDashboardStack:"ReactJS, Tailwind CSS, Node js",
    WigglesWebsite:"",
    
  }

  let show ='';
  if(desc[projectName + 'Stack']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            <br />
            <br />
            <h3>{stackname}</h3>
            <br />
            {desc[projectName + 'Stack']}

           
        </div>
    </div>
  )
}

export default  ProjectBox