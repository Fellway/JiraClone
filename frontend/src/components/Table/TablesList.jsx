import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table';

const Wrapper = styled.div`
    height: 200px;
    width: 200px;
    background-color: red;
`

class Tables extends React.Component {

    state = {
        tables: []
    }

    constructor(props) {
        super(props);
        axios.get('/api/tables').then(res => {
            this.setState({ tables: res.data })
            console.log(this.state.tables);
        })
    }

    render() {
        const { tables } = this.state;
        return (
            <Wrapper>
                 {tables.map(table => {
                    return <div key={table.id}> {table.name} </div>
            })}
            </Wrapper>
        )
    }
}

export default Tables;