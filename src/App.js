import React from 'react'
import TodoList from './TodoList';
import { Container} from "semantic-ui-react";


class App extends React.Component {
  render() {
    return (
      <Container style={{ margin: 40, paddingLeft: 250, paddingRight: 250}}>
        <TodoList/>
      </Container>
    )
  }
}

export default App