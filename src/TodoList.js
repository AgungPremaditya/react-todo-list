import React from 'react'
import TodoListItem from './TodoListItem'
import { Checkbox, Table, Input, Button } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'


export default class TodoList extends React.Component {
  
  constructor() {
    super()
    this.state = {
      title: "My first Todo List",
      current: "",
      todos:[]
    }

    this.deleteByIndex = this.deleteByIndex.bind(this)
  }

  deleteByIndex(index) {
    
    this.setState(prevState => (
      {
        todos: [...prevState.todos.slice(0, index), ...prevState.todos.slice(index + 1)]
      }
    ))

  }


  render () {
    return (
      <div>
        <h3 style={{textAlign:"center"}}>TodoList</h3>
        <Table padded singleLine color={'blue'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Check</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.state.todos.map((todo, index) => {
                return (
                    <TodoListItem
                      key={index}
                      index={index}
                      deleteByIndex={this.deleteByIndex}
                      title={todo.todoName}
                      completed={todo.completed}
                    />
                )
              })
            }
            <Table.Row>
              <Table.Cell colSpan='3'>
                <Input 
                  fluid
                  placeholder='Add TodoList item'
                  type='text'
                  defaultValue={this.state.current}
                  onChange={(event) => {this.setState({current: event.target.value})}}
                />
              </Table.Cell>
              
              <Table.Cell collapsing>
                <Button 
                  primary 
                  onClick={
                    () => {
                      this.setState(prevState => ({
                        todos: prevState.todos.concat(
                          {todoName: this.state.current, completed: false}
                        ),
                        current: ""
                      }))
                    }
                  }
                >
                  Add Item
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}