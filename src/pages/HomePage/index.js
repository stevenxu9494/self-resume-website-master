
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.png") } />
            <h2>Chi(Steven) Xu</h2>
            <ul>
                <li>software engineer</li>
                <li>full-stack developer</li>
                <li>video designer</li>
            </ul>
            <p>I design applications, websites and interesting videoes . I love using technology in creative contexts.</p>
            <p>I am a freelancer based in Sydney, the Australia.</p>
            <p>Contact me at stevenxu9494@gmail.com</p>
        </section>  

        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of work</h3>
                <p>You can find more in the work overview.</p>
                <br />
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
