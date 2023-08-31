import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppStatusAC} from "../../app/appReducer";
import {handleServerNetworkError} from "../../utils/error-utils";
import todosApi from "../../api/todosApi";
import {CreateTodoType, TodoType} from "../../api/apiTypes";
import {AxiosError} from "axios";

const initialState: TodoType[] = [];

export const getTodos = createAsyncThunk("todos/get", async (args, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await todosApi
            .getTodos()
            .then((res) => {
                let todos = res.data;
                console.log(todos);
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));

                return {todos};
            })
            .catch((error) => {
                thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
                handleServerNetworkError(error, thunkAPI.dispatch);
                const todos = [] as TodoType[];
                return {todos};
            });
    } catch (e) {
        const err = e as Error | AxiosError<{error: string}>;
        handleServerNetworkError(err, thunkAPI.dispatch);
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
        const todos = [] as TodoType[];
        return {todos};
    }
});

export const createTodo = createAsyncThunk("todos/create", async (data: CreateTodoType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await todosApi
            .createTodo(data)
            .then((res) => {
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                thunkAPI.dispatch(getTodos());
                return "";
            })
            .catch((error) => {
                thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
                handleServerNetworkError(error, thunkAPI.dispatch);
                return "";
            });
    } catch (e) {
        const err = e as Error | AxiosError<{error: string}>;
        handleServerNetworkError(err, thunkAPI.dispatch);
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
        return "";
    }
});

export const deleteTodo = createAsyncThunk("todos/delete", async (id: string, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await todosApi
            .deleteTodo(id)
            .then((res) => {
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                thunkAPI.dispatch(getTodos());
                return "";
            })
            .catch((error) => {
                thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
                handleServerNetworkError(error, thunkAPI.dispatch);
                return "";
            });
    } catch (e) {
        const err = e as Error | AxiosError<{error: string}>;
        handleServerNetworkError(err, thunkAPI.dispatch);
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
        return "";
    }
});

export const updateTodo = createAsyncThunk(
    "todos/update",
    async (params: {id: string; data: CreateTodoType}, thunkAPI) => {
        thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
        try {
            return await todosApi
                .updateTodo(params)
                .then((res) => {
                    thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                    thunkAPI.dispatch(getTodos());
                    return "";
                })
                .catch((error) => {
                    thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
                    handleServerNetworkError(error, thunkAPI.dispatch);
                    return "";
                });
        } catch (e) {
            const err = e as Error | AxiosError<{error: string}>;
            handleServerNetworkError(err, thunkAPI.dispatch);
            thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
            return "";
        }
    }
);

const slice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                return (state = action.payload.todos);
            })
            .addCase(createTodo.fulfilled, (state, action) => {})
            .addCase(deleteTodo.fulfilled, (state, action) => {})
            .addCase(updateTodo.fulfilled, (state, action) => {});
    },
});

export const todosReducer = slice.reducer;
