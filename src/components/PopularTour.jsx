import { PopularToursData } from "../Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { PopularTourStyle } from "../homeFolder/homePage/HomeStyles";

export const PopularTour = () => {
  return (
    <div style={{ position: "relative" }}>
      <h1 style={{ marginTop: 40, marginBottom: 30 }}>Popular Tour Offers</h1>
      <Carousel tours={PopularToursData} />
    </div>
  );
};
function TourItem({ data }) {
  return (
    <>
      <PopularTourStyle>
        <img src={data.url} alt="" />
        <h4>{data.title}</h4>
        <p>{data.text}</p>
        <p>{data.price}</p>
      </PopularTourStyle>
    </>
  );
}

function Carousel({ tours }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {tours?.map((tour) => (
          <TourItem key={tour.id} data={tour} />
        ))}
      </Slider>
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaAngleLeft
      className={className}
      style={{
        ...style,
        zIndex: 1,
        color: "gray",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaAngleRight
      className={className}
      style={{
        ...style,

        zIndex: 1,
        color: "gray",
        position: "absolute",
        top: 0,
        right: 0,
      }}
      onClick={onClick}
    />
  );
};

export default Carousel;
