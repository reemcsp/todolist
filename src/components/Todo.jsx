import { Button, Typography } from "antd";
import React from "react";
import { Checkbox } from 'antd';


class Todo extends React.Component {
    state = {
      completed: false,
    }

    toggleTodo = () => {
      this.setState({completed: !this.state.completed});
    }

    removeTodo = () => {
      this.props.onRemove(this.props.content)
    }

    render(){
      return (
          <div style={{display: 'flex', justifyContent: 'space-between', flexDirection:'row', width:'100%'}}>
            <Checkbox checked={this.state.completed} onClick={this.toggleTodo}>
              <Typography.Text delete={this.state.completed}>
                {this.props.content}
              </Typography.Text>
            </Checkbox> 
            <Button onClick={this.removeTodo}>remove</Button>
          </div>
      )  
    }
}

export default Todo;