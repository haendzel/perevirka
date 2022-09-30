import React from "react";
import { StyledDetailsArticle } from "./DetailsArticle.styled";
import openJPG from "../../images/sample.png";

const DetailsArticle = () => {
  return (
    <StyledDetailsArticle className="article">
      <article>
        <div className="article-block block-standard-heading-text">
          <h3>About Perevirka</h3>
          <p>
            W projekcie Perevirka badamy miko i średnie oddolne organizacje
            pomocowe działające w czasie pełnej inwazji Rosji na Ukrainę.
            Dlaczego skupiamy się na skali mikro, gdy przecież to makro ma
            największy zasięg i wpływ? W przeciwieństwie do instytucji, organów
            państwowych czy dużych fundacji małe organizacje mogą działać od
            razu. A w kryzysie często potrzebujemy szybkich reakcji – nie
            długich procesów decyzyjnych. Mikro organizacje nie tylko potrafią
            działać błyskawicznie, ale też przecierają szlaki wszędzie tam,
            gdzie protokół działania jeszcze nie istnieje. Drugim powodem jest
            fakt, że oddolne, mikro inicjatywy aktywistyczne nie są
            wystarczająco i na bieżąco dokumentowane. Tym projektem chcemy dać
            im widoczność na którą zasługują, bo gdyby nie istnienie mikro, nie
            działałoby żadne makro. Poniższy tekst to synteza wywiadów z
            oddolnymi organizacjami: SDK Słonecznik, Tosia, KMWTW,
          </p>
        </div>

        <div className="article-block block-standard-heading-text">
          <h3>Instrukcja</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            proin pellentesque erat et tortor, aliquam viverra odio. Proin neque
            bibendum rutrum enim accumsan dolor tincidunt. Nunc id aliquam eget
            ut. Elit consectetur congue at at urna. Tellus semper nam sociis
            ullamcorper ut sed iaculis elit. At sed amet nascetur etiam sapien
            nisi. Rutrum tincidunt facilisis vestibulum ligula risus, bibendum.
            Dignissim nec sed imperdiet risus, urna nibh id blandit enim.
            Pharetra orci ornare viverra arcu dui molestie sit. Blandit ac
            tempor, sapien, tellus lectus. Dignissim nec sed imperdiet risus,
            urna nibh id blandit enim. Pharetra orci ornare viverra arcu dui
            molestie sit. Blandit ac tempor, sapien, tellus lectus. Dignissim
            nec sed imperdiet risus, urna nibh id blandit enim. Pharetra orci
            ornare viverra arcu dui molestie sit. Blandit ac tempor, sapien,
            tellus lectus. Dignissim nec sed imperdiet risus, urna nibh id
            blandit enim. Pharetra orci ornare viverra arcu dui molestie sit.
            Blandit ac tempor, sapien, tellus lectus.
          </p>
        </div>

        <div className="article-block image-block">
          <figure>
            <img src={openJPG} alt="open" />
            <figcaption>Image annotation</figcaption>
          </figure>
        </div>

        {/* <div className="article-block block-standard-heading-text">
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
        </div> */}

        {/* <div className="article-block block-quote-text text-center">
          <blockquote className="quote-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            dui, ac velit sed et risus dui quis eros. In dui in sed donec.
            Tortor tincidunt mi condimentum nunc erat sem amet vulputate nec.
            Risus vel tristique quis est aliquam fermentum.”
          </blockquote>
          <p className="author-text mt-1">John Doe, Lethaja</p>
        </div> */}

        {/* <div className="article-block image-block">
          <figure>
            <img src={openJPG} alt="open" />
            <figcaption>Image annotation</figcaption>
          </figure>
        </div> */}
      </article>
    </StyledDetailsArticle>
  );
};

export default DetailsArticle;
