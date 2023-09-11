import {useEffect, useState} from "react";
import {getTodos} from "./features/todos/todosReducer";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store/store";
import {TodoType} from "./api/apiTypes";
import {App__Title, App__Wrapper, Error__Wrapper, Header__Container, Input__Wrapper, Todo__Wrapper} from "./AppStyles";

import {createTodoHandler} from "./features/todos/AddTodo/AddTodo";

import MainInput from "./features/mainInput/MainInput";
import HelpChat from "./features/helpChat/HelpChat";
import Theme from "./features/theme/Theme";
import Button from "./features/common/Button";
import {getTasks} from "./features/tasks/tasksReducer";
import {Todo} from "./features/todos/Todo";

function App() {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);
    const todos = useSelector<AppRootStateType, TodoType[]>((state) => state.todos);
    const dispatch = useAppDispatch();
    const mappedTodos = todos.map((el) => {
        return <Todo key={el.todo_id} todo={el} />;
    });
    useEffect(() => {
        dispatch(getTodos());
        dispatch(getTasks());
    }, []);
    return (
        <App__Wrapper>
            <Header__Container>
                <App__Title>Welcome to Todo App </App__Title>
                <Theme />
            </Header__Container>

            <Input__Wrapper>
                <div>
                    <MainInput
                        placeholder="new todo"
                        todo={todo}
                        setTodo={setTodo}
                        setError={setError}
                        id="mainInput"
                        editTodoHandler={() => createTodoHandler({todo, setTodo, setError, dispatch})}
                        todo_id="7"
                    />
                    <Error__Wrapper>{error}</Error__Wrapper>
                </div>
                <Button name="Add todo" onClick={() => createTodoHandler({todo, setTodo, setError, dispatch})} />
            </Input__Wrapper>
            <Todo__Wrapper>{mappedTodos}</Todo__Wrapper>
            <HelpChat modal={modal} setModal={setModal}/>
        </App__Wrapper>
    );
}

export default App;
