import  { useRef, useState } from "react";
import vid from "./assets/video4.mp4";
const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        style={{ height: "100%", width: "100%" }}
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={vid}
      ></video>
    </div>
  );
};

export default Video;
