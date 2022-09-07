import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import {Provider} from "react-redux";
import {store} from "../../h8/bll/state";
import HW9 from "../../h9/HW9";


export const Junior = () => {
    return (
        <div>
            <HW7/>
            <Provider store={store}>
                <HW8/>
                <HW9/>
            </Provider>

        </div>
    )
}

