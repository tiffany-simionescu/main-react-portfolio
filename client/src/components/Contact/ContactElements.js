import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // background: #33BBBF;
  background: linear-gradient(
    108deg,
    rgba(51, 187, 191, 1) 0%,
    rgba(45, 168, 171, 1) 100%
  );

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      transparent 100%
    );
    z-index: 2;
  }
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
      height: 80%;
    }
`;

export const Icon = styled(Link)`
    // margin-left: 32px;
    text-align: center;
    margin-top: 22px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    z-index: 999;

    @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
    }

    &:hover {
      color: #33BBBF;
      transition: 0.3s ease-out;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
      padding: 10px;
    }
`;

export const Form = styled.form`
    // background: #060F13;
    background: rgb(51,187,191);
    background: radial-gradient(circle, rgba(51,187,191,1) 20%, rgba(51,187,191,1) 10%, rgba(6,15,19,1) 100%);
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 999;
    display: grid;
    margin: 0 auto;
    padding: 30px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
      padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormInputMessage = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
    // background: #33BBBF;
    background: #060F13;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    // color: #060F13;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #33BBBF;
      transition: 0.3s ease-out;
    }
`;

export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #33BBBF;
      transition: 0.3s ease-out;
      cursor: pointer;
    }
`;

export const FormBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  // opacity: 0.7;
`;