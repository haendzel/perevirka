import React from "react";
import { StyledDetailsArticle } from "./DetailsArticle.styled";
import openJPG from "../../images/sample.png";

const DetailsArticle = ({ node }) => {
  const flexibleContents = node?.attributes?.flexible_content;

  return (
    <StyledDetailsArticle className="article">
      <article>
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
                <p>{content.content}</p>
              </div>
            );
          }

          if (content.__component === "standard-content.standard-content") {
            return (
              <div
                className="article-block block-standard-heading-text"
                key={index}
              >
                <p>{content.content}</p>
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
      </article>
    </StyledDetailsArticle>
  );
};

export default DetailsArticle;
