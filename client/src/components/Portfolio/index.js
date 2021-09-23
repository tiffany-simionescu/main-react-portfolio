import React, { useState } from 'react';
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
import Icon4 from '../../images/svg-6.svg'
import Joker from '../../images/joker.jpg';
import Blog from '../../images/blog.jpg';
import Stock from '../../images/stocks.jpeg';
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
  const [alphaBlogIsOpen, setAlphaBlogIsOpen] = useState(false);
  const [financeTrackerIsOpen, setFinanceTrackerIsOpen] = useState(false);

  const toggleEcommerce = () => {
    setEcommerceIsOpen(!ecommerceIsOpen);
  };

  const toggleNetflix = () => {
    setNetflixIsOpen(!netflixIsOpen);
  };

  const toggleAlphaBlog = () => {
    setAlphaBlogIsOpen(!alphaBlogIsOpen);
  };

  const toggleFinanceTracker = () => {
    setFinanceTrackerIsOpen(!financeTrackerIsOpen);
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
          {/* <Img src={Icon1} alt="ecommerce-app" /> */}
          <Img src="https://res.cloudinary.com/dzw1fju6k/image/upload/c_scale,w_832/v1621914480/hero-img_ptwrc4.jpg" alt="ecommerce-app" />
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
              href="https://github.com/tiffany-simionescu/ecommerce-app"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://ecommerce.tiffanysimionescu.com/"
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
          {/* <Img src={Icon2} alt="netflix-clone" /> */}
          <Img src={Joker} alt="netflix-clone" />
          <StyleModalTitle>Netflix Clone</StyleModalTitle>
          <StyleModalP>
            This Netflix Clone application was built using React, 
            Styled-Components, Fuse.js for searching through movies and series, 
            custom hooks, Firebase for authentication and security, and Cloud Firestore for 
            the database. 
          </StyleModalP> 
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/netflix-clone"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://netflixclone.tiffanysimionescu.com"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal>

        <PortfolioCard id="alpha-blog-clone" onClick={toggleAlphaBlog}>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Alpha Blog</PortfolioH2>
          {/* <PortfolioP>
            This app is currently in development. Stay tuned!
          </PortfolioP> */}
        </PortfolioCard>
        <StyleModal
          isOpen={alphaBlogIsOpen}
          onBackgroundClick={toggleAlphaBlog}
          onEscapeKeydown={toggleAlphaBlog}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleAlphaBlog} />
          <Img src={Blog} alt="alpha-blog-clone" />
          <StyleModalTitle>Alpha Blog</StyleModalTitle>
          <StyleModalP>
            The Alpha Blog was built using Ruby on Rails, Bootstrap for styling,
            bcrypt for user authentication, has one-to-many and many-to-many 
            database associations, as well as model, controller and integration 
            testing.
          </StyleModalP>
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/alpha-blog"
            >
              View Code
            </ButtonTwo>
            {/* <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Website
            </ButtonTwo> */}
          </StyleModalLinkContainer>
        </StyleModal>

        <PortfolioCard id="alpha-blog-clone" onClick={toggleFinanceTracker}>
          <PortfolioIcon src={Icon4} />
          <PortfolioH2>Finance Tracker</PortfolioH2>
          {/* <PortfolioP>
            This app is currently in development. Stay tuned!
          </PortfolioP> */}
        </PortfolioCard>
        <StyleModal
          isOpen={financeTrackerIsOpen}
          onBackgroundClick={toggleFinanceTracker}
          onEscapeKeydown={toggleFinanceTracker}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleFinanceTracker} />
          <Img src={Stock} alt="alpha-blog-clone" />
          <StyleModalTitle>Finance Tracker</StyleModalTitle>
          <StyleModalP>
            The Finance Tracker is a social media stock tracker that was built using 
            Ruby on Rails, Bootstrap for styling, device for user authentication, and 
            has many-to-many database associations. 
          </StyleModalP>
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/finance-tracker"
            >
              View Code
            </ButtonTwo>
            {/* <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu"
            >
              View Website
            </ButtonTwo> */}
          </StyleModalLinkContainer>
        </StyleModal>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;
