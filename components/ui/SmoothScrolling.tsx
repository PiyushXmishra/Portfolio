"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }:any) {
  return (
    //@ts-ignore
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;