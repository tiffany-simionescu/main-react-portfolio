import React from 'react'
import {
  ResumeContainer,
  ResumeWrapper,
  ResumeRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
  ButtonTwo,
  ButtonThree
} from './ResumeElements';
import Pdf from './tiffany_simionescu_resume.pdf';

const Resume = () => {
  return (
    <>
      <ResumeContainer lightBg={true} id={'resume'}>
        <ResumeWrapper>
          <ResumeRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine>Resume</TopLine>
                <Heading lightText={false}>Full Stack Web development Graduate</Heading>
                <Subtitle darkText={true}>Bloom Institute of Technology - <em>formally Lambda School</em> - is a 9+ month computer 
                  science & software engineering program that provides an 
                  immersive hands-on curriculum with a focus on computer science, 
                  and full-stack web development. For more information about my 
                  work experience, please download my resume.
                </Subtitle>
                <BtnWrap>
                  <ButtonTwo to={Pdf} target="_blank">
                    View Resume
                  </ButtonTwo>
                  <ButtonThree href={"https://www.credly.com/badges/32b5b6dd-969b-4416-b19c-31daf3acf1e0/public_url"} target="_blank">
                    View Badge Credentials
                  </ButtonThree>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <a href='https://www.credly.com/badges/32b5b6dd-969b-4416-b19c-31daf3acf1e0/public_url'>
                  <Img 
                    src={require('../../images/badge.png').default} 
                    alt={"resume-image"} 
                  />
                </a>
              </ImgWrap>
            </Column2>
          </ResumeRow>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume;
