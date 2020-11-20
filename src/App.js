import React from 'react';
import { Input, Typography, Button, List } from 'antd';
import Todo from './components/Todo.jsx'


const { Title } = Typography;
const {  Paragraph } = Typography;


class App extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      userInput: '',
      todos: [],
    };
  }

  render() {

    return (
      <div>
        <Title level={1}>Todos</Title>
        <div style={{display: 'flex', justifyContent:'row'}}>
        <Input
          placeholder='What needs to be done?'
          onChange={e => {
            this.setState({userInput: e.target.value})
          }}
        />
        <Button
         type='primary'
         onClick={() => {
          this.setState({todos: [...this.state.todos, this.state.userInput]})
         }}
        >
          Add Todo
        </Button>
        </div>
        <List
          bordered
          dataSource={this.state.todos}
          renderItem={todo => (
            <List.Item>
              <Todo content={todo} onRemove={content => this.setState({todos: this.state.todos.filter(todo => todo !== content)})} />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default App;
