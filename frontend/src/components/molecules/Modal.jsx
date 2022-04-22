import styled from "styled-components";
import React, { useState } from "react";
import createTask from "../../services/TaskService";


const ModalWrapper = styled.div`
  width: 350px;
  height: fit-content;
  background-color: #fff;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: grid;
  cursor: auto;
  padding: 40px;
`

const ModalTopBar = styled.div`
  height: 35px;
  font-size: 20px;
`

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 30px;
  width: 30px;
  border-style: none;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
`

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
`

const Label = styled.div`
  font-size: 0.8rem;
  align-self: center;
`

const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  margin: 20px 0;
  background-color: #e5e5e5;
  border-style: solid;
  border-width: 1px;
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px auto;
`

const Button = styled.button`
  height: 40px;
  width: 40%;
  background-color: #F57C00;
  border-radius: 20px;
  border-style: none;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`

function Modal(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const columnId = props.columnId
    await createTask({
      title,
      description,
      columnId
    });
    props.refreshTable();
  }
  
  return (
    <>
      <ModalWrapper>
        <ModalTopBar>
          <CloseButton onClick={props.onClose}> X </CloseButton>
        </ModalTopBar>
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>
                Title:
              </Label>
              <Input type="text" onChange={e => setTitle(e.target.value)}>
              </Input>
            </InputWrapper>
            <InputWrapper>
              <Label>
                Description:
              </Label>
              <Input type="text" onChange={e => setDescription(e.target.value)}>
              </Input>
            </InputWrapper>
            
            <ButtonWrapper>
              <Button>
                Create task
              </Button>
            </ButtonWrapper>
          </form>
        </ModalContent>
      </ModalWrapper>
    </>
  );
}

export default Modal;