import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    id: string// need to fix any         //объект пользователя
    name: string // need to fix any
}

// уровень работы с глобальными данными              ГЛОБАЛЬНЫЙ УРОВЕНЬ
function HW3() {
    const [users, setUsers] = useState <UserType[]>([]) // need to fix any  //массив этих имен

    const addUserCallback = (name: string) => {// need to fix any   и когда в name придет имя, мы создадим массив и засунем его туда ..добавить v1
            const user = {
                _id: v1(),
                name:name,
            }
        setUsers([...users, user]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
