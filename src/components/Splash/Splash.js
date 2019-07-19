import React from 'react';
import splashImg from '../../images/CD-main-banner.png';

function Splash() { 
  return (
    <section className="Splash">
      <div className="Splash-container">
        <img 
          src={splashImg} 
          className="main-splash-img"
          alt="Splash page illustration that depicts 2 children having fun at their computers." 
        />
        <div className="green-container">
          
        </div>
      </div>
    </section>
  );
}

export default Splash;
