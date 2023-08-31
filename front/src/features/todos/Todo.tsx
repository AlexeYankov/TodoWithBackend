import React, {useState} from "react";
import {TaskType, TodoType} from "../../api/apiTypes";
import {deleteTodo, updateTodo} from "./todosReducer";
import Button from "../common/Button";
import {AppRootStateType, useAppDispatch} from "../../store/store";
import {
    Button__Container,
    Task__Container,
    Task__Error__Wrapper,
    Todo__Container,
    Todo__Container__Wrapper,
    Todo__Label,
    addBtn,
    closeBtn,
    editBtn,
} from "./Todo.styles";
import MainInput from "../mainInput/MainInput";
import Task from "../tasks/Task";
import {createTask, getTasks} from "../tasks/tasksReducer";
import {useSelector} from "react-redux";

type TodosType = {
    todo: TodoType;
};

export function Todo({todo}: TodosType) {
    const tasks = useSelector<AppRootStateType, TaskType[]>((state) => state.tasks);
    const {todo_id, todo_name} = todo;
    const [task, setTask] = useState("");
    const [todoName, changeTodoName] = useState(todo_name);
    const [visible, setVisible] = useState(true);
    const [taskError, setTaskError] = useState("");
    const dispatch = useAppDispatch();
    const filteredTasksForTodo = tasks.filter((el) => (el.tasks_todo_id == todo_id ? el : ""));
    const filteredTasks: TaskType[] = filteredTasksForTodo.reduce(function (acc: TaskType[], el: TaskType, i: number) {
        el.task_id >= filteredTasksForTodo[i].task_id ? acc.unshift(el) : acc.push(el);
        return acc;
    }, []);
    const mappedTasks = filteredTasks.map((el) => {
        return <Task task={el} key={el.task_id} />;
    });
    const editTodoHandler = (id: string, value: string) => {
        const updatedCurrentTodo = {
            todo_name: value,
            todo_filter: "updated",
        };
        dispatch(updateTodo({id, data: updatedCurrentTodo}));
    };
    const deleteTodoHandler = (id: string) => {
        dispatch(deleteTodo(id));
    };
    const doubleClickHandler = () => {
        setVisible(false);
    };
    const editHandler = () => setVisible(true);
    const createNewTask = (value: string) => {
        console.log(3)
        if (value.trim()) {
            console.log(5)
            dispatch(
                createTask({
                    task_name: value,
                    taks_is_done: false,
                    tasks_todo_id: todo_id,
                })
            );
            dispatch(getTasks());
            setTask("");
            return;
        }
        console.log(6)
        setTaskError("task name can't be empty");
    };

    return (
        <Todo__Container $width="400px">
            <Todo__Container__Wrapper>
                <Todo__Label $width="400px">
                    <Button__Container $width="70%">
                        {visible ? (
                            <span
                                style={{color: "black", fontSize: "1.2em", fontWeight: "500"}}
                                onDoubleClick={doubleClickHandler}>
                                {todoName}
                            </span>
                        ) : (
                            <MainInput
                                todo={todoName}
                                setTodo={changeTodoName}
                                setError={setTaskError}
                                edit={editHandler}
                                editTodoHandler={editTodoHandler}
                                todo_id={todo_id}
                            />
                        )}
                    </Button__Container>
                    <Button icon={editBtn} onClick={doubleClickHandler} />
                    <Button icon={closeBtn} onClick={() => deleteTodoHandler(todo_id)} tooltip="delete todo" />
                </Todo__Label>

                <Button__Container $width="400px">
                    <div>
                        <MainInput
                            placeholder="new task"
                            todo={task}
                            setTodo={setTask}
                            setError={setTaskError}
                            id="taskInput"
                            editTodoHandler={(id, value)=>createNewTask(value)}
                            todo_id={todo_id}
                        />
                        <Task__Error__Wrapper>{taskError}</Task__Error__Wrapper>
                    </div>
                    <Button icon={addBtn} onClick={() => createNewTask(task)} tooltip="create task" />
                </Button__Container>

                <Task__Container>{mappedTasks}</Task__Container>
            </Todo__Container__Wrapper>
        </Todo__Container>
    );
}
