import React, { useState } from "react";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import styles from "./styles.module.scss";

const CustomCarousel = ({ children, data }) => {
  const [toggler, setToggler] = useState(false);
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const handleSlideClick = () => {
    setToggler(!toggler);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Verify that the child is a valid element
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: () => handleSlideClick(),
      });
    }
    return child;
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselBox}>
        <Slider {...settings} afterChange={(index) => setActiveSlideNumber(index)}>
          {childrenWithProps}
        </Slider>
      </div>

      <FsLightbox
        toggler={toggler}
        sourceIndex={activeSlideNumber}
        sources={data.map((e) => e.image)}
        slide={activeSlideNumber}
        key={activeSlideNumber}
      />
    </div>
  );
};

export default CustomCarousel;

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow className={"nextArrow"} />,
  prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div
      style={{
        color: "red",
        bottom: "-90px",
      }}
    >
      <ul
        style={{ margin: "0rem", fontSize: "2px", color: "red", padding: 0 }}
        className="carouselDotsList"
      >
        {dots}
      </ul>
    </div>
  ),
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
