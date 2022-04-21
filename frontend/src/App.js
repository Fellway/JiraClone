import './App.css';
import styled from "styled-components";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Tables from './components/Table/TablesList';
import Login from './views/Login';

const Label = styled.div`
  font-size: 1.5rem;
`

const Input = styled(Field)`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
  
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ced7db;
`

const RightPanel = styled.div`
  width: 100%;
  height: 100%;
`

const LeftPanel = styled.div`
  width: 100%;
  height: 100%;
`

const FormWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eceff1;
  border-radius: 20px;
  padding: 40px;
`

const Button = styled.button`
  width: 100%;
  height: 30px;
`

class App extends React.Component {

  state = {
    tasks: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.state
    return (
      <Login>
        
      </Login>
      // <Wrapper>
      //   <LeftPanel>
      //     <FormWrapper>
      //       <Formik
      //         initialValues={{ title: '', description: '' }}
      //         onSubmit={(values) => {
      //           var object = {
      //             title: values.title,
      //             description: values.description
      //           }
      //           try {
      //             axios.post('/api/tasks', object)
      //             axios.get('/api/tasks').then(res => {
      //               this.setState({tasks: res.data})
      //               console.log(this.state.tasks)
      //             })
      //           } catch (e) {
      //             console.log(e)
      //           }
      //         }}
      //       >
      //         {() => (
      //           <Form>
      //             <Label>Title:</Label>
      //             <Input type="title" name="title" />
      //             <ErrorMessage name="title" component="div" />
      //             <Label>Description:</Label>
      //             <Input type="description" name="description" />
      //             <ErrorMessage name="description" component="div" />
      //             <Button type="submit">
      //               Add task
      //             </Button>
      //           </Form>
      //         )}
      //       </Formik>
      //     </FormWrapper>
      //   </LeftPanel>
      //   <RightPanel>
      //     <div>
      //     <Tables></Tables>
      //     {tasks.map(task => {
      //         return <div key={task.id}> {task.title} {task.description}</div>
      //       })}
      //     </div>
      //   </RightPanel>
      // </Wrapper>
    );
  }
}

export default App;
