import React from 'react';
import styles from '../MBTIstart/MBTIstart.module.css';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
const MBTIsrart = () => {
    let [fade,setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{setFade('')}
        },[])

    return (
        <>
        <div className={styles.container}>
            <div className={styles.top}>
                <img src="/언중칼슘.png" /> 
            </div>
            <div className={styles.middle}>
                <div>
                
                <h1 className={styles.middle_top}>백취미 테스트</h1>
                <div className={styles.middle_bottom}>
                나에게 어울리는 취미는 무엇일까?<br/>
                백 가지 취미 중에서 추천받아 보자!
                </div>
                </div>
                
            </div>
            <div className={styles.bottom}>
                <Link to="/mbti-test/1" style={{textDecoration:"none"}}>
                    <div className={styles.test_start}>
                        시작하기 !
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default MBTIsrart;