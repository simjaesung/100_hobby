import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { AiOutlineArrowLeft, AiOutlineSearch, AiOutlineMenu, AiOutlinePlusSquare, AiOutlineSmile, AiOutlineSend } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { useSelector,useDispatch } from 'react-redux/es/exports';
// import { testing } from '../../store.js';

const MBTItest = (props) => {
    // let save_test = useSelector((state) => {return state})
    // let dispatch = useDispatch();
    let {id} = useParams();
    
    let [testing,setTesting] = useState("")
    let [progress,setProgress] = useState(parseInt(((parseInt(id)) / 12)*100))

    useEffect(()=>{
        if(id === '1'){setTesting("")}
        if(id == '0'){navigate('/mbti-test/1')}
    },[])

    useEffect(()=>{
        if(id == '0'){navigate('/mbti-test/1')}
        //상태바 useState
        setProgress(parseInt(((parseInt(id)) / 12)*100))

        //뒤로가기누른만큼 이전기록 삭제?
        setTesting(testing.substring(0,parseInt(id)-1))
        // setTimeout(()=>{ console.log("뒤로가기해도 먹히나",testing) }, 1000)
        
    },[id])

    useEffect(()=>{
        //다음 검사 질문
        nextQ()
    },[testing])

    //페이지 이동 params +1
    const navigate = useNavigate();
    const nextQ = ()=>{
        // console.log("!!",a);// dispatch(testing())
        if(id === '12'){
            let count = {'E':0,'I':0,'S':0,'N':0,'T':0,'F':0,'P':0,'J':0};
            for(let i = 0; i < 12; i++){count[testing[i]] += 1;}
            let mbti = count['E'] > count['I'] ? 'E' : 'I';
            mbti = count['S'] > count['N'] ? mbti+'S' : mbti+'N';
            mbti = count['T'] > count['F'] ? mbti+'T' : mbti+'F';
            mbti = count['P'] > count['J'] ? mbti+'P' : mbti+'J';

            setTimeout(()=>{ navigate('/hobbyQ/1' ,{state : mbti}) }, 1000)
        }
         else{
            navigate('/mbti-test/'+(parseInt(id)+1))
        }
    }

    //샤라랑 효과
    let [fade,setFade2] = useState('');

    useEffect(()=>{
        setTimeout(()=>{ setFade2('end') }, 100)
        return ()=>{setFade2('')}
        },[id])

    //id로 질문 객체 얻어오기
    let Q_id = props.MBTIq.find(function(x){
        return x.id == id});

    return (
        <div>
            <div className="test-container">
                <div className='test-kakao'>
                    <div className='kakao-top'>
                        <div className='top-item'>
                            <AiOutlineArrowLeft style={{cursor: "pointer"}} 
                            onClick={()=>{navigate('/mbti-test/'+(parseInt(id)-1))}}/>
                        </div>
                        <div className={"top-item start " +fade} style={{fontSize : "0.7em"}}>백치</div>
                        <div className='top-item'><AiOutlineSearch/></div>
                        <div className='top-item'><AiOutlineMenu/></div>
                    </div>
                    <div className={'kakao-middle start '+fade}>
                        <div className='middle-item'>
                            <div></div>
                            <div className='middle-item-left'>
                                <div className='middle-item-img'>
                                    <img src="/개구리.png" /> 
                                </div>
                            </div>
                            <div></div>
                            <div className='middle-item-right'>
                                <div className='middle-item-name'>
                                    백치
                                </div>
                                <div className='middle-item-Q'>
                                    <div>{Q_id.q}</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='kakao-bottom'>
                        <div className='bottom-item'><AiOutlinePlusSquare/></div>
                        <div className='bottom-item'></div>
                        <div className='bottom-item'><BiHash/></div>
                        <div className='bottom-item'><AiOutlineSmile/></div>
                        <div className='bottom-item'>
                            <AiOutlineSend/>
                            {/* <div className='bottom-item-post'>전송</div> */}
                        </div>
                    </div>
                </div>
                <div className='test'>
                    <div className='Q1'>
                        
                        <div className={"test-text start "+fade} onClick={()=>{setTesting(testing+Q_id.answer[0].type);}}>
                            {Q_id.answer[0].answer1}
                        </div>
                    </div>
                    <div className='Q2'>
                        <div className={"test-text start "+fade} onClick={()=>{setTesting(testing+Q_id.answer[1].type);}}>
                            {Q_id.answer[1].answer2}
                        </div>
                        
                    </div>
                    <div className='bar'>
                        <BasicExample progress={progress}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


function BasicExample(props) {
    return <ProgressBar variant="info" now={props.progress} />;
  }

export default MBTItest;