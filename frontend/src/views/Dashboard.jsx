import React, { Component } from 'react';
import MainTemplate from "../components/templates/NavigationTemplate";
import TableList from "../components/molecules/TableList";
import styled from 'styled-components';

const SideModalTaskDetails = styled.div`
  position: fixed;
  z-index: 20;
  top:0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 50%;
  height: 100%;
  padding: 100px;

  border-left: 1px solid black;
  background-color: #fafafa;

  display: grid;
  box-shadow: -11px 0px 24px 0px rgba(66, 68, 90, 1);
  grid-template-rows: 0.25fr 1fr 1fr;

  transition: .5s;

`

const TaskHeader = styled.div`
  font-size: 3rem;
`

const TaskDescription = styled.div`
  font-size: 1.5rem;
`

const Comments = styled.div`

`
const CloseModal = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 3rem;
  cursor: pointer;
`

const CommentsHeader = styled.div`
  font-size: 2rem;
  padding: 10px;
`

const AddComment = styled.textarea`
width: 100%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;

`

export default class Dashboard extends Component {

  openDetails(task) {
    this.setState({
      isOpen: true,
      task: task
    })
  }

  closeDetails() {
    this.setState({
      isOpen: false
    })
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
      task: {}
    }

    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  render() {
    return (
      <MainTemplate>
        <SideModalTaskDetails isOpen={this.state.isOpen}>
          <CloseModal onClick={this.closeDetails}>
            ✖
          </CloseModal>
          {this.state.task &&
            <>
              <TaskHeader>
                {this.state.task.name}
              </TaskHeader>
              <TaskDescription>
                {this.state.task.description}
              </TaskDescription>
              <Comments>
                <CommentsHeader>
                  Comments: <span>0</span>
                </CommentsHeader>
                <AddComment>

                </AddComment>
              </Comments>
            </>
          }
        </SideModalTaskDetails>
        <TableList openTaskDetails={this.openDetails}>

        </TableList>
      </MainTemplate>

    )
  }
}