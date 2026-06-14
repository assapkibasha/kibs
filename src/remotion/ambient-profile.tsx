import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const AmbientProfile = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 6 * fps], [1.06, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const sweepX = interpolate(frame, [0, 6 * fps], [-280, 960], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.37, 0, 0.2, 1),
  });

  const panelY = spring({
    fps,
    frame,
    config: {
      damping: 200,
      stiffness: 90,
      mass: 0.9,
    },
  });

  const orbit = interpolate(frame, [0, 6 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 32%), radial-gradient(circle at 80% 18%, rgba(214,160,103,0.24), transparent 22%), #090909",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          opacity: 0.32,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), transparent 26%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 90,
          left: sweepX,
          width: 260,
          height: 1200,
          transform: "rotate(18deg)",
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.22), transparent)",
          filter: "blur(34px)",
          opacity: 0.46,
        }}
      />

      {[0, 1, 2].map((index) => {
        const x = 110 + index * 260 + Math.sin(orbit * Math.PI * 2 + index) * 32;
        const y = 160 + index * 120;
        const rotate = -6 + index * 4 + Math.sin(orbit * Math.PI * 2 + index) * 5;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 260,
              height: 148,
              borderRadius: 30,
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
              boxShadow: "0 22px 90px rgba(0,0,0,0.28)",
              backdropFilter: "blur(16px)",
              transform: `rotate(${rotate}deg) translateY(${(1 - panelY) * 20}px)`,
            }}
          />
        );
      })}

      <div
        style={{
          position: "absolute",
          inset: 48,
          borderRadius: 44,
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.42)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 8%, rgba(255,255,255,0.16), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.08), transparent 24%), linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.42))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${zoom}) translateY(${(1 - panelY) * 20}px)`,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Img
            src={staticFile("profile-ntsinzi.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.08) 44%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 44,
            right: 44,
            top: 44,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.78)",
            fontSize: 20,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          <span>Premium Motion</span>
          <span style={{ color: "rgba(255,255,255,0.52)" }}>NF</span>
        </div>

        <div
          style={{
            position: "absolute",
            left: 44,
            right: 44,
            bottom: 44,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "white",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                fontWeight: 600,
              }}
            >
              Ntsinzi
            </div>
            <div
              style={{
                fontSize: 88,
                lineHeight: 0.9,
                letterSpacing: "-0.06em",
                fontWeight: 600,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Francois
            </div>
          </div>
          <div
            style={{
              maxWidth: 270,
              fontSize: 22,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Full stack systems, cinematic interfaces, and high-trust digital
            products.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
