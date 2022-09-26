import React from "react";
import { StyledDetailsArticle } from "./DetailsArticle.styled";

const DetailsArticle = () => {
  return (
    <StyledDetailsArticle className="article">
      <article>
        <div className="article-block block-standard-heading-text">
          <h3>Heading</h3>
          <p>
            Ut sed diam nibh accumsan. Ac odio diam, sollicitudin lectus
            consequat semper enim. Neque ut adipiscing quam sed in diam.
            Elementum praesent nibh nulla pretium ullamcorper morbi condimentum.
            Nunc facilisi gravida mi neque pretium egestas felis tempor, erat.
            Adipiscing volutpat dignissim ridiculus ac urna dictumst at. Vel
            duis nibh egestas adipiscing nibh mattis nunc enim auctor. Ac
            ultricies amet nullam tincidunt tristique massa quisque placerat.
          </p>
        </div>
        <div className="article-block block-quote-text">
          <p class="quote-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            dui, ac velit sed et risus dui quis eros. In dui in sed donec.
            Tortor tincidunt mi condimentum nunc erat sem amet vulputate nec.
            Risus vel tristique quis est aliquam fermentum.”
          </p>
          <span class="author-text">John Doe, Lethaja</span>
        </div>
        <div className="article-block standard-heading-text">
          <h3>Heading</h3>
          <p>
            Ut sed diam nibh accumsan. Ac odio diam, sollicitudin lectus
            consequat semper enim. Neque ut adipiscing quam sed in diam.
            Elementum praesent nibh nulla pretium ullamcorper morbi condimentum.
            Nunc facilisi gravida mi neque pretium egestas felis tempor, erat.
            Adipiscing volutpat dignissim ridiculus ac urna dictumst at. Vel
            duis nibh egestas adipiscing nibh mattis nunc enim auctor. Ac
            ultricies amet nullam tincidunt tristique massa quisque placerat.
          </p>
        </div>
      </article>
    </StyledDetailsArticle>
  );
};

export default DetailsArticle;
