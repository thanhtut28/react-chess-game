import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import pawns from "./pawnsSlice";
import game from "./boardSlice";

const store = configureStore({
   reducer: {
      pawns,
      game,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
