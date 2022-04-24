import React from 'react'
import style from './Message.module.css'

export  type propsMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: propsMessageType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={'avatar'} className={style.avatar}/>
            <div className={style.angle}/>
                <div className={style.angle}>
                    {props.name}
                    {props.message}
                    {props.time}
                </div>
        </div>
    )
}

export default Message
