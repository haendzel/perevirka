import React, { Component, useEffect, useState } from "react";
// import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import { GlobalStyle } from "./theme/mainTheme";
// import Contact from "./pages/Contact";

function App() {
  const { ready } = useTranslation();
  const [isBusy, setIsBusy] = useState(true);
  const [loadedApi, setLoadedApi] = useState(false);
  const [graphData, setGraphData] = useState();
  let nodesArrayHelper = [];
  let linksArrayHelper = [];
  let lng = i18n.language;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getSourcesForTargetNode(nodes, connections, targetId) {
    const targetNode = nodes.find((node) => node.id === targetId);
    const targetNodeId = targetNode.id;
    const sources = [];

    for (const connection of connections) {
      if (connection.target === targetNodeId) {
        const sourceNode = nodes.find((node) => node.id === connection.source);
        sources.push(sourceNode);
      }
    }

    return sources;
  }

  function fetchData() {
    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/tags?pagination[page]=1&pagination[pageSize]=9999&locale=${lng}&populate=*`
    )
      .then((response) => {
        setLoadedApi(false);
        return response.json();
      })
      .then((data) => {
        setLoadedApi(true);
        data.data?.map((item) => {
          // const nodeLinks = linksArrayState.filter(
          //   (link) => link.source === item.id || link.target === item.id
          // );

          item.id = item.attributes.name;
          item.city = item.attributes.tag ? false : true;
          item.organization = false;
          item.group = item.attributes.tag ? 2 : 3;
          item.value = getRandomInt(50);
          // Add all links that have this node as a source or target to the links array of this node
          //item.links = nodeLinks;
          nodesArrayHelper.push(item);

          const ids = nodesArrayHelper.map((o) => o.id);
          const filteredArray = nodesArrayHelper.filter(
            ({ id }, index) => !ids.includes(id, index + 1)
          );
        });
      });

    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/nodes?pagination[page]=1&pagination[pageSize]=9999&locale=${lng}&populate=*`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.data?.map((item) => {
          item.id = item.attributes.node_id;
          item.organization = true;
          item.city = false;
          item.group = 1;
          nodesArrayHelper.push(item);
          // setRealNodes(prevArray => [...prevArray, item]);

          item.attributes.tags?.data.map((tag) => {
            linksArrayHelper.push({
              source: item.id,
              target: tag.attributes.name,
              value: getRandomInt(1000),
            });
          });

          const filteredLinks = linksArrayHelper.filter(
            (link) => link.source === item.id
          );

          item.links = filteredLinks;
          item.neighbors = filteredLinks.map((link) => {
            console.log("filtrujemy tu", nodesArrayHelper);
            const neighborNode = nodesArrayHelper.find(
              (node) =>
                node.id ===
                (link.target === item.id ? link.source : link.target)
            );
            console.log(neighborNode);
            return neighborNode ? neighborNode : null;
          });
        });
      })
      .then(() => {
        const newArray = nodesArrayHelper.map((obj) => {
          if (obj.organization === false) {
            const sourcesForTargetNode = getSourcesForTargetNode(
              nodesArrayHelper,
              linksArrayHelper,
              obj.id
            );
            const filteredLinks = linksArrayHelper.filter(
              (link) => link.target === obj.id
            );
            return {
              ...obj,
              links: filteredLinks,
              neighbors: sourcesForTargetNode,
            };
          } else {
            return { ...obj };
          }
        });

        console.log("check", newArray, nodesArrayHelper, linksArrayHelper);

        setGraphData({
          nodes: newArray,
          links: linksArrayHelper,
        });

        setIsBusy(false);

      });
  }

  useEffect(() => {
    if (lng === "ua") {
      lng = "uk";
    }
    fetchData();
  }, []);

  if (ready) {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <GlobalStyle />
          {!isBusy && (
            <>
              <Header />

              <Routes>
                <Route path="/" element={<Home newGraphData={graphData} />} />
                <Route path="/essay" element={<Article />} />
              </Routes>

              <Footer />
            </>
          )}
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}
export default App;
