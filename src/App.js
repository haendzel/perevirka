import "./App.css";
import React, { useRef, useState, useCallback, useEffect } from "react";
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
  const aboutUsNodeAsDefault = {
    id: "First item",
    group: 1,
    visible: true,
    organization: false,
    tags: ["example"],
    size: "Example",
    founders: "Example Example",
    locations: ["Kraków"],
    urls: [
      { title: "Discord", url: "https://google.com" },
      { title: "WWW", url: "https://google.com" },
      { title: "Instagram", url: "https://google.com" },
    ],
    founded_date: "Autumn 2022",
  };
  const [activeNode, setActiveNode] = useState(aboutUsNodeAsDefault);
  let threeNodes = [];

  const colorForLinks = () => {
    return "#F9F9F9";
  };

  const handleClick = useCallback(
    (node) => {
      if (node?.id) {
        const activeButtons = document.querySelectorAll(".menu-item.active");

        activeButtons.forEach((btn) => {
          btn.classList.remove("active");
        });

        const distance = 70;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        setActiveNode(node);
        console.log(node);
        if (fgRef.current) {
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
      } else {
        let activeNodeFromDOM =
          document.querySelector(".menu-item.active").dataset.node;
        console.log(activeNodeFromDOM);
        console.log(threeNodes);
        if (activeNodeFromDOM !== null) {
          var items = threeNodes.filter(
            (item) => item.id === activeNodeFromDOM
          );
          var item = items[0];
          console.log(item);
          const distance = 70;
          const distRatio = 1 + distance / Math.hypot(item.x, item.y, item.z);
          if (fgRef.current) {
            fgRef.current.cameraPosition(
              {
                x: item.x * distRatio,
                y: item.y * distRatio,
                z: item.z * distRatio,
              },
              item,
              3000
            );
          }
        }
      }
    },
    [fgRef]
  );

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledSideFrame left={true} right={false} />
      <SideMenu
        activeNode={activeNode}
        changeMenuNode={(menuNode) => setActiveNode(menuNode)}
        handleClick={handleClick}
      />
      <ForceGraph3D
        //width={window.innerWidth - 250}
        ref={fgRef}
        distance={100}
        forceEngine={"d3"}
        dagLevelDistance={10}
        width={window.innerWidth}
        jsonUrl="https://haendzel.github.io/perevirka/miserables.json"
        nodeAutoColorBy="group"
        backgroundColor="#000"
        linkColor={colorForLinks}
        onNodeClick={handleClick}
        showNavInfo={false}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(node.id);
          sprite.color = "#000";
          sprite.fontFace = "Inter";
          sprite.fontWeight = "500";
          sprite.textHeight = 6;

          if (node.city) {
            sprite.color = "#E0E0E0";
          } else if (node.organization) {
            threeNodes.push(node);
            sprite.color = "#FE6C2D";
          } else {
            sprite.color = "#808080";
          }

          return sprite;
        }}
      />
      <StyledSideFrame right={true} left={false} />
      <Footer />
    </>
  );
}

export default App;
