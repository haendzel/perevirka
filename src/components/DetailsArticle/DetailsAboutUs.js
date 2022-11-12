import React, { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { StyledDetailsArticle } from "./DetailsArticle.styled";
import openJPG from "../../images/sample.png";

const DetailsAboutUs = ({ aboutUs }) => {
  const flexibleContents = aboutUs?.attributes?.flexible_content;

  return (
    <StyledDetailsArticle className="article">
      <div className="content">
        {flexibleContents?.map((content, index) => {
          if (
            content.__component ===
            "content-heading-text.content-heading-with-text"
          ) {
            return (
              <div
                className="article-block block-standard-heading-text"
                key={index}
              >
                <h3>{content.heading}</h3>
                <div>
                  <ReactMarkdown children={content.content} />
                </div>
              </div>
            );
          }

          if (content.__component === "standard-content.standard-content") {
            return (
              <div
                className="article-block block-standard-heading-text"
                key={index}
              >
                <div>
                  <ReactMarkdown children={content.content} />
                </div>
              </div>
            );
          }

          if (content.__component === "content-image.content-image") {
            return (
              <div className="article-block image-block" key={index}>
                <figure>
                  <img src={openJPG} alt="open" />
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
              >
                <blockquote className="quote-text">{content.text}</blockquote>
                <p className="author-text mt-1">{content.author}</p>
              </div>
            );
          }
        })}
      </div>
    </StyledDetailsArticle>
  );
};

export default DetailsAboutUs;
