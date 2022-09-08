
export type InitStateType = {
    isLoading:boolean
}
const initState = {
    isLoading:false
}

export type LoadingReducerType = loadingACType
export const loadingReducer = (state = initState, action: LoadingReducerType): InitStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading:action.isLoading}
        }
        default: return state
    }
}
export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading:boolean) => {
    return {
        type: "LOADING",
        isLoading,
    } as const
}
 // fix any