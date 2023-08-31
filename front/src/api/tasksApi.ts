import {CreateTaksType, TaskType} from "./apiTypes";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/",
});

const tasksUrl = "tasks/"

const tasksApi = {
    getTasks: () => {
        return instance.get<TaskType[]>(tasksUrl);
    },
    createTasks: (data: CreateTaksType) => {
        return instance.post<TaskType[]>(tasksUrl, data);
    },
    deleteTasks: (id: string) => {
        return instance.delete(tasksUrl + id);
    },
    updateTasks: (id: string, data: CreateTaksType) => {
        return instance.put<TaskType[]>(tasksUrl + id, data);
    },
};

export default tasksApi;
