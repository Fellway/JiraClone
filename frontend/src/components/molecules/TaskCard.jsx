import styled from "styled-components";
import { Component } from "react";

const CardWrapper = styled.div`
  text-align: left;
  width: 150px;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0 auto 20px auto;
  display: grid;
  border: 1px solid rgba(0, 0, 0, 0.17);
`

const CardTitle = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 10px;
`

const CardDescription = styled.div`
  font-size: 8px;
  text-align: left;
`

const CardId = styled.div`
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 5px;
`

const CardCreatedBy = styled.div`
  align-self: end;
  text-align: right;
  font-size: 10px;
`

export default class TaskCard extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      Task: []
    }
  }
  
  render() {
    const task = this.props.children;
    return(
      <CardWrapper>
        <CardId>
          JIRA-{task.id}
        </CardId>
        <CardTitle>
          {task.name}
        </CardTitle>
        <CardDescription>
          {task.description}
        </CardDescription>
        <CardCreatedBy>
          User-{task.createdby}
        </CardCreatedBy>
      </CardWrapper>
    )
  }

}