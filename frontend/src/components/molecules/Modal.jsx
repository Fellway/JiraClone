import styled from "styled-components";
import React, { useState } from "react";
import createTask from "../../services/TaskService";
import createColumn from "../../services/ColumnService";


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

const ModalHeader = styled.div`
  font-size: 1.5rem;
`

const ModalSubtitle = styled.div`
  margin-top: 5px;
  font-size: 1rem;
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
  font-size: 40px;
  cursor: pointer;
  transform: rotate(45deg);
  color: #636363;
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
  border-style: solid;
  border-width: 1px;
  border-bottom: 1px solid rgba(255, 167, 38, 1);
  border-top: none;
  border-left: none;
  border-right: none;
`

const ButtonWrapper = styled.div`
  text-align: center;
  width: fit-content;
  margin-right: 0;
  margin-left: auto;
`

const Button = styled.button`
  height: 40px;
  width: 100px;
  background: ${({color}) => (color)};
  border-color: dimgray;
  border-width: 1px;
  font-size: 0.8rem;
  display: inline-block;
  margin-left: 10px;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`

const InputWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 100px auto;
`

const FormInputs = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

function Modal(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [columnTitle, setColumnTitle] = useState();
  const [columnOrder, setColumnOrder] = useState();
  const type = props.type;
  const tableSize = props.tableSize;
  const createTaskAndRefreshTable = () => {
    const columnId = props.columnId;
    createTask({
      title,
      description,
      columnId
    });
    window.location.reload(false);
  }
  
  const createColumnAndRefreshTable = () => {
   const tableId = props.tableId;
   createColumn({
     columnTitle,
     columnOrder,
     tableId
   })
   window.location.reload(false);
  }
  
  const handleSubmit = async e => {
    e.preventDefault();
    await createTaskAndRefreshTable();
  }
  
  const createNewColumn = async e => {
    e.preventDefault();
    await createColumnAndRefreshTable();
  }
  
  return (
    <>
      <ModalWrapper>
        <CloseButton onClick={props.onClose}> + </CloseButton>
        {type === 'card' ?
          <ModalHeader>
            Create a new card:
            <ModalSubtitle>
              Provide required data below.
            </ModalSubtitle>
          </ModalHeader> :
          <ModalHeader>
            Create a new column:
            <ModalSubtitle>
              Provide required data below.
            </ModalSubtitle>
          </ModalHeader>}
        <ModalContent>
          {type === 'card' ?
            <form onSubmit={handleSubmit}>
              <FormInputs>
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
              </FormInputs>
    
    
              <ButtonWrapper>
                <Button onClick={props.onClose}>
                  Cancel
                </Button>
                <Button color={'linear-gradient(45deg, rgba(255, 167, 38, 1) 0%, rgb(251, 119, 18) 100%)'}>
                  Create task
                </Button>
              </ButtonWrapper>
            </form> :
            <form onSubmit={createNewColumn}>
              <FormInputs>
                <InputWrapper>
                  <Label>
                    Column title:
                  </Label>
                  <Input type="text" onChange={e => setColumnTitle(e.target.value)}>
                  </Input>
                  <Label>
                    Order:
                  </Label>
                  <Input type="number" min={1} max={tableSize+1} placeholder={1} onChange={e => setColumnOrder(e.target.value)}>
                  </Input>
                </InputWrapper>
              </FormInputs>
              <ButtonWrapper>
                <Button onClick={props.onClose}>
                  Cancel
                </Button>
                <Button color={'linear-gradient(45deg, rgba(255, 167, 38, 1) 0%, rgb(251, 119, 18) 100%)'}>
                  Create column
                </Button>
              </ButtonWrapper>
            </form>
          }
        </ModalContent>
      </ModalWrapper>
    </>
  );
}

export default Modal;