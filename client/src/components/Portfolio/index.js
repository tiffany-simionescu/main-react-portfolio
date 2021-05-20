import React, { useState } from 'react';
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
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
StyleModalButton
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
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>

        <StyleModal
          isOpen={ecommerceIsOpen}
          onBackgroundClick={toggleEcommerce}
          onEscapeKeydown={toggleEcommerce}
        >
          <Img src={Icon1} alt="ecommerce-app" />
          <StyleModalTitle>E-Commerce App</StyleModalTitle>
          <StyleModalP>
            This sections describes what the project is all about.
          </StyleModalP>
          <StyleModalButton onClick={toggleEcommerce}>Close</StyleModalButton>
        </StyleModal>

        <PortfolioCard id="netlix-clone" onClick={toggleNetflix}>
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>Netflix Clone</PortfolioH2>
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>
        <StyleModal
          isOpen={netflixIsOpen}
          onBackgroundClick={toggleNetflix}
          onEscapeKeydown={toggleNetflix}
        >
          <Img src={Icon2} alt="netlix-clone" />
          <StyleModalTitle>Netflix Clone</StyleModalTitle>
          <StyleModalP>
            This sections describes what the project is all about.
          </StyleModalP>
          <StyleModalButton onClick={toggleNetflix}>Close</StyleModalButton>
        </StyleModal>

        <PortfolioCard id="airbnb-clone" onClick={toggleAirbnb}>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Airbnb Clone</PortfolioH2>
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>
        <StyleModal
          isOpen={airbnbIsOpen}
          onBackgroundClick={toggleAirbnb}
          onEscapeKeydown={toggleAirbnb}
        >
          <Img src={Icon3} alt="airbnb-clone" />
          <StyleModalTitle>Airbnb Clone</StyleModalTitle>
          <StyleModalP>
            This sections describes what the project is all about.
          </StyleModalP>
          <StyleModalButton onClick={toggleAirbnb}>Close</StyleModalButton>
        </StyleModal>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
