import React from 'react';
import s from './Main.module.css'
import st from './../common/style/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={st.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Begin Sergey</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

