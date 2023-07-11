import React, { useState, useEffect } from "react";
import { StyledSideFrameArticleMobile } from "../../components/SideFrame/SideFrame.styled";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { Scrollchor } from "react-scrollchor";
import { StyledArticleSection } from "./Article.styled";
import openJPG from "../../images/sample.png";
import SideMenuArticle from "../../components/SideMenuArticle/SideMenuArticle";

const Article = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [article, setArticle] = useState(null);
  const { t, i18n, ready } = useTranslation();
  let lng = i18n.language;

  const fetchArticle = () => {
    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/article?populate=*&locale=${lng}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data?.data);
      });
  };

  useEffect(() => {
    if (lng === "ua") {
      lng = "uk";
    }
    fetchArticle();
  }, [lng]);

  return (
    <StyledArticleSection>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 p-0 m-0">
            <div className="list-of-contents">
              <p className="title-contents">{t("list_of_content")}</p>
              <div
                dangerouslySetInnerHTML={{ __html: article?.attributes?.List }}
              ></div>
            </div>
          </div>
          <div className="col-xl-7 col-xxxl-8 article-col p-0">
            <article className="pt-0 pl-0 pe-0 ps-0 mt-0 me-0 ms-0">
              <div className="article-block article-block-title" id="0">
                <h2>{t("essay")}</h2>
                <p className="article-date">
                  {moment(article?.attributes?.publishedAt).format(
                    "DD.MM.yyyy"
                  )}
                </p>
              </div>
              {article?.attributes?.flexible_content?.map((content, index) => {
                if (
                  content.__component ===
                  "content-heading-text.content-heading-with-text"
                ) {
                  return (
                    <div
                      className="article-block block-standard-heading-text"
                      key={index}
                      id={content.hash}
                    >
                      <h3>{content.heading}</h3>
                      <div>
                        <ReactMarkdown children={content.content} />
                      </div>
                    </div>
                  );
                }

                if (
                  content.__component === "standard-content.standard-content"
                ) {
                  return (
                    <div
                      className="article-block block-standard-heading-text"
                      key={index}
                      id={content.hash}
                    >
                      <div>
                        <ReactMarkdown children={content.content} />
                      </div>
                    </div>
                  );
                }

                if (content.__component === "content-image.content-image") {
                  return (
                    <div
                      className="article-block image-block"
                      key={index}
                      id={content.hash}
                    >
                      <figure>
                        <img src={content.image} alt="open" />
                        <figcaption>{content.caption}</figcaption>
                      </figure>
                    </div>
                  );
                }

                if (content.__component === "quote.quote") {
                  return (
                    <div
                      className="article-block block-quote-text text-center"
                      key={index}
                      id={content.hash}
                    >
                      <blockquote className="quote-text">
                        {content.text}
                      </blockquote>
                      <p className="author-text mt-1">{content.author}</p>
                    </div>
                  );
                }
              })}
            </article>
          </div>
          <div className="col-xl-3 col-xxxl-2 p-0 m-0">
            <SideMenuArticle
              activeNode={activeNode}
              changeMenuNode={(menuNode) => setActiveNode(menuNode)}
            />
          </div>
        </div>
      </div>
      <StyledSideFrameArticleMobile right={false} left={true} />
      <StyledSideFrameArticleMobile right={true} left={false} />
    </StyledArticleSection>
  );
};

export default Article;
