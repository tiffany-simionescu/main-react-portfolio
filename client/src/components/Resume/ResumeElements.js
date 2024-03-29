import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResumeContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#060F13')};
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ResumeWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 766px) {
    height: 600px;
  }
`;

export const ResumeWrapperTwo = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 766px) {
    height: 500px;
    margin: auto 18px;
  }
`;

export const ResumeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 766px) {
    display: block;
  }
  `;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 766px) {
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #33BBBF;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#060F13')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#060F13' : '#fff')};
`;

export const SubtitleTwo = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#060F13' : '#fff')};

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    transform: scale(0);
  }
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#33BBBF' : '#060F13')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#33BBBF')};
    color: #060F13;
  }
`;

export const ButtonTwo = styled(Link)`
  color: #fff;
  background-image: linear-gradient(30deg, #060F13 50%, #33BBBF 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 400ms ease-in-out;
  border-radius: 50px;
  white-space: nowrap;
  padding: 14px 30px;
  cursor:pointer;
  text-decoration: none;

  &:hover {
    background-position: 100%;
    color: #fff;
    transition: 400ms ease-in-out;
  }
`;

export const ButtonThree = styled.a`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#33BBBF' : '#060F13')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#060F13' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#33BBBF')};
    color: #060F13;
  }
`;