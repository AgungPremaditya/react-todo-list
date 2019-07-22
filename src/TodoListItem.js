import React from 'react'
import { Checkbox, Table, Button } from 'semantic-ui-react'


const TodoListItem = (props) => {
  return (
      
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox checked={props.completed }/>
      </Table.Cell>
      <Table.Cell>
        { props.title }
      </Table.Cell>
      <Table.Cell>
        { (props.completed === true) ? "Completed" : "Incompleted" }
      </Table.Cell>
      <Table.Cell>
        <Button 
          color='red'
          onClick={() => {props.deleteByIndex(props.index)}}
        >
          Delete
        </Button>  
      </Table.Cell>
    </Table.Row>
  )
}

export default TodoListItem