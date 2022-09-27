import "./App.css";
import React, { useRef, useState, useCallback } from "react";
import { GlobalStyle } from "./theme/mainTheme";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//import FocusGraph from "./components/FocusGraph/FocusGraph";
import { StyledSideFrame } from "./components/SideFrame/SideFrame.styled";
import SideMenu from "./components/SideMenu/SideMenu";
import SpriteText from "three-spritetext";
import { ForceGraph3D } from "react-force-graph";

function App() {
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
    <>
      <GlobalStyle />
      <Header />
      <StyledSideFrame left={true} right={false} />
      <ForceGraph3D
        //width={window.innerWidth - 250}
        ref={fgRef}
        width={window.innerWidth}
        //graphData={nodes}
        jsonUrl="./miserables.json"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(node.id);
          sprite.color = node.color;
          sprite.fontFace = "Inter";
          sprite.textHeight = 6;
          return sprite;
        }}
      />
      <SideMenu activeNode={activeNode} />
      <StyledSideFrame right={true} left={false} />
      <Footer />
    </>
  );
}

export default App;
