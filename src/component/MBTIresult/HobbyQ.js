import React from 'react';
import styles from './HobbyQ.module.css';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useLocation } from "react-router"
import ProgressBar from 'react-bootstrap/ProgressBar';

import { add_select } from '../../store';

import Loading from '../Loading/Loading';
import People from '../hobbyQ/People';
import Inout from '../hobbyQ/Inout';
import Weather from '../hobbyQ/Weather';
import Category from '../hobbyQ/Category';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import axios from 'axios';

const HobbyQ = () => {
    
    const { state } = useLocation();
    let {id} = useParams();
    let [progress,setProgress] = useState(parseInt(((parseInt(id)) / 12)*100))
    let [loading,setLoading] = useState(true);

    let a = useSelector((state) => { return state.select } )
    let dispatch = useDispatch();
    let [topost,setTopost] = useState(state);
    // console.log("redux값은:",a);
    // console.log("a는",a);
    // dispatch(set_select(state));
    // console.log("넘어온값은?"+state);

    //로딩표시
    useEffect(()=>{
        setProgress(parseInt(((parseInt(id)) / 4)*100))
        if(id ==='1'){
            setTimeout(()=>{setLoading(false); }, 2000);
        }
        else{
            setLoading(false)
        }
    },[id])

    useEffect(()=>{
        console.log("현재 redux값은:",a);
        if(id === '4'){
            
        }

    },[a])
    
    useEffect(()=>{
        if(id ==='1'){
            dispatch(add_select(state)); 
        }
        
        
    },[])
    return (
        <div className={styles.result_container}>
            {   
                loading ?  <Loading/> : 
                <div className={styles.result_container}>
                    <div >
                        <BasicExample progress={progress}/>
                    </div>
                   <Hobbyquestion id={id}/>
                </div>
            }
        </div>
    );
};
function BasicExample(props) {
    return <ProgressBar variant="info" now={props.progress} />;
  }

function Hobbyquestion(props){
    switch(props.id){
        case '1' :
            return <Category/>
        case '2' :
            return <People/>
        case '3' :
            return <Inout/>
        case '4' :
            return <Weather/>
        default :
            return null
    }
}
export default HobbyQ;