import React, { useState } from 'react'
import Video from '../../videos/video2.mp4';
import UseEmail from '../../UseEmail';
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
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    loading,
    submitted,
    error,
    sendEmail
  } = UseEmail("https://public.herotofu.com/v1/4164f2b0-351a-11ed-9de0-b73c4b901972");


  const handleNameChange = (e) => {
    setName(e.target.value.replace(/[^a-zA-Z]/ig, ''));
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Tiffany Simionescu's Portfolio</Icon>
          <FormContent>
            <Form action="https://public.herotofu.com/v1/4164f2b0-351a-11ed-9de0-b73c4b901972" method="post">
              <FormH1>Contact</FormH1>

              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" name="name" value={name} 
                onChange={handleNameChange} minLength="2" required />

              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" name="email" value={email} 
                onChange={handleEmailChange} required />

              <FormLabel htmlFor="message">Message</FormLabel>
              <FormInputMessage type="textarea" name="message" value={message} 
                onChange={handleMessageChange} rows="5" required />

                { submitted && 'Done, email was sent!'}
                { error ? `Unexpected error: ${error}` : null}
                { loading && 'Email is being sent now...' }
              
              <FormButton type="submit" value="Download CTA">Send</FormButton>
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

export default Contact;
