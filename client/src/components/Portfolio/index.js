import React from 'react';
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
PortfolioP2
} from './PortfolioElements';

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioP2>Please check back here for updated projects.</PortfolioP2>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>E-commerce App</PortfolioH2>
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>Netflix Clone</PortfolioH2>
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>

        <PortfolioCard>
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Airbnb Clone</PortfolioH2>
          <PortfolioP>
            Currently working on this project. Will be posting soon.
          </PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
