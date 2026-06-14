import { Composition } from "remotion";
import { AmbientProfile } from "./ambient-profile";

export const RemotionRoot = () => {
  return (
    <Composition
      id="PortfolioAmbient"
      component={AmbientProfile}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1350}
    />
  );
};
