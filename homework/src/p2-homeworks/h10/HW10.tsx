import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, loadingAC, loadingACType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import preloader from './bll/image/Spinner-1s-200px (2).svg'

function HW10() {

    let dispatch = useDispatch()
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType,boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        // dispatch
        setTimeout(()=> {
            dispatch(loadingAC(false))
        },2000)
        // setTimeout
        // console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
