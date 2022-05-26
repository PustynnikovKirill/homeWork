import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[],
    setFilter:(filter:FilterType)=>void,
    deleteAffairCallback: (_id: number)=>void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')// need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    const onAll = style.button + ' ' + (props.filter === 'all'? style.active: ' ')
    const onHigh = style.button + ' ' + (props.filter === 'high'? style.active: ' ')
    const onMiddle = style.button + ' ' + (props.filter === 'middle'? style.active: ' ')
    const onLow = style.button + ' ' + (props.filter === 'low'? style.active: ' ')

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={onAll}>All</button>
            <button onClick={setHigh} className={onHigh}>High</button>
            <button onClick={setMiddle} className={onMiddle}>Middle</button>
            <button onClick={setLow} className={onLow}>Low</button>
        </div>
    )
}

export default Affairs
