import {AppDispatch} from "../../../store/store";
import {createTodo} from "../todosReducer";

type TodoType = {
    todo: string;
    setTodo: (value: string) => void;
    setError: (value: string) => void;
    dispatch: AppDispatch;
};

export function createTodoHandler({todo, setTodo, setError, dispatch}: TodoType) {
    const newTodo = {
        todo_name: todo,
        todo_filter: "all",
    };
    if (todo.trim()) {
        dispatch(createTodo(newTodo));
        setTodo("");
        return;
    }
    if (todo) {
        setError("");
    }
    setTodo("");
    setError("todo name can't be empty");
}
