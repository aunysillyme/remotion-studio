import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type SlideKind = "hook" | "content" | "cta";

type SlideProps = {
  kind: SlideKind;
  index: number;
  total: number;
  eyebrow?: string;
  title: string;
  body?: string;
  handle?: string;
};

export const Slide: React.FC<SlideProps> = ({ kind, index, total, eyebrow, title, body, handle }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleProgress = spring({
    frame: frame - 6,
    fps,
    config: { damping: 200, stiffness: 110, mass: 0.7 },
    durationInFrames: 30,
  });
  const bodyProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 200, stiffness: 110, mass: 0.7 },
    durationInFrames: 30,
  });
  const eyebrowProgress = spring({
    frame: frame,
    fps,
    config: { damping: 200, stiffness: 120, mass: 0.6 },
    durationInFrames: 24,
  });

  const exitStart = durationInFrames - 14;
  const exit = interpolate(frame, [exitStart, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const drift = (p: number) => `translateY(${(1 - p) * 32 + exit * -24}px)`;
  const fade = (p: number) => p * (1 - exit);

  const accent = "#FF6B35";

  return (
    <AbsoluteFill
      style={{ backgroundColor: "#0a0a0a", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* subtle radial vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,107,53,0.10), rgba(10,10,10,0) 60%)",
        }}
      />

      {/* top brand bar */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 80,
          right: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: fade(eyebrowProgress),
          transform: drift(eyebrowProgress),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: accent,
              boxShadow: `0 0 24px ${accent}`,
            }}
          />
          <span
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            @AunySillyMe
          </span>
        </div>
        <span style={{ color: "#777", fontSize: 28, fontWeight: 300, letterSpacing: 2 }}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* main content */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        {eyebrow && (
          <div
            style={{
              color: accent,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 32,
              opacity: fade(eyebrowProgress),
              transform: drift(eyebrowProgress),
            }}
          >
            {eyebrow}
          </div>
        )}

        <h1
          style={{
            color: "white",
            fontSize: kind === "hook" ? 140 : kind === "cta" ? 130 : 110,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            margin: 0,
            opacity: fade(titleProgress),
            transform: drift(titleProgress),
          }}
        >
          {title}
          {kind === "hook" && <span style={{ color: accent }}>.</span>}
        </h1>

        {body && (
          <p
            style={{
              color: "#cfcfcf",
              fontSize: 44,
              fontWeight: 300,
              lineHeight: 1.35,
              marginTop: 48,
              maxWidth: 880,
              opacity: fade(bodyProgress),
              transform: drift(bodyProgress),
            }}
          >
            {body}
          </p>
        )}

        {kind === "cta" && (
          <div
            style={{
              marginTop: 72,
              display: "flex",
              alignItems: "center",
              gap: 24,
              opacity: fade(bodyProgress),
              transform: drift(bodyProgress),
            }}
          >
            <div
              style={{
                padding: "28px 56px",
                backgroundColor: accent,
                color: "#0a0a0a",
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: 1,
                borderRadius: 999,
              }}
            >
              {handle ?? "Follow @AunySillyMe"}
            </div>
          </div>
        )}
      </AbsoluteFill>

      {/* bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 80,
          right: 80,
          height: 2,
          backgroundColor: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${interpolate(frame, [0, durationInFrames], [0, 100], {
              extrapolateRight: "clamp",
            })}%`,
            backgroundColor: accent,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 80,
          color: "#666",
          fontSize: 24,
          fontWeight: 300,
          letterSpacing: 3,
          textTransform: "uppercase",
          opacity: fade(eyebrowProgress),
        }}
      >
        {kind === "hook" ? "Swipe →" : kind === "cta" ? "Tap to follow" : "Keep swiping →"}
      </div>
    </AbsoluteFill>
  );
};
