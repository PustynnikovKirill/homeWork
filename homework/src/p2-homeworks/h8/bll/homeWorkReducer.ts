import {UserType} from "../HW8";
import React from 'react'


export const initialState: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'UP': {
                const newState = [...state].sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })
                return action.payload === 'UP' ? newState : newState.reverse()
            }
        case 'DOWN': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                }
                if (a.name < b.name) {
                    return 1
                }
                return 0
            })
            return action.payload === 'DOWN' ? newState.reverse() : newState

        }
        default:
            return state
    }
}
export type ActionType = filteredPeopleAgeType | filteredUPPeopleAgeACType
export type filteredPeopleAgeType = ReturnType<typeof filteredUpPeopleAgeAC>
export const filteredUpPeopleAgeAC = () => {
    return {
        type: 'UP',
        payload: {}
    } as const
}
export type filteredUPPeopleAgeACType = ReturnType<typeof filteredDownPeopleAgeAC>
export const filteredDownPeopleAgeAC = () => {
    return {
        type: 'DOWN',
        payload: {}
    } as const
}



