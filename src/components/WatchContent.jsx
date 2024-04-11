import { useRef, useState } from "react";
import { WatchContainer } from "../styled-components/homePage/HomeStyles";
import { BiSolidRightArrow } from "react-icons/bi";
import { CiPause1 } from "react-icons/ci";

export const WatchContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <WatchContainer>
      <h1>Watch Our Memorable Trips</h1>
      <video
        ref={videoRef}
        src="https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>

      {!isPlaying ? (
        <button onClick={togglePlay}>
          <BiSolidRightArrow
            style={{ width: "74px", height: "66px", color: "white" }}
          />
        </button>
      ) : (
        <button onClick={togglePlay}>
          <CiPause1 style={{ width: "74px", height: "66px", color: "white" }} />
        </button>
      )}
    </WatchContainer>
  );
};
