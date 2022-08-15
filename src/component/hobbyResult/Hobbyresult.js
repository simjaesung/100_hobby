import React from 'react';
import styles from '../hobbyResult/Hobbyresult.module.css';
import { useEffect,useState } from 'react';
import resultdata from '../../Hobbypicter.js';

import Loading2 from '../Loading/Loading2';
import { useSelector } from 'react-redux/es/exports';
import {RiKakaoTalkFill, RiTwitterFill, RiInstagramLine} from "react-icons/ri";

const Hobbyresult = () => {
    let [loading,setLoading] = useState(true);
    // let [result_data] = useState(resultdata);
    let [postdata,successPost] = useState(false);
    let [hobby,setHobby] = useState("");;

    let a = useSelector((state)=>{return state.select})

    useEffect(()=>{
        //'http://127.0.0.1:8000/create/'
        fetch('http://localhost:3001/test', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                MBTI : a[0].payload,
                category : a[1].payload,
                people_number: a[2].payload,
                inout : a[3].payload,
                weather: a[4].payload
            })
            })
            .then( res => res.json())
            .then( res => {
            if (res.success) {
                successPost(true);
            }
            })
        // setTimeout(()=>{setLoading(false); }, 2000);
    },[])

    useEffect(()=>{
        //fetch get 받아오면 됨
        setHobby("농구");
        if(setHobby !== ""){
            setTimeout(()=>{setLoading(false); }, 500);
        }

    },[postdata])

    let pic =resultdata.find(function(x){
        return x.name === hobby});

    return (
        
        <div className={styles.container}>
            {   
                loading ?  <Loading2/> : 
                <>
                <div className={styles.top}>
                    <div className={styles.top1}>
                        너의 취미는 ...
                    </div>
                    <div className={styles.top2}>
                        <img src = {pic.url} /> 
                    </div>
                    <div className={styles.top3}>
                       {hobby} 어떠세요 ?
                    </div>
                </div>
                <div className={styles.middle}>
                        <div className={styles.test_shre}>
                            결과 저장하기
                        </div>
                        <div className={styles.test_shre}>
                            다시하기
                        </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottom1}>
                        공유하기
                    </div>
                    <div className={styles.bottom2}>
                        <div className={styles.bottom_icon}>
                        <RiKakaoTalkFill size="45"/>
                        </div>
                        <div className={styles.bottom_icon}>
                        <RiTwitterFill size="45"/>
                        </div>
                        <div className={styles.bottom_icon}>
                        <RiInstagramLine size="45"/>
                        </div>
                    </div>
    
                </div>
                </>
                
            }


        </div>
        
    );
};

export default Hobbyresult;