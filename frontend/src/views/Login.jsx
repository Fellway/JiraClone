import React, { useState } from 'react';
import styled from 'styled-components';
import loginUser from '../services/LoginService';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffa726;
`

const LoginModal = styled.div`
  position: fixed;
  width: 350px;
  background-color: #e5e5e5;
  padding: 100px 50px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 8px 8px 24px -5px rgba(66, 68, 90, 1);
`

const LoginHeader = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
`

const LoginFormWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
`

const Label = styled.div`
  font-size: 1.2rem;
`

const LoginHeaderSubtext = styled.div`
  font-size: 1rem;
  text-align: center;
  padding: 20px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  background-color: #e5e5e5;

  border-radius: 10px;
  border-color: #F57C00;
  border-style: solid;
  border-width: 1px;
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px auto;
`

const Button = styled.button`
  height: 50px;
  width: 80%;
  background-color: #ffa726;
  border-radius: 20px;
  border-style: none;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    <Wrapper>
      <LoginModal>
        <LoginHeader>
          Welcome
        </LoginHeader>
        <LoginHeaderSubtext>
          Log in to Codetris to continue.
        </LoginHeaderSubtext>
        <LoginFormWrapper>
          <form onSubmit={handleSubmit}>
            <Label>
              Login:
            </Label>
            <Input type="text" onChange={e => setUserName(e.target.value)}>
            </Input>
            <Label>
              Password:
            </Label>
            <Input type="password" onChange={e => setPassword(e.target.value)}>
            </Input>
            <ButtonWrapper>
              <Button>
                Continue
              </Button>
            </ButtonWrapper>
          </form>
        </LoginFormWrapper>
      </LoginModal>
    </Wrapper>
  )
}