import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ButtonTwo
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tiffany Simionescu's Portfolio</HeroH1>
        <HeroP>
          Welcome and thank you for visiting my portfolio website. 
          I have training as a full stack web developer, and enjoy 
          working with JavaScript frameworks.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonTwo 
            to="about"
            spy={true}
            smooth={true}
            duration={500} 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonTwo>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
