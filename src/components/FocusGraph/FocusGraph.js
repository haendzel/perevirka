import React from "react";
import { createRoot } from "react-dom/client";
import SpriteText from "three-spritetext";
import { ForceGraph3D } from "react-force-graph";

const container = document.getElementById("map");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const { useRef, useCallback } = React;

const GraphMap = () => {
  fetch("miserables.json")
    .then((res) => res.json())
    .then((data) => {
      const FocusGraph = () => {
        const fgRef = useRef();

        const handleClick = useCallback(
          (node) => {
            // Aim at node from outside it
            const distance = 40;
            const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

            fgRef.current.cameraPosition(
              {
                x: node.x * distRatio,
                y: node.y * distRatio,
                z: node.z * distRatio,
              }, // new position
              node, // lookAt ({ x, y, z })
              3000 // ms transition duration
            );
          },
          [fgRef]
        );

        return (
          <ForceGraph3D
            ref={fgRef}
            graphData={data}
            nodeLabel="id"
            nodeAutoColorBy="group"
            onNodeClick={handleClick}
            nodeThreeObject={(node) => {
              const sprite = new SpriteText(node.id);
              sprite.color = node.color;
              sprite.textHeight = 6;
              return sprite;
            }}
          />
        );
      };
      root.render(<FocusGraph />, container);
    });
};

export default GraphMap;
