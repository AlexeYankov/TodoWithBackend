import {CreateTodoType, TodoType} from "./apiTypes";
import { instance } from "./baseUrl";

const todosUrl = "todos/";

type TodosType = {
    id: string
    data: CreateTodoType
}

const todosApi = {
    getTodos() {
        return instance.get<TodoType[]>(todosUrl);
    },
    createTodo(data: CreateTodoType) {
        return instance.post<TodoType[]>(todosUrl, data);
    },
    deleteTodo(id: string) {
        return instance.delete(todosUrl + id);
    },
    updateTodo({id, data}: TodosType) {
        console.log(data)
        return instance.put<TodoType[]>(todosUrl + id, data);
    },
};

export default todosApi;