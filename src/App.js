import "./App.css";
import React, { useState, useEffect } from "react";
import SpriteText from "three-spritetext";
import { ForceGraph3D } from "react-force-graph";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./theme/mainTheme";
import { StrictMode } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { StyledSideFrame } from "./components/SideFrame/SideFrame.styled";
import SideMenu from "./components/SideMenu/SideMenu";

const container = document.getElementById("map");
const root = createRoot(container);

const { useRef, useCallback } = React;

function App({ handleClick }) {
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    fetch("miserables.json")
      .then((res) => res.json())
      .then((data) => {
        const FocusGraph = () => {
          const fgRef = useRef();

          const handleClick = useCallback(
            (node) => {
              const distance = 60;
              const distRatio =
                1 + distance / Math.hypot(node.x, node.y, node.z);

              setActiveNode(node);

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
              width={window.innerWidth}
              graphData={data}
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

        root.render(
          <>
            <GlobalStyle />
            <Header />
            <StyledSideFrame left={true} right={false} />
            <FocusGraph />
            <SideMenu
              activeNode={activeNode}
              handleClick={() => handleClick()}
            />
            <StyledSideFrame right={true} left={false} />
            <Footer />
          </>,
          container
        );
      });
  }, []);
}

export default App;
