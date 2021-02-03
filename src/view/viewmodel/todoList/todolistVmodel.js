import { insertTodo, setInputValue } from '../../../model/actions'

    export const onClickButtonTodo = (todo, dispatch) => {
        dispatch(insertTodo(todo))        
    }
    
    export const onChangeInputValue = (inputValue, dispatch) => {
        dispatch(setInputValue(inputValue))
    }
    
 

