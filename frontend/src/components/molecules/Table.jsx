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

const AddNewColumn = styled.div`
  width: 150px;
`

const Placeholder = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

const PlaceholderText = styled.div`
  font-size: 15px;
  margin-top: 20px;
  text-align: center;
`

const PlaceholderSign = styled.div`
  width: 100px;
  height: 100px;
  line-height: 75px;
  font-size: 100px;
  border: 3px dashed;
  border-radius: 50%;
  text-align: center;
`

export default class Table extends Component {

  openDetails() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  openModal(type) {
    this.setState({
      isModalOpen: true,
      type: type
    })
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      type: ''
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
    console.log(table)
    return (
      <TableWrapper>
        {this.state.isModalOpen && <Modal columnId={table.columns[0].id} onClose={() => this.closeModal()} type={this.state.type} tableSize={table.columns.length} tableId={table.id}> </Modal>}
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
          <Column onClick={() => this.openModal('column')}>
            <AddNewColumn>
              <Placeholder>
                <PlaceholderSign>
                  +
                </PlaceholderSign>
                
                <PlaceholderText>
                  Add new column
                </PlaceholderText>
              </Placeholder>
            </AddNewColumn>
          </Column>
          <RoundButton onClick={() => this.openModal('card')}>
          </RoundButton>
        </TableDetails>}
      </TableWrapper>
    )
  }
};