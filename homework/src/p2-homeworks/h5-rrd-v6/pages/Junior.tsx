import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import {Provider} from "react-redux";
import {store} from "../../h8/bll/state";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import stores from "../../h10/bll/store";


export const Junior = () => {
    return (
        <div>
            <HW7/>
            <Provider store={store} >
                <HW8/>
            </Provider>
                <HW9/>
                <Provider store={stores}>
                    <HW10/>
                </Provider>



        </div>
    )
}

