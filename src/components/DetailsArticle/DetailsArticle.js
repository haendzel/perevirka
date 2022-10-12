import React from "react";
import { StyledDetailsArticle } from "./DetailsArticle.styled";
import openJPG from "../../images/sample.png";

const DetailsArticle = ({node}) => {
  console.log(node)
  return (
    <StyledDetailsArticle className="article">
      <article>
        <div className="article-block block-standard-heading-text">
          <h3>Heading 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            proin pellentesque erat et tortor, aliquam viverra odio. Proin neque
            bibendum rutrum enim accumsan dolor tincidunt. Nunc id aliquam eget
            ut. Elit consectetur congue at at urna. Tellus semper nam sociis
            ullamcorper ut sed iaculis elit. At sed amet nascetur etiam sapien
            nisi. Rutrum tincidunt facilisis vestibulum ligula risus, bibendum.
            Dignissim nec sed imperdiet risus, urna nibh id blandit enim.
          </p>
        </div>

        <div className="article-block image-block">
          <figure>
            <img src={openJPG} alt="open" />
            <figcaption>Image annotation</figcaption>
          </figure>
        </div>

        <div className="article-block block-quote-text text-center">
          <blockquote className="quote-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            dui, ac velit sed et risus dui quis eros. In dui in sed donec.
            Tortor tincidunt mi condimentum nunc erat sem amet vulputate nec.
            Risus vel tristique quis est aliquam fermentum.”
          </blockquote>
          <p className="author-text mt-1">John Doe, Lethaja</p>
        </div> 

      </article>
    </StyledDetailsArticle>
  );
};

export default DetailsArticle;
