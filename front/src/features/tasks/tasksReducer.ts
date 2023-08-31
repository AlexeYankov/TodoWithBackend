import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateTaksType, TaskType} from "../../api/apiTypes";
import {setAppStatusAC} from "../../app/appReducer";
import {handleServerNetworkError} from "../../utils/error-utils";
import {AxiosError} from "axios";
import tasksApi from "../../api/tasksApi";

const initialState: TaskType[] = [];

export const getTasks = createAsyncThunk("tasks/get", async (args, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await tasksApi
            .getTasks()
            .then((res) => {
                let tasks = res.data;
                console.log(tasks);
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));

                return {tasks};
            })
            .catch((error) => {
                thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
                handleServerNetworkError(error, thunkAPI.dispatch);
                const tasks = [] as TaskType[];
                return {tasks};
            });
    } catch (e) {
        const err = e as Error | AxiosError<{error: string}>;
        handleServerNetworkError(err, thunkAPI.dispatch);
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
        const tasks = [] as TaskType[];
        return {tasks};
    }
});

export const createTask = createAsyncThunk("tasks/create", async (data: CreateTaksType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await tasksApi
            .createTasks(data)
            .then((res) => {
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                thunkAPI.dispatch(getTasks());
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

export const deleteTask = createAsyncThunk("tasks/delete", async (id: string, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
    try {
        return await tasksApi
            .deleteTasks(id)
            .then((res) => {
                thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                thunkAPI.dispatch(getTasks());
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

export const updateTask = createAsyncThunk(
    "tasks/update",
    async (params: {id: string; data: CreateTaksType}, thunkAPI) => {
        thunkAPI.dispatch(setAppStatusAC({status: "loading"}));
        try {
            return await tasksApi
                .updateTasks(params.id, params.data)
                .then((res) => {
                    thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}));
                    thunkAPI.dispatch(getTasks());
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
    name: "tasks",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                return (state = action.payload.tasks);
            })
            .addCase(createTask.fulfilled, (state, action) => {})
            .addCase(deleteTask.fulfilled, (state, action) => {})
            .addCase(updateTask.fulfilled, (state, action) => {});
    },
});

export const tasksReducer = slice.reducer;
