import React from 'react';
import styles from './Qbar.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { add_select } from '../../store';
import { useDispatch, useSelector} from 'react-redux/es/exports';
const People = () => {
    const navigate = useNavigate();
    let [score2, setScore2] = useState(50);
    let a = useSelector((state)=>{return state.select});
    let dispatch = useDispatch();
    return (
        <div className={styles.container} style={{backgroundColor:"#e1f5fe"}}>
            <div className={styles.top}>
                함께하는 인원은<br/>
                얼마나 되었으면<br/>
                좋겠나요?<br/><br/>
                <p className={styles.top_bottom}>원을 움직여서 선택해주세요!</p>
            </div>
            
            <div className={styles.bar}>
                <Box sx={{ width:"75%" }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={50}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={100}
                    onChange={(e)=>{setScore2(e.target.value);}}
                />
                </Box>
                <br/>
                
            </div>
            <div className={styles.bar_comment}>
                <div>혼자</div>
                <div>상관없음</div>
                <div>같이</div>
            </div>
            <div className={styles.next_btn}>
                <div className={styles.btn} onClick={()=>{
                    dispatch(add_select("사람 수: "+score2));
                    navigate('/hobbyQ/3');
                }}>다음👉</div>
            </div>
        </div>
    );
};

function valuetext(value) {
    return `${value}°C`;
  }
  

export default People;