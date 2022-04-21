import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #ffa726;
`

const LoginModal = styled.div`
    position: fixed;
    width: 450px;
    background-color: #e5e5e5;
    padding: 100px 50px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
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
    border: none;
    background-color: #e5e5e5;

    border-radius: 10px;
    border-color: #ffa726;
    border-style: solid;
    border-width: 1px;
`

const ButtonWrapper = styled.div`
    text-align:center;
    margin: 50px auto;
`

const Button = styled.button`
    height: 50px;
    width: 400px;
    background-color: #ffa726;
    border: 0;
    font-size: 1.1rem;

    &:hover {
        cursor: pointer;
    }
`

const Login = () => (
    <Wrapper>
        <LoginModal>
            <LoginHeader>
                Welcome
            </LoginHeader>
            <LoginHeaderSubtext>
                Log in to Codetris to continue.
            </LoginHeaderSubtext>
            <LoginFormWrapper>
                <Label>
                    Login:
                </Label>
                <Input>
                </Input>
                <Label>
                    Password:
                </Label>
                <Input type="password">
                </Input>
                <ButtonWrapper>
                    <Button>
                        Continue
                    </Button>
                </ButtonWrapper>

            </LoginFormWrapper>
        </LoginModal>
    </Wrapper>
)

export default Login;