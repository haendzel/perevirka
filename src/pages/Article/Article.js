import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Scrollchor } from "react-scrollchor";
import { StyledArticleSection } from "./Article.styled";
import openJPG from "../../images/sample.png";
import SideMenuArticle from "../../components/SideMenuArticle/SideMenuArticle";

const Article = () => {
  const [activeNode, setActiveNode] = useState(null);
  const { t } = useTranslation();

  return (
    <StyledArticleSection>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 p-0 m-0">
            <div className="list-of-contents">
              <p className="title-contents">{t("list_of_content")}</p>
              <ul className="list">
                <li>
                  <a className="nav-item" href="#0-0">
                    0. Wstęp
                  </a>
                </li>
                <li>
                  <a href="#1-0">1. Corporis nobis nulla</a>
                </li>
                <ul>
                  <li>
                    <a href="#1-1">1.1 delectus quibusdam nulla</a>
                  </li>
                  <li>
                    <a href="#1-2">1.2 ea vel voluptam</a>
                  </li>
                  <li>
                    <a href="#1-3">1.3 nisi omni volla</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 article-col p-0">
            <article className="p-0 m-0">
              <div className="article-block article-block-title">
                <h2>{t("resistance")}</h2>
                <p className="article-date">28.10.2022</p>
              </div>
              <div
                className="article-block block-standard-heading-text"
                id="0-0"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat proin pellentesque erat et tortor, aliquam viverra
                  odio. Proin neque bibendum rutrum enim accumsan dolor
                  tincidunt. Nunc id aliquam eget ut. Elit consectetur congue at
                  at urna. Tellus semper nam sociis ullamcorper ut sed iaculis
                  elit. At sed amet nascetur etiam sapien nisi. Rutrum tincidunt
                  facilisis vestibulum ligula risus, bibendum. Dignissim nec sed
                  imperdiet risus, urna nibh id blandit enim.{" "}
                  <a href="" onClick={() => setActiveNode("Folkowisko")}>
                    Folkowisko
                  </a>
                </p>
              </div>

              <div
                className="article-block block-standard-heading-text"
                id="1-0"
              >
                <h3>Wartości sieci</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat proin pellentesque erat et tortor, aliquam viverra
                  odio. Proin neque bibendum rutrum enim accumsan dolor
                  tincidunt. Nunc id aliquam eget ut. Elit consectetur congue at
                  at urna. Tellus semper nam sociis ullamcorper ut sed iaculis
                  elit. At sed amet nascetur etiam sapien nisi. Rutrum tincidunt
                  facilisis vestibulum ligula risus, bibendum. Dignissim nec sed
                  imperdiet risus, urna nibh id blandit enim.
                </p>
              </div>

              <div
                className="article-block block-standard-heading-text"
                id="1-1"
              >
                <h3>Wartości sieci</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat proin pellentesque erat et tortor, aliquam viverra
                  odio. Proin neque bibendum rutrum enim accumsan dolor
                  tincidunt. Nunc id aliquam eget ut. Elit consectetur congue at
                  at urna. Tellus semper nam sociis ullamcorper ut sed iaculis
                  elit. At sed amet nascetur etiam sapien nisi. Rutrum tincidunt
                  facilisis vestibulum ligula risus, bibendum. Dignissim nec sed
                  imperdiet risus, urna nibh id blandit enim.
                </p>
              </div>

              <div className="article-block image-block" id="1-2">
                <figure>
                  <img src={openJPG} alt="open" />
                  <figcaption>Image annotation</figcaption>
                </figure>
              </div>

              <div
                className="article-block block-quote-text text-center"
                id="1-3"
              >
                <blockquote className="quote-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus dui, ac velit sed et risus dui quis eros. In dui in
                  sed donec. Tortor tincidunt mi condimentum nunc erat sem amet
                  vulputate nec. Risus vel tristique quis est aliquam
                  fermentum.”
                </blockquote>
                <p className="author-text mt-1">John Doe, Lethaja</p>
              </div>
            </article>
          </div>
          <div className="col-xl-3 p-0 m-0">
            <SideMenuArticle
              activeNode={activeNode}
              changeMenuNode={(menuNode) => setActiveNode(menuNode)}
            />
          </div>
        </div>
      </div>
    </StyledArticleSection>
  );
};

export default Article;
