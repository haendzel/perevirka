import React, { useRef, useCallback, useState, useEffect } from "react";
import SpriteText from "three-spritetext";
import { ForceGraph3D } from "react-force-graph";
import axios from "axios";

const FocusGraph = () => {
  const fgRef = useRef();
  const [activeNode, setActiveNode] = useState(null);

  const handleClick = useCallback(
    (node) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      setActiveNode(node);
      console.log(activeNode);
      if (fgRef.current) {
        console.log(fgRef.current);
        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          3000
        );
      }
    },
    [fgRef]
  );

  return (
    <ForceGraph3D
      //width={window.innerWidth - 250}
      ref={fgRef}
      width={window.innerWidth - 250}
      //graphData={nodes}
      jsonUrl="./miserables.json"
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

export default FocusGraph;
