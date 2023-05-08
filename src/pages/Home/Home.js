import "../../App.css";
import i18n from "../../i18n";
import React, { useRef, useState, useCallback, useEffect } from "react";
import * as THREE from "three";
import SideMenu from "../../components/SideMenu/SideMenu";
import SpriteText from "three-spritetext";
import { StyledSideFrame } from "../../components/SideFrame/SideFrame.styled";
import ForceGraph3D from "3d-force-graph";

function Home({ newGraphData }) {
  const graphRef = useRef(null);
  const fgRef = useRef();
  const [activeNode, setActiveNode] = useState(null);
  const [graphData, setGraphData] = useState(newGraphData);
  const [graphLoaded, setGraphLoaded] = useState(false);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [selection, setSelection] = React.useState("");
  let lng = i18n.language;
  let threeNodes = [];

  const colorForLinks = () => {
    return "#F9F9F9";
  };

  useEffect(() => {
    if (lng === "ua") {
      lng = "uk";
    }

    setGraphData(newGraphData);

    const N = 80;
    const gData = {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1)),
        })),
    };

    //cross-link node objects
    gData.links.forEach((link) => {
      const a = gData.nodes[link.source];
      const b = gData.nodes[link.target];
      !a.neighbors && (a.neighbors = []);
      !b.neighbors && (b.neighbors = []);
      a.neighbors.push(b);
      b.neighbors.push(a);

      !a.links && (a.links = []);
      !b.links && (b.links = []);
      a.links.push(link);
      b.links.push(link);
    });

    let hoverNode = null;

    const Graph = ForceGraph3D()(graphRef.current)
      .graphData(graphData)
      .linkOpacity(0.5)

      .linkDirectionalParticles(0)
      .linkWidth((link) => (highlightLinks.has(link) ? 1 : 1))
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 1 : 0))
      .linkDirectionalParticleWidth(0)
      .linkColor((link) =>
        highlightLinks.has(link) ? `#808080` : `rgba(180, 180, 180, 0.1)`
      )
      .onEngineTick(() => setGraphLoaded(true))
      .onNodeDragEnd((node) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      })

      .nodeAutoColorBy("group")
      .onNodeClick((node) => {
        // no state change
        const newHighlightNodes = new Set(highlightNodes);
        const newHighlightLinks = new Set(highlightLinks);
        if ((!node && !newHighlightNodes.size) || (node && hoverNode === node))
          return;

        newHighlightNodes.clear();
        newHighlightLinks.clear();
        if (node) {
          newHighlightNodes.add(node);
          node.neighbors.forEach((neighbor) => newHighlightNodes.add(neighbor));
          node.links.forEach((link) => newHighlightLinks.add(link));
          setSelection(node);
          setActiveNode(node);
          setHighlightLinks(newHighlightLinks);
          setHighlightNodes(newHighlightNodes);
        }

        hoverNode = node || null;

        const distance = 150;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        const newPos =
          node.x || node.y || node.z
            ? {
                x: node.x * distRatio,
                y: node.y * distRatio,
                z: node.z * distRatio,
              }
            : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        Graph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          3000 // ms transition duration
        );
        updateHighlight(node);
        handleClick(node);
      })

      .nodeThreeObject((node) => {
        const sprite = new SpriteText(node.id);
        sprite.color = "#000";
        sprite.fontFace = "Inter";
        sprite.fontWeight = "500";
        sprite.textHeight = 6;

        // if (node.city) {
        //   sprite.color = highlightNodes.has(node)
        //     ? `"#E0E0E0"`
        //     : `rgba(180, 180, 180, 0.25)`;
        // } else if (node.organization) {
        //   sprite.color = highlightNodes.has(node)
        //     ? node === activeNode
        //       ? "rgb(255,0,0,1)"
        //       : "rgba(255,160,0,0.8)"
        //     : "rgba(0,255,255,0.6)";
        // } else {
        //   sprite.color = highlightNodes.has(node)
        //     ? `#808080`
        //     : `rgba(224, 224, 224, 0.25)`;
        // }

        sprite.color = highlightNodes.has(node)
          ? node === activeNode
            ? "#FE6C2D"
            : "rgba(224, 224, 224, 1)"
          : "rgba(128, 128, 128, 0.33)";
        return sprite;
      });

    function updateHighlight(node) {
      // trigger update of highlighted objects in scene
      Graph.nodeColor(Graph.nodeColor())
        .linkWidth(Graph.linkWidth())
        .linkDirectionalParticles(Graph.linkDirectionalParticles())
        .nodeThreeObject(() => {
          const sprite = new SpriteText(node.id);
          sprite.fontFace = "Inter";
          sprite.fontWeight = "500";
          sprite.textHeight = 7;
          sprite.color = highlightNodes.has(node)
            ? node === activeNode
              ? "#FE6C2D"
              : "rgba(224, 224, 224, 1)"
            : "rgba(128, 128, 128, 0.1)";
          return sprite;
        });
    }

    return () => {
      Graph.pauseAnimation();
      Graph.graphData({ nodes: [], links: [] });
      Graph.graphData(graphData);
    };
  }, [lng, graphData, highlightNodes, highlightLinks, activeNode]);

  const handleClick = useCallback(
    (node) => {
      console.log("jaki node?", node);
      if (node?.id) {
        if (node?.organization) {
          const activeButtons = document.querySelectorAll(".menu-item.active");

          activeButtons.forEach((btn) => {
            btn.classList.remove("active");
          });

          const distance = 150;
          const distRatio =
            1 + distance / Math.hypot(node?.x, node?.y, node?.z);
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
        }
      } else {
        let activeNodeFromDOM =
          document.querySelector(".menu-item.active").dataset.node;
        console.log("active node from dom: ", activeNodeFromDOM);
        console.log("threeNodes: ", threeNodes);
        setActiveNode(node);
        if (activeNodeFromDOM !== null) {
          var items = threeNodes.filter(
            (item) => item.id === activeNodeFromDOM
          );
          var item = items[0];
          console.log(item);
          const distance = 150;
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
    [graphRef]
  );

  return (
    <>
      <StyledSideFrame left={true} right={false} />
      <SideMenu
        activeNode={activeNode}
        changeMenuNode={(menuNode) => setActiveNode(menuNode)}
        handleClick={handleClick}
      />

      {}

      <div ref={graphRef} />

      <StyledSideFrame right={true} left={false} />
    </>
  );
}

export default Home;
