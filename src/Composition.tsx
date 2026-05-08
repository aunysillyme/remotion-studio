import { Series } from "remotion";
import { Slide, SlideKind } from "./Slide";

export type SlideData = {
  kind: SlideKind;
  eyebrow?: string;
  title: string;
  body?: string;
  handle?: string;
};

export const SLIDE_DURATION = 90; // 3s @ 30fps
export const SLIDE_COUNT = 5;

export const DEFAULT_SLIDES: SlideData[] = [
  {
    kind: "hook",
    eyebrow: "Hook",
    title: "Most creators get this wrong",
  },
  {
    kind: "content",
    eyebrow: "01",
    title: "Stop chasing trends",
    body: "The algorithm rewards consistency more than novelty. Pick a lane and own it.",
  },
  {
    kind: "content",
    eyebrow: "02",
    title: "Hook in 3 seconds",
    body: "If the first frame doesn't earn the second, nothing else matters.",
  },
  {
    kind: "content",
    eyebrow: "03",
    title: "Post, then iterate",
    body: "Don't polish to perfection. Ship, watch the data, and adjust the next one.",
  },
  {
    kind: "cta",
    eyebrow: "Save this",
    title: "Want more?",
    body: "Daily breakdowns on building an audience that actually sticks.",
    handle: "Follow @AunySillyMe",
  },
];

export const TikTokSlideshow: React.FC<{ slides: SlideData[] }> = ({ slides }) => {
  return (
    <Series>
      {slides.map((slide, i) => (
        <Series.Sequence key={i} durationInFrames={SLIDE_DURATION}>
          <Slide
            kind={slide.kind}
            index={i}
            total={slides.length}
            eyebrow={slide.eyebrow}
            title={slide.title}
            body={slide.body}
            handle={slide.handle}
          />
        </Series.Sequence>
      ))}
    </Series>
  );
};
