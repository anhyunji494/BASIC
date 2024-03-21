/*eslint-disable*/

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "광주 데이트 장소",
  ]);
  let [엄지, 엄지변경] = useState(0);
  let posts = "강남 고기 맛집";

  function 글제목수정() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      

      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              엄지변경(엄지 + 1);
            }}
          >
            👍
          </span>
          {엄지}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>


      {/* 상세페이지 모달창 */}

      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>



    </div>
  );
}

export default App;
