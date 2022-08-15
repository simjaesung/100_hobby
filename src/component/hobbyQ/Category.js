import React from 'react';
import styles from './Category.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { add_select } from '../../store';
import { useDispatch, useSelector} from 'react-redux/es/exports';

const Category = () => {
    const navigate = useNavigate();
    let [score1] = useState(["스포츠","예술","기타","랜덤추천"]);

    let a = useSelector((state)=>{return state.select});
    let dispatch = useDispatch();

    const nextQ = (num)=>{
        dispatch(add_select(score1[num]));
        // setTimeout(()=>{ console.log("카테고리분류:",score1[num]);}, 1000)
        
        navigate('/hobbyQ/2');
        // setTimeout(()=>{ console.log("카테고리 입력 후 redux값은: ",a)}, 500);
    }

    return (
        <div className={styles.container} style={{backgroundColor:"#e1f5fe"}}>
            <div className={styles.top}>
                어떤 카테고리의 취미를 <br/>
                추천받고 싶으세요?
            </div>
            <div className={styles.btn_container}>
                <div className={styles.btns}>
                    <div></div>
                    <div className={styles.btn} onClick={()=>{nextQ(0);}}>스포츠</div>
                    <div/>
                    <div className={styles.btn} onClick={()=>{nextQ(1);}}>예술</div>
                    <div/>
                </div>
                <div className={styles.btns}>
                    <div/>
                    <div className={styles.btn} onClick={()=>{nextQ(2);}}>기타</div>
                    <div/>
                    <div className={styles.btn} onClick={()=>{nextQ(3);}}>랜덤추천</div>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default Category;