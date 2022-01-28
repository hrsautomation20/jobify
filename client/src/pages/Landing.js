import React from 'react';
import {Logo} from '../components'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Chicharrones hoodie truffaut roof party kinfolk, PBR&B leggings
            pop-up 3 wolf moon literally authentic bitters. Skateboard venmo
            heirloom echo park.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;
