import React, {useState} from "react";
import {TaskType} from "../../api/apiTypes";
import {Task__Container, Task__Input__Wrapper, Task__Label, Task__Name__Error__Wrapper, Task__Name__Wrapper} from "./Task.styles";
import {closeBtn} from "../todos/Todo.styles";
import Button from "../common/Button";
import {useAppDispatch} from "../../store/store";
import {deleteTask, updateTask} from "./tasksReducer";
import MainInput from "../mainInput/MainInput";

type TaskComponentType = {
    task: TaskType;
};

export default function Task({task}: TaskComponentType) {
    const [checked1, setChecked] = useState(!!task.task_is_done);
    const [todoName, changeTaskName] = useState(task.task_name);
    const [visible, setVisible] = useState(true);
    const [taskError, setTaskError] = useState("");
    const dispatch = useAppDispatch();
    const deleteTaskHandler = (id: string) => {
        dispatch(deleteTask(id));
    };
    const doubleClickHandler = () => {
        setVisible(false);
    };
    const editHandler = () => setVisible(true);
    const editTaskHandler = (id: string, value: string) => {
        if (value.trim()) {
            const updatedCurrentTodo = {
                task_name: value,
                taks_is_done: checked1,
                tasks_todo_id: id
            };
            dispatch(updateTask({id, data: updatedCurrentTodo}));
            return
        }
        setTaskError("task name can't be empty");
    };
    return (
        <Task__Container $width="100%">
            {visible ? (
                <Task__Name__Wrapper $width="100%">
                    <Task__Label $isDone={checked1} onClick={doubleClickHandler}>
                        {task.task_name}
                    </Task__Label>
                    <input type="checkbox" checked={checked1} onChange={() => setChecked(!checked1)} />
                    {checked1 && (
                        <Button icon={closeBtn} onClick={() => deleteTaskHandler(task.task_id)} tooltip="create task" />
                    )}
                </Task__Name__Wrapper>
            ) : (
                <Task__Input__Wrapper $width="100%">
                    <MainInput
                        todo={todoName}
                        setTodo={changeTaskName}
                        setError={setTaskError}
                        edit={editHandler}
                        editTodoHandler={editTaskHandler}
                        todo_id={task.task_id}
                    />
                    <Task__Name__Error__Wrapper>{taskError}</Task__Name__Error__Wrapper>
                </Task__Input__Wrapper>
            )}
        </Task__Container>
    );
}
