import React from 'react'
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
  Text
} from './ContactElements'

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Tiffany Simionescu's Portfolio</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Contact</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputMessage type="textarea" rows="5" required />
              <FormButton type="submit">Send</FormButton>
              <Text to="/">Cancel</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Contact
