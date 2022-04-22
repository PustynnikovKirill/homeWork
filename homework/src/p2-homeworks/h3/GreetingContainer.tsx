import React, {ChangeEvent, useState,KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any                описывае сто приходит с HW3
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any    //здесь храним значение INPUT
    const [error, setError] = useState<string>('') // need to fix any   // хронилище для ошибки

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = event.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName(' ')
            setError('name is require')
        }                                                                        // need to fix any    // делаем проверку, и если имя норм то в верхний сейт, если ошибка то в нижний
        setName(event.currentTarget.value) // need to fix
    }
    const addUser = () => {
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setName('')// need to fix         // который пойдет на кнопку   6.20 мин
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && name){
                addUser()
            }
    }
    const totalUsers = users.length // need to fix       // сколь имен в массиве

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter = {onEnter}
        />
    )
}

export default GreetingContainer
