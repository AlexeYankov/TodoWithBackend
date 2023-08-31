export type TodoType = {
    todo_user_id: string
    todo_id: string
    todo_name: string
    todo_filter: string
}
export type TaskType = {
    task_id: string
    tasks_todo_id: string
    tasks_user_id: string
    task_name: string
    task_is_done: string
}
export type CreateTodoType = {
    todo_name: string
    todo_filter: string
}
export type CreateTaksType = {
    task_name: string
    taks_is_done: boolean
    tasks_todo_id: string
}