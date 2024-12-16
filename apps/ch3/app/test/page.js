"use client";

import React, { useRef } from "react";

const FullScreenComponent = () => {
  const elementRef = useRef(null);

  // 전체모드로 전환
  const enterFullScreen = () => {
    if (elementRef.current.requestFullscreen) {
      elementRef.current.requestFullscreen();
    } else if (elementRef.current.webkitRequestFullscreen) {
      elementRef.current.webkitRequestFullscreen();
    } else if (elementRef.current.msRequestFullscreen) {
      elementRef.current.msRequestFullscreen();
    }
  };

  // 전체모드 해제
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>전체 모드로 전환 가능!</h2>
      </div>
      <button onClick={enterFullScreen}>전체 모드로 보기</button>
      <button onClick={exitFullScreen}>전체 모드 해제</button>
    </div>
  );
};

export default FullScreenComponent;
