import React from "react";
import useWindowSize from "@/hooks/useWindowSize";
import useMousePosition from "@/hooks/useTrackMouseMove";
import useUpdateMouseMove from "@/hooks/useUpdateMouseMove";
import PointerContainer from "@/components/home/PointerContainer";
function Canvas() {
  const { width, height } = useWindowSize();
  useMousePosition();
  useUpdateMouseMove();

  return (
    <>
      <canvas
        id="myCanvas"
        width={width}
        height={height}
        style={{ border: "1px solid #000000" }}
      ></canvas>
      <div
        style={{
          position: "absolute",
          top: "0",
          width: `${width}px`,
          height: `${height}px`,

          zIndex: 2,
        }}
      >
        <PointerContainer />
      </div>
    </>
  );
}

export default Canvas;
