import React, { useState } from 'react';
import styled from 'styled-components';
import loginUser from '../services/LoginService';
import registerUser from "../services/RegistrationService";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(198, 50, 22);
  background: linear-gradient(45deg, rgb(251, 119, 18) 0%, rgba(255, 167, 38, 1) 100%);
`

const LoginModal = styled.div`
  position: fixed;
  width: 350px;
  background-color: #fafafa;
  padding: 50px 30px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 12px 12px 30px -2px rgba(66, 68, 90, 1);
`

const LoginHeader = styled.div`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  background-position: center;
  background-image: url("https://nlpbay.com/img/site-logo.png");
  background-size: cover;
`

const LoginFormWrapper = styled.div`
  display: ${({isVisible}) => (isVisible ? "none" : "block")};
  width: 100%;
`

const RegisterFormWrapper = styled.div`
  display: ${({isVisible}) => (isVisible ? "block" : "none")};
  width: 100%;
`

const LoginHeaderSubtext = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: Verdana, serif;
  padding-top: 30px;
`

const RegisterOption = styled.span`
  color: #2659d5;
  :hover{
    cursor: pointer;
  }
`

const RegisterOptionWrapper = styled.div`
  text-align: center;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding-left: 10px;

  border: none;
  border-bottom: 1px solid #F57C00;

  ::placeholder {
    text-align: center;

    ::after {
      content: url("https://nlpbay.com/img/site-logo.png");
    }
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px auto;
`

const Button = styled.button`
  height: 50px;
  width: 80%;
  border-radius: 20px;
  border-style: none;
  font-size: 1.1rem;
  background: linear-gradient(45deg, rgba(255, 167, 38, 1) 0%, rgb(251, 119, 18) 100%);

  &:hover {
    cursor: pointer;
  }
`

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [usernameReg, setUsernameReg] = useState();
  const [passwordReg, setPasswordReg] = useState();
  const [display, setDisplay] = useState('none');
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  
  const handleRegistration = async e => {
    e.preventDefault();
    await registerUser(usernameReg, passwordReg).then(() => {
        e.preventDefault();
        const token = loginUser({
          usernameReg,
          passwordReg
        });
        setToken(token);
      }
    );
  }
  return (
    <Wrapper>
      <LoginModal>
        <LoginHeader />
        <LoginFormWrapper style={{'display': display === 'block' ? 'none' : 'block'}}>
          <LoginHeaderSubtext>
            Login to <b>Codetris</b>
          </LoginHeaderSubtext>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Login" onChange={e => setUserName(e.target.value)}>
            </Input>
            <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}>
            </Input>
            <ButtonWrapper>
              <Button>
                Sign in
              </Button>
            </ButtonWrapper>
          </form>
          <RegisterOptionWrapper>Don't have an account? <RegisterOption onClick={() => setDisplay('block')}>Sign up Now!</RegisterOption></RegisterOptionWrapper>
        </LoginFormWrapper>
        <RegisterFormWrapper style={{'display': display}}>
          <LoginHeaderSubtext>
            Register to <b>Codetris</b>
          </LoginHeaderSubtext>
          <form onSubmit={handleRegistration}>
            <Input type="text" placeholder="Login" onChange={e => setUsernameReg(e.target.value)}>
            </Input>
            <Input type="password" placeholder="Password" onChange={e => setPasswordReg(e.target.value)}>
            </Input>
            <ButtonWrapper>
              <Button>
                Register
              </Button>
            </ButtonWrapper>
          </form>
          <RegisterOptionWrapper>If you already have an account <RegisterOption onClick={() => setDisplay('none')}>Sign in!</RegisterOption></RegisterOptionWrapper>
        </RegisterFormWrapper>
      </LoginModal>
    </Wrapper>
  )
}