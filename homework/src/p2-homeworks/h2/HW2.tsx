import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = {
    _id: number,
    name: string,
    priority: AffairType
}// need to fix any
export type AffairType = 'high' | 'low' | 'middle'// need to fix any
export type FilterType = 'all' | AffairType

// constants
const defaultAffairs: Array<AffairPriorityType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairPriorityType>, filter: FilterType): AffairPriorityType[]=> { // need to fix any
    if (filter === 'all') return affairs
    // else if (filter ==='high'){
    //     return affairs.filter(el=>el.priority !== 'high')
    // } else if (filter === 'low') {
    //     return affairs.filter(el=>el.priority !== 'low')
    // } else if (filter === 'middle') {
    //     return affairs.filter(el=>el.priority !== 'middle')
    // } else {
    //     return affairs
    // }
    else return  affairs.filter(el=>el.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairPriorityType>, _id: number): Array<AffairPriorityType> => { // need to fix any
    return affairs.filter(el=>el._id ===_id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
