import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styles from './Loading.module.css'

function Loading() {
  return (
    <>
    <div className={styles.loading_comment_top}>
      거의 다 왔어요 !
      </div>
    <div className={styles.loading_container}>
      <div className={styles.loading}>
        <BeatLoader
          color="#2DAAE2"
          size = {20}
          margin={5}
          speedMultiplier={1}/>
          {/* <p style={{paddingTop:"20px", fontSize:"0.7em"}}>mbti 분석중</p> */}
        
      </div>
    </div>
    <div className={styles.loading_comment_bottom}>
      <h3>더 꼭 맞는 추천을 위해</h3>
      <h3>몇 가지만 더 물어볼게요 !</h3>
    </div>
    </>
  );
}

export default Loading;