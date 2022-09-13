import React, { useState } from 'react';
// import Icon1 from '../../images/svg-3.svg'
// import Icon3 from '../../images/svg-5.svg'
// import Icon4 from '../../images/svg-6.svg'
// import Blog from '../../images/blog.jpg';
import Dice from '../../images/dice.jpg';
import DiceGame from '../../images/dice_game.png';
import Drums from '../../images/drums.jpg';
import PlayingDrums from '../../images/playing_drums.png';
import VirtualResume from '../../images/virtual_resume.png';
import VirtualResumeImg from '../../images/virtual_resume.jpg';
// import Stock from '../../images/stocks.jpeg';
import CloseIcon from '../../images/close.png';
import {
PortfolioContainer,
PortfolioH1,
PortfolioWrapper,
PortfolioCard,
PortfolioIcon,
PortfolioH2,
// PortfolioP,
PortfolioP2,
StyleModal,
StyleModalTitle,
StyleModalP,
Img,
// StyleModalButton,
// StyleModalLink,
StyleModalLinkContainer,
Close,
ButtonTwo
} from './PortfolioElements';

const Portfolio = (id) => {
  // const [ecommerceIsOpen, setEcommerceIsOpen] = useState(false);
  // const [alphaBlogIsOpen, setAlphaBlogIsOpen] = useState(false);
  // const [financeTrackerIsOpen, setFinanceTrackerIsOpen] = useState(false);
  const [diceGameIsOpen, setDiceGameIsOpen] = useState(false);
  const [drumKitIsOpen, setDrumKitIsOpen] = useState(false);
  const [visualResumeIsOpen, setVisualResumeIsOpen] = useState(false);

  // const toggleEcommerce = () => {
  //   setEcommerceIsOpen(!ecommerceIsOpen);
  // };

  // const toggleAlphaBlog = () => {
  //   setAlphaBlogIsOpen(!alphaBlogIsOpen);
  // };

  // const toggleFinanceTracker = () => {
  //   setFinanceTrackerIsOpen(!financeTrackerIsOpen);
  // };

  const toggleDiceGame = () => {
    setDiceGameIsOpen(!diceGameIsOpen);
  };

  const toggleDrumKit = () => {
    setDrumKitIsOpen(!drumKitIsOpen);
  };

  const toggleVisualResume = () => {
    setVisualResumeIsOpen(!visualResumeIsOpen);
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioP2>Please check back here for updated projects.</PortfolioP2>
      <PortfolioWrapper>
        {/* <PortfolioCard id="e-commerce" onClick={toggleEcommerce}>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>E-commerce App</PortfolioH2>
        </PortfolioCard> */}

        {/* <StyleModal
          isOpen={ecommerceIsOpen}
          onBackgroundClick={toggleEcommerce}
          onEscapeKeydown={toggleEcommerce}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleEcommerce} />
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
        </StyleModal> */}

        <PortfolioCard id="dice-game-app" onClick={toggleDiceGame}>
          <PortfolioIcon src={DiceGame} />
          <PortfolioH2>Dice Game App</PortfolioH2>
        </PortfolioCard>

        <StyleModal
          isOpen={diceGameIsOpen}
          onBackgroundClick={toggleDiceGame}
          onEscapeKeydown={toggleDiceGame}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleDiceGame} />
          <Img src={Dice} alt="dice-game-app" />
          <StyleModalTitle>Dice Game App</StyleModalTitle>
          <StyleModalP>
            This is a Dice Game made with HTML, CSS, and JavaScript. The 
            onclick function for the Let's Roll button creates two random 
            numbers between 1 and 6. After evaluating the random number 
            values with conditionals, the winner is displayed in the heading, 
            and the scoreboard is updated accordingly. There's also a reset 
            button to clear the scoreboard.
          </StyleModalP>
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/dice-game"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://tiffany-simionescu.github.io/dice-game/"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal>

        {/* <PortfolioCard id="alpha-blog-clone" onClick={toggleAlphaBlog}>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Alpha Blog</PortfolioH2>
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
            <ButtonTwo 
              target="_blank"
              href="https://alphablog.tiffanysimionescu.com"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal> */}

        <PortfolioCard id="drum-kit-app" onClick={toggleDrumKit}>
          <PortfolioIcon src={PlayingDrums} />
          <PortfolioH2>Drum Kit App</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={drumKitIsOpen}
          onBackgroundClick={toggleDrumKit}
          onEscapeKeydown={toggleDrumKit}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleDrumKit} />
          <Img src={Drums} alt="drum-kit-app" />
          <StyleModalTitle>Drum Kit App</StyleModalTitle>
          <StyleModalP>
            The drum-kit uses HTML, CSS, and JavaScript. This application 
            uses event listeners for clicks and keypresses to determine which 
            MP3 to play, and which classes to add or remove from elements.
          </StyleModalP>
          <StyleModalLinkContainer>
            <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/drum-kit"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://tiffany-simionescu.github.io/drum-kit/"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal>

        {/* <PortfolioCard id="alpha-blog-clone" onClick={toggleFinanceTracker}>
          <PortfolioIcon src={Icon4} />
          <PortfolioH2>Finance Tracker</PortfolioH2>
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
            <ButtonTwo 
              target="_blank"
              href="https://financetracker.tiffanysimionescu.com"
            >
              View Website
            </ButtonTwo>
          </StyleModalLinkContainer>
        </StyleModal> */}

        <PortfolioCard id="visual-resume-site" onClick={toggleVisualResume}>
          <PortfolioIcon src={VirtualResume} />
          <PortfolioH2>Visual Resume</PortfolioH2>
        </PortfolioCard>
        <StyleModal
          isOpen={visualResumeIsOpen}
          onBackgroundClick={toggleVisualResume}
          onEscapeKeydown={toggleVisualResume}
        >
          <Close src={CloseIcon} alt="close" onClick={toggleVisualResume} />
          <Img src={VirtualResumeImg} alt="visual-resume-site" />
          <StyleModalTitle>Visual Resume</StyleModalTitle>
          <StyleModalP>
            Coming Soon...
          </StyleModalP>
          <StyleModalLinkContainer>
            {/* <ButtonTwo 
              target="_blank"
              href="https://github.com/tiffany-simionescu/drum-kit"
            >
              View Code
            </ButtonTwo>
            <ButtonTwo 
              target="_blank"
              href="https://tiffany-simionescu.github.io/drum-kit/"
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
