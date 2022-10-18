import "../../App.css";
import React, { useRef, useState, useCallback, useEffect } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import SpriteText from "three-spritetext";
import { StyledSideFrame } from "../../components/SideFrame/SideFrame.styled";
import { ForceGraph3D } from "react-force-graph";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const initialNodesArray = [
  { id: "SDK SŁonecznik", organization: true, val: 10 },
  { id: "Lambda", organization: true, val: 9 },
  { id: "Kraków", organization: false, city: true, val: 1 },
];

let linksArrayInitial = [{ source: "Lambda", target: "Kraków" }];

const initialData = {
  nodes: initialNodesArray,
  links: linksArrayInitial,
};

function Home() {
  const fgRef = useRef();
  const [activeNode, setActiveNode] = useState(null);
  const [data, setData] = useState(initialData);
  const [isBusy, setIsBusy] = useState(false);
  let threeNodes = [];

  let nodesArrayHelper = [];
  let linksArrayHelper = [];

  const colorForLinks = () => {
    return "#F9F9F9";
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function fetchData() {
    fetch("http://localhost:1337/api/nodes?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);

        data.data?.map((item) => {
          item.id = item.attributes.node_id;
          item.organization = true;
          item.city = false;
          item.group = 1;
          nodesArrayHelper.push(item);

          item.attributes.tags?.data.map((tag) => {
            linksArrayHelper.push({
              source: item.id,
              target: tag.attributes.name,
              value: getRandomInt(10),
            });
          });
        });

        fetch("http://localhost:1337/api/tags?populate=*")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.data);
            data.data?.map((item) => {
              item.id = item.attributes.name;
              item.city = item.attributes.tag ? false : true;
              item.organization = false;
              item.group = item.attributes.tag ? 2 : 3;
              nodesArrayHelper.push(item);

              const ids = nodesArrayHelper.map((o) => o.id);
              const filteredArray = nodesArrayHelper.filter(
                ({ id }, index) => !ids.includes(id, index + 1)
              );

              const exampleArray = [
                { source: "cybersec", target: "Lambda" },
                { source: "spedition", target: "Folkowisko" },
                { source: "accomodation", target: "Folkowisko" },
              ];

              setData({
                nodes: filteredArray,
                links: [...linksArrayHelper],
              });

              setIsBusy(false);
            });
          });
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = useCallback(
    (node) => {
      if (node?.id) {
        const activeButtons = document.querySelectorAll(".menu-item.active");

        activeButtons.forEach((btn) => {
          btn.classList.remove("active");
        });

        const distance = 70;
        const distRatio = 1 + distance / Math.hypot(node?.x, node?.y, node?.z);
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
      <StyledSideFrame left={true} right={false} />
      <SideMenu
        activeNode={activeNode}
        changeMenuNode={(menuNode) => setActiveNode(menuNode)}
        handleClick={handleClick}
      />

      <ForceGraph3D
        ref={fgRef}
        distance={100}
        forceEngine={"d3"}
        dagLevelDistance={10}
        width={window.innerWidth}
        graphData={data}
        // graphData={{
        //   nodes: [
        //     { id: "Kraków", organization: false, city: true },
        //     { id: "Folkowisko", organization: true },
        //     { id: "Lambda", organization: true },
        //   ],
        //   links: [
        //     {
        //       source: "Folkowisko",
        //       target: "Kraków",
        //       value: 1,
        //     },
        //     {
        //       source: "Lambda",
        //       target: "Kraków",
        //       value: 1,
        //     },
        //   ],
        //}}
        //jsonUrl="http://localhost:1337/api/nodes?populate=*"
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
    </>
  );
}

export default Home;
