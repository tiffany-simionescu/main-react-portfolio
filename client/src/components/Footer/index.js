import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkA,
  FooterLinkR,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <SocialIcons>
          <SocialIconLink 
            href="https://www.linkedin.com/in/tiffany-simionescu/" 
            target="_blank" 
            aria-label="LinkedIn"
          ><FaLinkedin />
          </SocialIconLink>
          <SocialIconLink 
            href="https://github.com/tiffany-simionescu" 
            target="_blank" 
            aria-label="GitHub"
          ><FaGithub />
          </SocialIconLink>
          <SocialIconLink 
            href="https://www.facebook.com/Tiffany-Simionescu-Full-Stack-Web-Developer-337217927229001" 
            target="_blank" 
            aria-label="Facebook"
          ><FaFacebook />
          </SocialIconLink>
          {/* <SocialIconLink 
            href="https://twitter.com/tsimionescu87" 
            target="_blank" 
            aria-label="Twitter"
          ><FaTwitter />
          </SocialIconLink> */}
        </SocialIcons>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Portfolio</FooterLinkTitle>
                <FooterLink to='about'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>About</FooterLink>

                <FooterLink to='portfolio'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Portfolio</FooterLink>

                <FooterLink to='resume'
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}>Resume</FooterLink>
                  
                <FooterLinkR to="/contact">Contact</FooterLinkR>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLinkA 
                  target='_blank'
                  href='https://www.linkedin.com/in/tiffany-simionescu/'
                  >LinkedIn
                </FooterLinkA>
                <FooterLinkA 
                  target='_blank'
                  href='https://github.com/tiffany-simionescu'
                  >GitHub</FooterLinkA>
                <FooterLinkA 
                  target='_blank'
                  href='https://www.facebook.com/Tiffany-Simionescu-Full-Stack-Web-Developer-337217927229001'
                  >Facebook</FooterLinkA>
                {/* <FooterLinkA 
                  target='_blank'
                  href='https://twitter.com/tsimionescu87'
                  >Twitter</FooterLinkA> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Tiffany Simionescu's Portfolio
            </SocialLogo>
            <WebsiteRights>
              Tiffany Simionescu's Portfollio © {new Date().getFullYear()}{" "}
              All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
