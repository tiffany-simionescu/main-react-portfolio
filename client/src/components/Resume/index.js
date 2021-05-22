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
                <Heading lightText={false}>Lambda School Graduate</Heading>
                <Subtitle darkText={true}>Lambda School is a 9+ month computer 
                  science & software engineering program that provides an 
                  immersive hands-on curriculum with a focus on computer science, 
                  and full-stack web development. For more information about my 
                  work experience, please download my resume.
                </Subtitle>
                <BtnWrap>
                  <ButtonTwo to={Pdf} target="_blank">
                    View Resume
                  </ButtonTwo>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img 
                  src={require('../../images/svg-1.svg').default} 
                  alt={"resume-image"} 
                />
              </ImgWrap>
            </Column2>
          </ResumeRow>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume;
