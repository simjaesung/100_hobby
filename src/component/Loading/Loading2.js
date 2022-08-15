import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styles from './Loading.module.css'

function Loading2() {
  return (
    <>
    {/* <div className={styles.loading_comment_top}>
      거의 다 왔어요 !
      </div> */}
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
    <div className={styles.loading_comment_bottom2}>
      <h3>분석 중 이에요 !</h3>
    </div>
    </>
  );
}

export default Loading2;