import {combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
})
 const stores = createStore(reducers)

export default stores

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = stores // for dev
