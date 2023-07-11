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
  const [clickedMenuItem, setClickedMenuItem] = useState(false);
  const [selection, setSelection] = React.useState("");
  let lng = i18n.language;
  let hoverNode = null;
  let threeNodes = [];
  let Graph = null;

  const colorForLinks = () => {
    return "#F9F9F9";
  };

  function updateHighlight(node) {
    // trigger update of highlighted objects in scene
    console.log("what active node?", activeNode);
    const newHighlightNodes = new Set(highlightNodes);
    const newHighlightLinks = new Set(highlightLinks);
    if ((!node && !newHighlightNodes.size) || (node && hoverNode === node))
      return;

    newHighlightNodes.clear();
    newHighlightLinks.clear();
    if (node) {
      newHighlightNodes.add(node);
      console.log("a tu taki node", node);
      node.neighbors?.forEach((neighbor) => newHighlightNodes.add(neighbor));
      node.links?.forEach((link) => newHighlightLinks.add(link));
      setSelection(node);
      setActiveNode(node);
      setHighlightLinks(newHighlightLinks);
      setHighlightNodes(newHighlightNodes);
    }

    hoverNode = node || null;

    const distance = 10;
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
    Graph.nodeColor(Graph.nodeColor())
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles())
      .nodeThreeObject(() => {
        const highlightArray = [];
        highlightNodes.forEach((node) => highlightArray.push(node));
        console.log("highlightArray:", highlightArray);
        console.log(activeNode, "activenode");
        const sprite = new SpriteText(node.id);
        sprite.fontFace = "Inter";
        sprite.fontWeight = "500";
        sprite.textHeight = 7;
        sprite.color = highlightArray.includes(node.id)
          ? activeNode.id === node.id
            ? "#FE6C2D"
            : "#fff"
          : "rgba(224, 224, 224, 0.5)";

        return sprite;
      });
  }

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

    Graph = ForceGraph3D()(graphRef.current)
      .graphData(newGraphData)
      .linkOpacity(0.5)
      .linkDirectionalParticles(0)
      .linkWidth((link) => (highlightLinks.has(link) ? 1 : 1))
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 1 : 0))
      .linkDirectionalParticleWidth(0)
      .linkColor((link) =>
        highlightLinks.has(link) ? `#808080` : `rgba(180, 180, 180, 0.1)`
      )
      // .onEngineTick(() => setGraphLoaded(true))
      .onNodeDragEnd((node) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      })

      .nodeAutoColorBy("group")
      .onNodeClick((node) => {
        // no state change
        setClickedMenuItem(false);
        updateHighlight(node);
        handleClick(node);
        console.log(node);
      })

      .nodeThreeObject((node) => {
        const highlightArray = [];
        highlightNodes.forEach((node) => highlightArray.push(node.id));
        const sprite = new SpriteText(node.id);
        sprite.fontFace = "Inter";
        sprite.fontWeight = "500";
        sprite.textHeight = 7;
        sprite.color = highlightArray.includes(node.id)
          ? activeNode.id === node.id
            ? "#FE6C2D"
            : "#fff"
          : node.attributes.organization
          ? "rgba(255, 251, 169, 0.33)" // Color for node with organization attribute
          : node.attributes.city
          ? "rgba(139, 128, 251, 0.33)" // Color for node with city attribute
          : "rgba(224, 224, 224, 0.25)"; // Default color

        return sprite;
      });

    function updateHighlight(node) {
      // trigger update of highlighted objects in scene
      console.log("what active node?", activeNode);
      const newHighlightNodes = new Set(highlightNodes);
      const newHighlightLinks = new Set(highlightLinks);
      if ((!node && !newHighlightNodes.size) || (node && hoverNode === node))
        return;

      newHighlightNodes.clear();
      newHighlightLinks.clear();
      if (node) {
        newHighlightNodes.add(node);
        console.log("a tu taki node", node);
        node.neighbors?.forEach((neighbor) => newHighlightNodes.add(neighbor));
        node.links?.forEach((link) => newHighlightLinks.add(link));
        setSelection(node);
        setActiveNode(node);
        setHighlightLinks(newHighlightLinks);
        setHighlightNodes(newHighlightNodes);
      }

      hoverNode = node || null;

      const distance = 10;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      const newPos =
        node.x || node.y || node.z
          ? {
              x: node.x * distRatio,
              y: node.y * distRatio,
              z: node.z * distRatio,
            }
          : { x: 0, y: 0, z: 10 }; // special case if node is in (0,0,0)

      Graph.cameraPosition(
        newPos, // new position
        node, // lookAt ({ x, y, z })
        1000 // ms transition duration
      );
    }

    return () => {
      Graph.pauseAnimation();
      Graph.graphData({ nodes: [], links: [] });
      Graph.graphData(newGraphData);
    };
  }, [
    lng,
    graphData,
    newGraphData,
    highlightNodes,
    highlightLinks,
    activeNode,
  ]);

  const handleClick = useCallback(
    (node) => {
      console.log("jaki node?", node);
      if (node?.id) {
        if (node?.organization) {
          const activeButtons = document.querySelectorAll(".menu-item.active");

          activeButtons.forEach((btn) => {
            btn.classList.remove("active");
          });

          const newHighlightNodes = new Set(highlightNodes);
          const newHighlightLinks = new Set(highlightLinks);

          // if ((!node && !newHighlightNodes.size) || node) return;

          newHighlightNodes.clear();
          newHighlightLinks.clear();

          if (node) {
            newHighlightNodes.add(node);
            console.log("a tu taki node", node);
            node.neighbors?.forEach((neighbor) =>
              newHighlightNodes.add(neighbor)
            );
            node.links?.forEach((link) => newHighlightLinks.add(link));
            setSelection(node);
            setActiveNode(node);
            setHighlightLinks(newHighlightLinks);
            setHighlightNodes(newHighlightNodes);
            updateHighlight(node);
          }

          const distance = 10;
          const distRatio =
            1 + distance / Math.hypot(node?.x, node?.y, node?.z);
          console.log(node);
          if (fgRef.current) {
            fgRef.current.cameraPosition(
              {
                x: node.x * distRatio,
                y: node.y * distRatio,
                z: node.z * distRatio,
              },
              node,
              10
            );
          }
        } else {
          console.log(graphData, node);
          const desiredObject = graphData?.nodes.find(
            (obj) => obj.id === node.attributes.name
          );
          console.log("dupa", desiredObject);
          setActiveNode(desiredObject);
          updateHighlight(desiredObject);
        }
      } else {
        let activeNodeFromDOM;
        if (document.querySelector(".menu-item.active").dataset.node) {
          activeNodeFromDOM =
            document.querySelector(".menu-item.active").dataset.node;
        }
        console.log("active node from dom: ", activeNodeFromDOM);
        console.log("threeNodes: ", threeNodes);
        setActiveNode(node);
        setClickedMenuItem(true);
        updateHighlight(node);
        if (activeNodeFromDOM !== null) {
          var items = threeNodes.filter(
            (item) => item.id === activeNodeFromDOM
          );
          var item = items[0];
          console.log(item);

          const newHighlightNodes = new Set(highlightNodes);
          const newHighlightLinks = new Set(highlightLinks);

          newHighlightNodes.clear();
          newHighlightLinks.clear();

          if (item) {
            newHighlightNodes.add(item);
            console.log("a tu taki node", item);
            item.neighbors?.forEach((neighbor) =>
              newHighlightNodes.add(neighbor)
            );
            item.links?.forEach((link) => newHighlightLinks.add(link));
            setSelection(item);
            setActiveNode(item);
            setHighlightLinks(newHighlightLinks);
            setHighlightNodes(newHighlightNodes);
            updateHighlight(item);
          }
          // const distance = 10;
          // const distRatio = 1 + distance / Math.hypot(item.x, item.y, item.z);
          // if (fgRef.current) {
          //   fgRef.current.cameraPosition(
          //     {
          //       x: item.x * distRatio,
          //       y: item.y * distRatio,
          //       z: item.z * distRatio,
          //     },
          //     item,
          //     10
          //   );
          // }
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
        graphData={graphData}
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
