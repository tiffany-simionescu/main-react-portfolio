import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Video from '../../videos/video2.mp4';
import { useHistory } from 'react-router-dom';
import { 
  Container, 
  Form, 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormInputMessage,
  FormLabel, 
  FormWrap, 
  Icon, 
  Text,
  FormBg,
  VideoBg
} from './ContactElements'

const Contact = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'gmail', 
      'template_dWaijdid', 
      e.target, 
      'user_IlZyzJhy7n0poMp73csQD'
    )
    .then(res => {
      console.log("Email was sent.")
      history.push('/');
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value.replace(/[^a-zA-Z]/ig, ''))
  }

  return (
    <>
      <Container onSubmit={sendEmail}>
        <FormWrap>
          <Icon to="/">Tiffany Simionescu's Portfolio</Icon>
          <FormContent>
            <Form>
              <FormH1>Contact</FormH1>

              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" name="name" value={name} 
                onChange={handleNameChange} minLength="2" required />

              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" name="email" required />

              <FormLabel htmlFor="message">Message</FormLabel>
              <FormInputMessage type="textarea" rows="5" name="message" required />
              
              <FormButton type="submit">Send</FormButton>
              <Text to="/">Cancel</Text>
            </Form>
          </FormContent>
        </FormWrap>
        <FormBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </FormBg>
      </Container>
    </>
  )
}

export default Contact
