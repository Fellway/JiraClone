import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 200px;
    width: 200px;
    background-color: red;
`

const Tasks = ({tasks}) => (
    <Wrapper>
         {tasks.map(task => (
            <li>
              {task}
              {console.log(tasks)}
            </li>
          ))}
    </Wrapper>
)

export default Tasks;