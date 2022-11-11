import "../../App.css";
import i18n from "../../i18n";
import React, { useRef, useState, useCallback, useEffect } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import SpriteText from "three-spritetext";
import { StyledSideFrame } from "../../components/SideFrame/SideFrame.styled";
import { ForceGraph3D } from "react-force-graph";

const initialNodesArray = [
  {
    id: "Folkowisko",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Lambda",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "SDK Słonecznik",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Tosia",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "KMWTW",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Letjaha",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Stewardessy Pokoju",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Cyber Elfy",
    group: 1,
    visible: true,
    organization: true,
  },
  {
    id: "Fundacja Wolno Nam",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Zupa dla Ukrainy",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Andżela Doniec One Man Army",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "MTP",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "PomocniLudzie",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Grupa Stonewall",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Borys Tynka",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Ukraina Pomagamy",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Nie-nieodpowiedzialni",
    group: 1,
    visible: true,
    organization: true,
    tags: ["transport", "online", "logistics"],
  },
  {
    id: "Accomodation",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Transport",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Food distribution",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Education",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Transport PL",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Transport UA/PL",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Housing",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Mental health aid",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Information",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Gathering aid",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Leisure activities",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "OSINT",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Spedition",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Translations",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Cybersec",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Coordination of volunteers",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Finding work",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Culture",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Networking",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Care work",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Medical transport",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Counter-intelligence",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Long-term coordination",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Medical aid",
    group: 2,
    visible: true,
    tag: true,
    organization: false,
  },
  {
    id: "Cieszanów",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
  {
    id: "Warszawa",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
  {
    id: "off-site",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
  {
    id: "Kraków",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
  {
    id: "Poznań",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
  {
    id: "Łódź",
    group: 3,
    visible: true,
    organization: false,
  },
  {
    id: "Medyka",
    group: 3,
    visible: true,
    organization: false,
    city: true,
  },
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
  let lng = i18n.language;
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
    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/nodes?pagination[page]=1&pagination[pageSize]=9999&locale=${lng}&populate=*`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data?.data);

        data.data?.map((item) => {
          item.id = item.attributes.node_id;
          item.organization = true;
          item.city = false;
          item.group = 1;
          nodesArrayHelper.push(item);
          threeNodes.push(item);

          item.attributes.tags?.data.map((tag) => {
            linksArrayHelper.push({
              source: item.id,
              target: tag.attributes.name,
              value: getRandomInt(10),
            });
          });
        });

        fetch(
          `https://serene-dusk-83995.herokuapp.com/api/tags?pagination[page]=1&pagination[pageSize]=9999&locale=${lng}&populate=*`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data?.data);
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
                {
                  source: "Folkowisko",
                  target: "Cieszanów",
                  visible: true,
                  value: 1,
                },
                {
                  source: "SDK Słonecznik",
                  target: "Warszawa",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Lambda",
                  target: "Warszawa",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Tosia",
                  target: "off-site",
                  visible: true,
                  value: 3,
                },
                {
                  source: "KMWTW",
                  target: "Kraków",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Letjaha",
                  target: "Kraków",
                  visible: true,
                  value: 8,
                },
                {
                  source: "Stewardessy Pokoju",
                  target: "Medyka",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Cyber Elfy",
                  target: "off-site",
                  visible: true,
                  value: 10,
                },
                {
                  source: "Fundacja Wolno Nam",
                  target: "Kraków",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Zupa dla Ukrainy",
                  target: "Kraków",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Andżela Doniec One Man Army",
                  target: "Kraków",
                  visible: true,
                  value: 3,
                },
                {
                  source: "MTP",
                  target: "Poznań",
                  visible: true,
                  value: 2,
                },
                {
                  source: "PomocniLudzie",
                  target: "Łódź",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Grupa Stonewall",
                  target: "Poznań",
                  visible: true,
                  value: 5,
                },
                {
                  source: "Borys Tynka",
                  target: "Kraków",
                  visible: true,
                  value: 8,
                },
                {
                  source: "Ukraina Pomagamy",
                  target: "Warszawa",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Nie-nieodpowiedzialni",
                  target: "Warszawa",
                  visible: true,
                  value: 10,
                },
                {
                  source: "Accomodation",
                  target: "Folkowisko",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Accomodation",
                  target: "KMWTW",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Accomodation",
                  target: "Andżela Doniec One Man Army",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Accomodation",
                  target: "MTP",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Accomodation",
                  target: "PomocniLudzie",
                  visible: true,
                  value: 8,
                },
                {
                  source: "Transport",
                  target: "Folkowisko",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Education",
                  target: "SDK Słonecznik",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Leisure activities",
                  target: "SDK Słonecznik",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Leisure activities",
                  target: "Zupa dla Ukrainy",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Care work",
                  target: "SDK Słonecznik",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Care work",
                  target: "KMWTW",
                  visible: true,
                  value: 7,
                },
                {
                  source: "Care work",
                  target: "Andżela Doniec One Man Army",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Care work",
                  target: "Grupa Stonewall",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Culture",
                  target: "SDK Słonecznik",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Culture",
                  target: "KMWTW",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Culture",
                  target: "Stewardessy Pokoju",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Mental health aid",
                  target: "Lambda",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Mental health aid",
                  target: "Stewardessy Pokoju",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Mental health aid",
                  target: "Grupa Stonewall",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Medical aid",
                  target: "Lambda",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Medical aid",
                  target: "Ukraina Pomagamy",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Housing",
                  target: "Lambda",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Housing",
                  target: "Letjaha",
                  visible: true,
                  value: 7,
                },
                {
                  source: "Transport PL",
                  target: "Lambda",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Transport PL",
                  target: "Letjaha",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Transport UA/PL",
                  target: "Tosia",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Transport UA/PL",
                  target: "Letjaha",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Transport UA/PL",
                  target: "Borys Tynka",
                  visible: true,
                  value: 2,
                },
                {
                  source: "Transport",
                  target: "Folkowisko",
                  visible: true,
                  value: 7,
                },
                {
                  source: "Spedition",
                  target: "Tosia",
                  visible: true,
                  value: 8,
                },
                {
                  source: "Spedition",
                  target: "Letjaha",
                  visible: true,
                  value: 10,
                },
                {
                  source: "Information",
                  target: "Cyber Elfy",
                  visible: true,
                  value: 7,
                },
                {
                  source: "OSINT",
                  target: "Cyber Elfy",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Cybersec",
                  target: "Cyber Elfy",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Counter-intelligence",
                  target: "Cyber Elfy",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Gathering aid",
                  target: "Fundacja Wolno Nam",
                  visible: true,
                  value: 3,
                },
                {
                  source: "Translations",
                  target: "Andżela Doniec One Man Army",
                  visible: true,
                  value: 5,
                },
                {
                  source: "Long-term coordination",
                  target: "Andżela Doniec One Man Army",
                  visible: true,
                  value: 5,
                },
                {
                  source: "Networking",
                  target: "Andżela Doniec One Man Army",
                  visible: true,
                  value: 5,
                },
                {
                  source: "Food distribution",
                  target: "Folkowisko",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Food distribution",
                  target: "SDK Słonecznik",
                  visible: true,
                  value: 4,
                },
                {
                  source: "Food distribution",
                  target: "KMWTW",
                  visible: true,
                  value: 10,
                },
                {
                  source: "Food distribution",
                  target: "Zupa dla Ukrainy",
                  visible: true,
                  value: 6,
                },
                {
                  source: "Coordination of volunteers",
                  target: "PomocniLudzie",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Finding work",
                  target: "PomocniLudzie",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Medical transport",
                  target: "Nie-nieodpowiedzialni",
                  visible: true,
                  value: 1,
                },
                {
                  source: "Medical transport",
                  target: "Nie-nieodpowiedzialni",
                  visible: true,
                  value: 1,
                },
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
    if (lng === "ua") {
      lng = "uk";
    }
    fetchData();
  }, [lng]);

  const handleClick = useCallback(
    (node) => {
      console.log("jaki node?", node);
      if (node?.id) {
        if (node?.organization) {
          const activeButtons = document.querySelectorAll(".menu-item.active");

          activeButtons.forEach((btn) => {
            btn.classList.remove("active");
          });

          const distance = 70;
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
