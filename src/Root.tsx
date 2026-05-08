import "./index.css";
import { Composition } from "remotion";
import {
  TikTokSlideshow,
  DEFAULT_SLIDES,
  SLIDE_DURATION,
  SLIDE_COUNT,
} from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TikTokSlideshow"
        component={TikTokSlideshow}
        durationInFrames={SLIDE_DURATION * SLIDE_COUNT}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ slides: DEFAULT_SLIDES }}
      />
    </>
  );
};
