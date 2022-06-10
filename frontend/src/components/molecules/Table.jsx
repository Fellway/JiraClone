import styled from "styled-components";
import { Component } from "react";
import TaskCard from "./TaskCard";
import RoundButton from "../atoms/RoundButton";
import Modal from "./Modal";

const TableDetails = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  column-gap: -10px;
`

const SprintGoal = styled.div`
  font-size: 15px;
`

const Column = styled.div`
  text-align: left;
  position: relative;
  border: 10px solid white;
  padding-bottom: 50px;
`

const TableHeader = styled.div`
  text-align: left;
  padding: 20px;
  font-size: 2rem;
`

const TableWrapper = styled.div`
  cursor: pointer;
  padding: 100px;
`

const TaskContainer = styled.div`
  display: grid;
`

const ColumnHeader = styled.div`
  font-size: 15px;
  padding: 22px;
`

export default class Table extends Component {

  openDetails() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  openModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      Table: this.props.children,
      isOpen: true,
      isModalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.openDetails = this.openDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    const table = this.state.Table;
    return (
      <TableWrapper>
        {this.state.isModalOpen && <Modal columnId={table.columns[0].id} onClose={() => this.closeModal()}> </Modal>}
        <TableHeader onClick={this.openDetails}>{table.name}<SprintGoal>Testowy sprint goal</SprintGoal></TableHeader>
        {this.state.isOpen && <TableDetails>{table.columns.map(column =>
          <Column key={column.id}>
            <ColumnHeader>
              {column.name} {column.tasks.length}
            </ColumnHeader>
            <TaskContainer>
              {column.tasks.map(task => (
                <TaskCard onClick={this.props.openTaskDetails}>
                  {task}
                </TaskCard>
              ))}
            </TaskContainer>
          </Column>
        )}
          <RoundButton onClick={this.openModal}>

          </RoundButton>
        </TableDetails>}
      </TableWrapper>
    )
  }
};