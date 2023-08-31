import thunkMiddleware from "redux-thunk";
import {appReducer} from "../app/appReducer";
import {tasksReducer} from "../features/tasks/tasksReducer";
import { todosReducer } from "../features/todos/todosReducer";

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    app: appReducer,
    todos: todosReducer,
    tasks: tasksReducer
});

export const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)});

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()