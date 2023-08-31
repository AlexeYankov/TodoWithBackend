import React, {ChangeEvent, useState} from "react";
import {Todo__Input__Container, Todo__Input} from "./MainInput.styles";

export type InputType = {
    setTodo: (value: string) => void;
    setError: (value: string) => void;
    todo: string;
    placeholder?: string;
    edit?: () => void;
    id?: string;
    todo_id?: string;
    editTodoHandler?: (id: string, value: string) => void;
};
export default function MainInput({
    setTodo,
    todo,
    setError,
    placeholder,
    edit,
    id,
    editTodoHandler,
    todo_id,
}: InputType) {
    const [currentState, setCurrentState] = useState(todo);
    const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (id === "mainInput") {
            setTodo(e.currentTarget.value);
            setCurrentState(e.currentTarget.value);
            setError("");
            return;
        } else if (id === "taskInput") {
            setTodo(e.currentTarget.value);
            setCurrentState(e.currentTarget.value);
            setError("");
            return;
        } else {
            setCurrentState(e.currentTarget.value);
            setError("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("pressed")
        if (currentState.trim()) {
            console.log("pressed1")
            if (e.key === "Enter") {
                console.log("pressed2")
                setCurrentState(e.currentTarget.value);
                setTodo(e.currentTarget.value);
                console.log(todo_id, editTodoHandler)
                todo_id && editTodoHandler && editTodoHandler(todo_id, e.currentTarget.value);
                edit && edit();
                return;
            }
        }
        if (e.key === "Enter") {
            console.log("pressed3")
            setError("task name can't be empty");
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Escape") {
            edit && edit();
            setTodo(todo);
            setError("");
        }
        return;
    };

    const onBlurHandler = () => {
        edit && edit();
        setTodo(todo);
        setError("");
    };
    return (
        <Todo__Input__Container>
            <Todo__Input
                type="text"
                placeholder={placeholder}
                value={id === "mainInput" || id === "taskInput" ? todo : currentState}
                onChange={valueHandler}
                onKeyPress={handleKeyPress}
                onKeyUp={handleKeyUp}
                onBlur={onBlurHandler}
                id={id}
                autoFocus={id === "mainInput" ? false : true}
            />
        </Todo__Input__Container>
    );
}
