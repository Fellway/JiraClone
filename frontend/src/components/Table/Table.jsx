import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
    height: 200px;<
    width: 200px;
    background-color: red;
`

const Table = ({ table }) => (
    <>
        {table && <Wrapper>
            {axios.get(`/api/tables/${table.id}`).then(res => {
                console.log(res.data)
            })}
        </Wrapper>}
    </>

)

export default Table;