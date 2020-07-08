import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import React from "react";

function LazyLoading({ image, alt, className }) {
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      effect="opacity"
      src={image}
    />
  );
}

export default LazyLoading;
