import {combineReducers, createStore} from "redux";
import {homeWorkReducer} from "./homeWorkReducer";


const rootReducer = combineReducers({
    task: homeWorkReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store