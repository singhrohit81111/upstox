import { createStore } from "redux";
import { combinedReducers } from "./CombinedReducers";

export const store =createStore(combinedReducers);