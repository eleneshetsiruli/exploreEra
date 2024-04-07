import { WatchContainer } from "../styled-components/homePage/HomeStyles";

export const WatchContent = () => {
  return (
    <WatchContainer>
      <h1>Watch Our Memorable Trips</h1>
      <video
        controls
        src="https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4"
      ></video>
    </WatchContainer>
  );
};
