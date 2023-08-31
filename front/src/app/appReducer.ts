import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
};

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
export type InitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: RequestStatusType;
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null;
  // true когда приложение проинициализировалось (проверили юзера, настройки получили и т.д.)
  isInitialized: boolean;
};


const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppErrorAC: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setAppStatusAC: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status;
    },
    setAppInitializedAC: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isInitialized = action.payload.value;
    },
  },
});

export const { setAppErrorAC, setAppStatusAC, setAppInitializedAC } = slice.actions;

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export const appReducer = slice.reducer;