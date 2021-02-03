import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { onClickButtonTodo, onChangeInputValue } from '../../viewmodel/todoList/todolistVmodel'
import TodoList from '../../viewpage/todoList/todolist'

class TodoListController extends React.Component  {

     handleOnClick = () => {
         console.log('disparou')
        const {dispatch} = this.props
        onClickButtonTodo(this.props.input, dispatch)
    }

     handleInputChange = (input) => {
        const {dispatch} = this.props
        onChangeInputValue(input, dispatch)
    }

    render() {
        console.log(this.props)
        return (
            <TodoList 
                todosPage={this.props.todos} 
                inputPage={this.props.input} 
                handleOnClickPage={this.handleOnClick} 
                handleInputChangePage={this.handleInputChange}
            > 
            </TodoList>
    
        )
    }

}

const mapStateToProps = state => ({
    todos: state.todoList,
    input: state.inputValue
  });

export default connect(mapStateToProps)(TodoListController)