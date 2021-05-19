import React from 'react'
import { 
  Container, 
  Form, 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel, 
  FormWrap, 
  Icon, 
  Text
} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Tiffany Simionescu's Portfolio</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Admin Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign In</FormButton>
              <Text to="/">Cancel</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
