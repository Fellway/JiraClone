import styled from 'styled-components';
import fetchTables from "../../services/TableService";
import { Component } from "react";
import Table from "./Table";

const TableWrapper = styled.div`
  width: 100%;
  height: fit-content;
`

const Space = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
`

export default class TableList extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      Tables: []
    }
  }
  
  componentDidMount() {
    this.renderTables();
  }
  
  renderTables = async () => {
    try {
      const tables = await fetchTables();
      this.setState({
        Tables: tables
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const tables = this.state.Tables;
    
    return (
      <TableWrapper>
        {tables.map(table => {
          return (
            <div>
              <Table openTaskDetails={this.props.openTaskDetails} refreshTable={this.renderTables}>{table}</Table>
              <Space/>
            </div>
        )})}
      </TableWrapper>
    )
  }
}