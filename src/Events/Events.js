import React from "react";
import "./Events.css";

import BiddingBlitz from './Images/BiddingBlitz.png';
import CollegeTrading from './Images/CollegeTrading.png';
import Finlatics from './Images/Finlatics.png';
import KharchePeCharche from './Images/KharchePeCharche.png';
import Melange from './Images/Melange.png';
import Orientation from './Images/Orientation.png';
import Speaker from './Images/Speaker.png';

const Events = () => {
  return (
    <div className="Events">
 
    <h1 className="Heading">Events</h1>

   
   
  <div>
     <h1 className="Year">2024</h1>

     <div className="Images">
       <div className="flex1">
      

       <div className="element">
         
         <div className="element3">
           {/*  Finlatics*/}
           <a href='https://www.linkedin.com/feed/update/urn:li:activity:7160561756463853568/' target='_blank' rel='noreferrer'>
           <img src={Finlatics} alt="Finlatics"/>
           </a>
         </div>
 
         <h2 className="title">Finlatics</h2>
 
         </div>
       


       <div className="element">
       <div className="element2">
         {/* Money Melange */}
         <a href='https://www.instagram.com/p/C2opSv9yFFC/' target='_blank' rel='noreferrer'>
       <img src={Melange} alt="Money Melange"/>
       </a>
       </div>

       <h2 className="title">Money Melange</h2>

       </div>
     


       </div>
       
       <div className="flex1">


      
       
       <div className="element">
       <div className="element1">
         {/* Kharche pe Charcha */}
         <a href='https://www.instagram.com/p/C2AVhH4SE0P/' target='_blank' rel='noreferrer'>
         <img src={KharchePeCharche} alt="kharche pr charcha"/>
         </a>
       </div>
      
       <h2 className="title">Kharche Pe Charcha</h2>
       </div>
       

       </div>
       
       </div>
     </div>



  <div>
     <h1 className="Year">2023</h1>

     <div className="Images">
       <div className="flex1">
      

         <div className="element">
       <div className="element1">
         {/* bidding bitz */}
         <a href='https://www.instagram.com/p/CzqYKwRLp24/' target='_blank' rel='noreferrer'>
         <img src={BiddingBlitz} alt="speaker"/>
         </a>
       </div>
      
       <h2 className="title">Bidding Blitz</h2>
       </div>
       


       <div className="element">
       <div className="element2">
         {/* speaker */}
         <a href='https://www.instagram.com/p/CzbC7cLPrex/' target='_blank' rel='noreferrer'>
       <img src={Speaker} alt="speaker"/>
       </a>
       </div>

       <h2 className="title">Speaker</h2>

       </div>
     


       </div>
       
       <div className="flex1">


       <div className="element">
         
       <div className="element3">
         {/*  college trader showdown*/}
         <a href='https://www.instagram.com/p/CxXRs1Pywdn/' target='_blank' rel='noreferrer'>
         <img src={CollegeTrading} alt="speaker"/>
         </a>
       </div>

       <h2 className="title">College Trader Showdown</h2>

       </div>
       
       

       <div className="element">
         
       <div className="element4">
         {/*  orientation*/}
         <a href='https://www.instagram.com/p/CxAA9weLEea/?img_index=1' target='_blank' rel='noreferrer'>
         <img src={Orientation} alt="speaker"/>
         </a>
       </div>

       <h2 className="title">Orientation</h2>

       </div>

       </div>
       
       </div>
     </div>

     </div>
        
  );
};

export default Events;