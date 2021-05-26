import React, { useState } from 'react';
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
import CloseIcon from '../../images/close.png';
import {
PortfolioContainer,
PortfolioH1,
PortfolioWrapper,
PortfolioCard,
PortfolioIcon,
PortfolioH2,
PortfolioP,
PortfolioP2,
StyleModal,
StyleModalTitle,
StyleModalP,
Img,
StyleModalButton,
StyleModalLink,
StyleModalLinkContainer,
Close,
ButtonTwo
} from './PortfolioElements';

const Portfolio = (id) => {
  const [ecommerceIsOpen, setEcommerceIsOpen] = useState(false);
  const [netflixIsOpen, setNetflixIsOpen] = useState(false);
  const [airbnbIsOpen, setAirbnbIsOpen] = useState(false);

  const toggleEcommerce = () => {
    setEcommerceIsOpen(!ecommerceIsOpen);
  };

  const toggleNetflix = () => {
    setNetflixIsOpen(!netflixIsOpen);
  };

  const toggleAirbnb = () => {
    setAirbnbIsOpen(!airbnbIsOpen);
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioP2>Please check back here for updated projects.</PortfolioP2>
      <PortfolioWrapper>
        <PortfolioCard id="e-commerce" onClick={toggleEcommerce}>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>E-commerce App</PortfolioH2>
          {/* <PortfolioP>
          This app makes use of the MERN stack...
          </PortfolioP> */}
        </PortfolioCard>

        <StyleModal
          isOpen={ecommerceIsOpen}
          onBackgroundClick={toggleEcommerce}
          onEscapeKeydown={toggleEcommerce}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleEcommerce} />
          <Img src={Icon1} alt="ecommerce-app" />
          <StyleModalTitle>E-Commerce App</StyleModalTitle>
          <StyleModalP>
            This Ecommerce application was built using the MERN stack 
            (MongoDB, Express.js, React, Node.js). In the frontend, 
            ant-design and bootstrap are used for the design elements, 
            Redux for state management, and firebase for authentication 
            and security (functionality to login with a Google account). 
            When searching for available products, users have the ability 
            to apply mutiple search filters to narrow down product selections.
          </StyleModalP>
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/ecommerce"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://ts-ecommerce-app.herokuapp.com"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal>

        <PortfolioCard id="netlix-clone" onClick={toggleNetflix}>
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>Netflix Clone</PortfolioH2>
          {/* <PortfolioP>
            This app is currently in development. Stay tuned!
          </PortfolioP> */}
        </PortfolioCard>
        <StyleModal
          isOpen={netflixIsOpen}
          onBackgroundClick={toggleNetflix}
          onEscapeKeydown={toggleNetflix}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleNetflix} />
          <Img src={Icon2} alt="netflix-clone" />
          <StyleModalTitle>Netflix Clone</StyleModalTitle>
          <StyleModalP>
            This app is currently in development. Stay tuned!
          </StyleModalP>
          {/* <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer> */}
        </StyleModal>

        <PortfolioCard id="airbnb-clone" onClick={toggleAirbnb}>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Airbnb Clone</PortfolioH2>
          {/* <PortfolioP>
            This app is currently in development. Stay tuned!
          </PortfolioP> */}
        </PortfolioCard>
        <StyleModal
          isOpen={airbnbIsOpen}
          onBackgroundClick={toggleAirbnb}
          onEscapeKeydown={toggleAirbnb}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleAirbnb} />
          <Img src={Icon3} alt="airbnb-clone" />
          <StyleModalTitle>Airbnb Clone</StyleModalTitle>
          <StyleModalP>
            This app is currently in development. Stay tuned!
          </StyleModalP>
          {/* <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer> */}
        </StyleModal>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;
